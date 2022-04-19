
// // 1st function ---------------------------------------------------------------

function buildCharts(selection) {
    d3.json("samples.json").then((date) => {

    let anotherName = date.samples.filter(item => item.id == selection)[0];
    let top_10 = anotherName.otu_ids.slice(0,10).reverse();
    console.log(top_10)
    let top_12 = anotherName.sample_values.slice(0,10).reverse();
    let top_11 = anotherName.otu_ids.reverse()
    let top_13 = anotherName.sample_values.reverse()
    console.log(top_11)


    var arr = [];

    for (let i = 0; i < top_10.length; i++) {
      arr.push("OTU " + top_10[i]);
    }


    console.log(arr)

    var bartrace = {
      type: "bar",
      x: top_12,
      y: arr,
      orientation: 'h'
  };

  var greenkData = [bartrace]
  
    Plotly.newPlot("bar", greenkData);

    var trace1 = {
      x: top_11,
      y: top_13,
      mode: 'markers',
      marker: {
        size: top_13
      }
    };
    
    var data2 = [trace1];

    var layout = {
      title: 'Marker Size',
      showlegend: false,
      height: 500,
      width: 1200
    };

    Plotly.newPlot("bubble", data2, layout);

    });

    
  }


// 2nd function ---------------------------------------------------------------

function getDemoInfo(id) {
  // read the json file to get data
      d3.json("samples.json").then((data)=> {
  // get the metadata info for the demographic panel
          var metadata = data.metadata;
  
          console.log(metadata)
  
        // filter meta data info by id
         var result = metadata.filter(meta => meta.id.toString() === id)[0];
        // select demographic panel to put data
         var demographicInfo = d3.select("#sample-metadata");
          
       // empty the demographic info panel each time before getting new id info
         demographicInfo.html("");
  
       // grab the necessary demographic data data for the id and append the info to the panel
          Object.entries(result).forEach((key) => {   
              demographicInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
          });
      });
  }

  
    //     return d.id == 941;
    // }
    // let anothermeme = date.samples.filter(gettwo)
    // console.log(anothermeme);

    // console.log(anothermeme[0]["otu_ids"])
    // let top_11 = anothermeme[0]["otu_ids"].slice(0,10).reverse();
    // console.log(top_11);

    // console.log(anothermeme[0]["sample_values"])

    // let top_13 = anothermeme[0]["sample_values"].slice(0,10).reverse();
    // console.log(top_13)

    // var arr2 = []

    // for (let j = 0; j < top_11.length; j++) { 
    //     arr2.push("otu "+top_11[j])
    

    // console.log(arr2)

// infinite function ---------------------------------------------------------------

// function myFunction() {
//    // d3 to get a reference for the dropdown elements
//   var selector = d3.select("#selDataset");

//   // populate the selec options 
//   d3.json("samples.json").then((data) => {
//     var sampleNames = data.names;
//     sampleNames.forEach((sample) => {
//       selector
//       .append("option")
//       .text(sample)
//       .property("value", sample);
//     });

//   })
// This would work for a text -------------------------------------------------------------------------------

// Dropdown List
// I'll reference this later

// function buildCharts() {
//   d3.json("samples.json").then((date) => {
//     var arr3 = []
//     for (k = 0; k < date.names.length; k++) {
//       var shark = d3.select("#selDataset").append("option")
//       var myStringArray = shark.property("value", date.names[k]).text(date.names[k])
//       var dataset = myStringArray.property("value")
      

//       function getinfinite(d){
//                 return d.id == date.names[k];
//               }
//           let anotherZeme = date.samples.filter(getinfinite)
//           let top_20 = anotherZeme[0]["otu_ids"].slice(0,10).reverse();

//           var arr2 = []
//           for (l = 0; l < top_20.length; l++) {
//             arr2.push("otu "+top_20[l])
//           }
//           console.log
//   }
// });
// }


//       var dataset = myStringArray.property("value");

//       function getinfinite(d){
//         return d.id == date.names[k];
//       }
//       let anotherZeme = date.samples.filter(getinfinite)
//       console.log(anotherZeme[0]["otu_ids"].slice(0,10));
//       console.log(anotherZeme[0]["sample_values"].slice(0,10));

//       if (dataset = date.names[k]) {
//         function init() {

  
//           mata = {
//             x: anotherZeme[0]["sample_values"].slice(0,10),
//             y: anotherZeme[0]["otu_ids"].slice(0,10),
//             type: "bar",
//             orientation: 'h'
//         };
//         Plotly.restyle("plot", "x", [x]);
//       }
//       }
//     }
    





  
    

//----------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------


function init() {

  // Read json data
  d3.json("samples.json").then((date) => {
      // Parse and filter data to get sample names
      var funk = date.names;


      // Add dropdown option for each sample
      var dropdownMenu = d3.select("#selDataset");
      var dropupMenu = d3.select("#sample-metadata");
      for (k = 0; k < funk.length; k++){

          dropdownMenu.append("option").property("value", funk[k]).text(funk[k]);
      }

      // Use first sample to build metadata and initial plots
      getDemoInfo(funk[0]);
      buildCharts(funk[0]);

  });
}
//---------------------------------------------------------------

function optionChanged(newSample) {
  getDemoInfo(newSample);
  buildCharts(newSample);
  }

init();
