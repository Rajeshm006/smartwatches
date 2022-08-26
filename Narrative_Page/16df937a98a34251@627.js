// https://observablehq.com/@rajeshm006/smart-watches-visualisation@627
import define1 from "./6dcf44d762a0599e@4320.js";

function _1(md){return(
md`# Smart Watches - Visualisation`
)}

function _url(){return(
"https://docs.google.com/spreadsheets/d/e/2PACX-1vRBC93ltK9ldzpqj94-wLihQ4A-l-F_ZB9a-7BuKLlzy2QIENUeuKMUxkC28EJYXDnvcuQJ4RrwXLOP/pub?gid=1653990893&single=true&output=csv"
)}

function _data(d3,url){return(
d3.csv(url,d3.autoType)
)}

function _4(Inputs,data){return(
Inputs.table(data)
)}

function _roughdata1(data){return(
data.filter(d => d.Brand === "Yes")
)}

function _dataPlot2(data,Voice){return(
data.filter(d => d.Voice_Assistant === Voice)
)}

function _7(Inputs,dataPlot2){return(
Inputs.table(dataPlot2)
)}

function _Voice(Inputs){return(
Inputs.radio(["Yes", "No"], {value: "Yes", label: "Voice Assistant"})
)}

function _chart1(Plot,data){return(
Plot.plot({
  marginLeft: 70,
  // Pass in an array of desired marks
  marks: [
    // Create a line mark
    

    // Create a dot mark
    Plot.dot(data, {
      y: "Brand",      // feature for the x channel
      x: "Price",     // feature for the y channel
      fill: "Voice_Assistant",  // feature for the stroke
    }), 
  
    // Display a horizontal line at y = 0
    Plot.ruleY([0])
  ], 
  
  // Include a legend for the color channel 
  color: {
    legend: true,
  }
})
)}

function _11(Plot,data){return(
Plot.plot({
  // Pass in an array of desired marks
  marks: [
    // Create a line mark
    

    // Create a dot mark
    Plot.dot(data, {
      x: "WatchID",      // feature for the x channel
      y: "Price",     // feature for the y channel
      fill: "Brand",  // feature for the stroke
    }), 

    Plot.line(data, {
      x: "WatchID",       // feature for the x channel
      y: "Price",      // feature for the y channel
      stroke: "Brand", // feature for the stroke
    }), 
  

    // Display a horizontal line at y = 0
    Plot.ruleY([0])
  ], 
  
  // Include a legend for the color channel 
  color: {
    legend: true,
  }
})
)}

function _12(Plot,data){return(
Plot.plot({
  y: {
    domain: [0, 10],
    grid: true,

  },
  marks: [
    Plot.barY(data, Plot.groupX({y: "count"}, {x: "Rating",sort: {x: "y", reverse: true}})),
    Plot.ruleY([0])
  ],
  style: {
    backgroundColor: "#7e9a9a",
    color: "#e0f5ee",
    fontFamily: "system-ui",
    fontSize: "9px",
    overflow: "visible"
  },
  width: 802,
  margin: 50

})
)}

function _13(Plot,data){return(
Plot.plot({
  x: {
    round: true
  },
  color: {
    scheme: "GnBU"
  },
  marks: [
    Plot.barX(data, Plot.binX({fill: "count"}, {x: "Rating"}))
  ],
  
  // color: {
  //   legend: true,
  // }
})
)}

function _14(Plot,data){return(
Plot.plot({
  grid: true,
  round: true,
  y: {type: "log", domain: [1e3, 1e6], tickFormat: ","},
  r: {
    range: [0, 10]
  },
  marks: [
    Plot.dot(data, Plot.bin({r: "count"}, {x: "Rating", y: "Rated_Count", stroke: "Brand"}))
  ],
    marginLeft: 70,   // space to the left of the chart
  marginBottom: 50, // space below the chart
  //insetBottom: 33,  // space between the x-axis and the marks
  insetLeft: 29,    // space between the y-axis and the marks

  color: {
    legend: true,
  }
  
})
)}

function _15(Plot,d3,data){return(
Plot.plot({
  marginLeft: 150,
  padding: 0,
  x: {
    round: true,
    grid: true
  },
  fy: {
    label: null,
    domain: d3.groupSort(data, g => d3.median(g, d => d.Rating), d => d.Watch_Name)
  },
  color: {
    scheme: "YlGnBu"
  },
  facet: {
    data: data,
    marginLeft: 150,
    y: "Watch_Name"
  },
  marks: [
    Plot.barX(data, Plot.binX({fill: "proportion-facet"}, {x: "Rating", inset: 0.5}))
  ]
})
)}

function _16(Plot,d3,data){return(
Plot.plot({
  marginLeft: 150,
  padding: 0,
  x: {
    round: true,
    grid: true
  },
  fy: {
    label: null,
    domain: d3.groupSort(data, g => d3.median(g, d => d.Price), d => d.Brand)
  },
  color: {
    scheme: "YlGnBu"
  },
  facet: {
    data: data,
    marginLeft: 150,
    y: "Brand"
  },
  marks: [
    Plot.barX(data, Plot.binX({fill: "proportion-facet"}, {x: "Price", inset: 0.5})),
     Plot.dot(data, {
      //x: "WatchID",      // feature for the x channel
      x: "Price",     // feature for the y channel
      //fill: "Voice_Assistant",  // feature for the stroke
    }), 
  ]
})
)}

function _17(Plot,d3,data){return(
Plot.plot({
  marginLeft: 150,
  padding: 0,
  x: {
    round: true,
    grid: true
  },
  fy: {
    label: null,
    domain: d3.groupSort(data, g => d3.median(g, d => d.Rated_Count), d => d.Rating)
  },
    color: {
      scheme: "YlGnBu"
    },
  facet: {
    data: data,
    marginLeft: 150,
    y: "Rating"
  },
  marks: [
    Plot.barX(data, Plot.binX({fill: "proportion-facet"}, {x: "Rated_Count", inset: 0.5}))
  ]
})
)}

function _18(Plot,d3,data){return(
Plot.plot({
  marginLeft: 150,
  padding: 0,
  x: {
    round: true,
    grid: true
  },
  fy: {
    label: null,
    domain: d3.groupSort(data, g => d3.median(g, d => d.Rating), d => d.Brand)
  },
    color: {
      scheme: "YlGnBu"
    },
  facet: {
    data: data,
    marginLeft: 150,
    y: "Brand"
  },
  marks: [
    Plot.barX(data, Plot.binX({fill: "proportion-facet"}, {x: "Rating", inset: 0.5}))
  ]
})
)}

function _20(Wrangler,data){return(
Wrangler(data)
)}

function _data1(aq,data){return(
aq.from(data)
	.filter(d => d["WatchID"] !== "null")
)}

function _22(Inputs,data){return(
Inputs.table(data)
)}

function _chart2(Plot,data1){return(
Plot.plot({
  marginLeft: 70,
  // Pass in an array of desired marks
  marks: [
    // Create a line mark
    

    // Create a dot mark
    Plot.dot(data1, {
      y: "Brand",      // feature for the x channel
      x: "Price",     // feature for the y channel
      fill: "Voice_Assistant",  // feature for the stroke
    }), 
  
    // Display a horizontal line at y = 0
    Plot.ruleY([0])
  ], 
  
  // Include a legend for the color channel 
  color: {
    legend: true,
  }
})
)}

function _24(md){return(
md`### Question 15 : What is the price of the watch ? `
)}

function _25(Plot,data){return(
Plot.plot({
 marginLeft: 160,
  y: {
     label: "Watch Model →" ,
    grid: true,
    // transform: d => d / 1000
  },
   x: {
     label: "Price in Rupees →",
    grid: true,
 
  },
  
  marks: [
    Plot.barX(data, {x: "Price", y: "Watch_Name",fill: "Brand",sort: {x: "y", reverse: true}}),
     Plot.ruleY([0])
     
  ],
    color: {
    legend: true,
  }

})
)}

function _26(Wrangler,data){return(
Wrangler(data)
)}

function _sortedpricedata(aq,data){return(
aq.from(data)
	.orderby("Price")
	.groupby('Brand')
)}

function _28(Plot,sortedpricedata){return(
Plot.plot({
  marginBottom:150,
  
   y: {
     label: "↑ Price in Rupees",
    grid: true,
    // transform: d => d / 1000
  },
   x: {
     nice: true,
     //domain: "Watch_Name",
     label: "Watch Model →",
     tickRotate: 90,
    grid: true,
     legend: false,
     //domain: d3.sort(data, d => -d.frequency).map(d => d.letter)
 
  },
  
  marks: [
    Plot.barY(sortedpricedata, {x: "Watch_Name", y: "Price",fill: "Brand", sort:"Price"
                    
                    }),
        // Plot.barY(data, Plot.groupX({y: "count"}, {y: "Price", x:"Watch_Name", sort: {x: "y", reverse: true}})),
     Plot.ruleY([0]),
  //  Plot.text(data, {x: "Watch_Name", y: "Price", text: d => (d.Price * 100).toFixed(1), dy: -5}),
     
  ],
  color: {
    legend: true,
  }

})
)}

function _29(Plot,data){return(
Plot.plot({
  marginBottom:150,
  
   y: {
     label: "↑ Price in Rupees",
    grid: true,
    // transform: d => d / 1000
  },
   x: {
     nice: true,
     //domain: "Watch_Name",
     label: "Watch Model →",
     tickRotate: 90,
    grid: true,
     legend: false,
     
 
  },
  
  marks: [
    Plot.barY(data, {x: "Watch_Name", y: "Price",facet: "exclude",fill: "Brand"
                    
                    }),
     //   Plot.barY(data, Plot.groupX({y: "count"}, {x: "Watch_Name", sort: {x: "y", reverse: true}})),
     Plot.ruleY([0]),
  //  Plot.text(data, {x: "Watch_Name", y: "Price", text: d => (d.Price * 100).toFixed(1), dy: -5}),
     
  ],
  color: {
    legend: true,
  }

})
)}

function _30(Plot,data){return(
Plot.plot({
  x: {
    domain: [0, 10000]
  },
  marks: [
    //Plot.tickX({length: 500}, {x: d3.randomNormal(), strokeOpacity: 0.2}),
 
     Plot.tickX(data , {x:"Price", fill: "Brand",strokeOpacity: 0.4} ),
     Plot.frame({stroke: "#34d0eb",strokeOpacity: 0.4})
  ]
})
)}

function _31(Plot,data){return(
Plot.plot({
   marginLeft: 180,
  x: {
    round: true
  },
  color: {
  //  type: "diverging",
    scheme: "BuRd"
  },
  marks: [
    Plot.barX(data, {
      x: "Price",
      y:"Watch_Name",
     // interval: d3.utcYear, // yearly data
      inset: 0, // no gaps
      fill: "Price"
    })
  ]
 
})
)}

function _chart12(Plot,data){return(
Plot.plot({
  marks: [
    Plot.dot(data,  Plot.dodgeY({x: "Price",  fill: "White" , stroke:"Brand"})),
  ],
    color: {
    legend: true,
  }
})
)}

function _chart4(Plot,data){return(
Plot.plot({
  // marginLeft: 180,
  facet: {
    data: data,
    y: "Brand",
    marginRight: 180,
    marginLeft: 100
  },
  marks: [
    // Plot.rectY(data, Plot.binX({y: "count"}, {x: "Price", thresholds: 20 })),
    Plot.dot(data,  Plot.dodgeY({x: "Price",  fill: "White" , symbol:"Dial_Type", stroke:"Brand"})),
  ]
})
)}

function _34(Plot,data){return(
Plot.plot({
  grid: true,
   marginRight: 180,
  facet: {
    data: data,
    y: "Brand",
    marginRight: 180
  },
  marks: [
    // Plot.rectY(data, Plot.binX({y: "count"}, {x: "Price", thresholds: 20 })),
    Plot.rectY(data, Plot.binX({y: "count"}, {x: "Price", fill: "Brand", Opacity: 0.4, thresholds: 20 })),
    Plot.ruleY([0]),
    Plot.dot(data, {
     
      x: "Price",  fill: "White" , stroke:"Brand", 
     
    }), 
  ]
})
)}

function _35(Plot,data){return(
Plot.plot({
  facet: {
    data: data,
    y: "Brand",
    marginLeft: 80
  },
  marks: [
    Plot.voronoi(data, {
      x: "Price",
      fill: "Brand",
      strokeOpacity: 0.2
    }),
    Plot.voronoiMesh(data, {
      x: "Price",
      stroke: "white",
      strokeOpacity: 1
    })
  ]
})
)}

function _36(Plot,data){return(
Plot.plot({
  marginLeft: 120,
  padding: 0,
  x: {
    round: true,
    grid: true
  },
  
  // color: {
  //   scheme: "YlGnBu"
  // },
  facet: {
    data: data,
    marginLeft: 100,
    y: "Brand"
  },
  marks: [
   // Plot.barX(data, Plot.binX({fill: "proportion-facet"}, {x: "Price", inset: 0.5})),
     Plot.dot(data, {
      //x: "WatchID",      // feature for the x channel
      x: "Price",  fill: "Brand", shape: "Dial_Type"  // feature for the y channel
      //fill: "Voice_Assistant",  // feature for the stroke
    }), 
  ]
})
)}

function _37(md){return(
md`### 2.how is the design of the smart watch ?`
)}

function _38(Plot,data){return(
Plot.plot({
  marginLeft: 120,
  padding: 0,
  x: {
    round: true,
    grid: true
  },
  
  facet: {
    data: data,
    marginLeft: 100,
    y: "Brand"
  },
  marks: [
   
     Plot.dot(data, {
     
      x: "Dial_Type",  fill: "Brand",  
    }), 
  ]
})
)}

function _39(Plot,data){return(
Plot.plot({
  
   y: {
     label: "↑ Count",
    grid: true,
   
  },
   x: {
     nice: true,
    
     label: "Dial Type →",
    grid: true,
     legend: false
 
  },
  
  marks: [
    Plot.barY(data, Plot.groupX({y: "count"}, {x: "Dial_Type",fill:"Brand", sort: {x: "y", reverse: true}})),
     Plot.ruleY([0]),
  //  Plot.text(data, {x: "Watch_Name", y: "Price", text: d => (d.Price * 100).toFixed(1), dy: -5}),
     
  ],
  color: {
    legend: true,
  }

})
)}

function _40(Plot,data){return(
Plot.plot({
   marginLeft: 120,
   padding: 0.2,
  x: {
    //tickFormat: d => d === null ? "N/A" : d,
    legend:false,inset: 1
  },
  y: {
    grid: true
  },
  facet: {
    data: data,
    x: "Brand"
  },
  marks: [
    Plot.barY(data, Plot.groupX({y: "count"}, {x: "Dial_Type",fill:"Dial_Type"})),
    Plot.ruleY([0]),
  //  Plot.frame(),
  ],
   color: {
    legend: true,
  }
})
)}

async function _svgicons(FileAttachment){return(
{
  Rectangular: await FileAttachment("rounded.svg").url(),
  Round: await FileAttachment("circle@1.svg").url(),
Square: await FileAttachment("square@1.svg").url()

}
)}

function _rect1(data){return(
data.filter(d => d.Dial_Type === "Square")
)}

function _data12(){return(
[
  [20, "Rectangular"],
  [6, "Round"],
  [7, "Square"]
]
)}

function _44(Inputs,data){return(
Inputs.table(data)
)}

function _45(Plot,data12,svgicons){return(
Plot.plot({
  grid: true,
  x: {inset: 8, axis: null},
  y: {domain: [1, 20]},
  marks: [
    Plot.ruleY([0, 1]),
    Plot.image(data12, {
      x: "Dial_type",
      y: "count",
      src: ([, type]) => svgicons[type]
    })
  ]
})
)}

function _tinyData(aq,data){return(
aq.from(data)
	.select('WatchID','Dial_Type')
  .orderby("Dial_Type")
  .derive({"rank":true})
  .groupby("Dial_Type")
  .derive({"rank": aq.op.row_number()})
	.objects()
)}

function _48(Inputs,tinyData){return(
Inputs.table(tinyData, {width: 400})
)}

function _49(Plot,tinyData){return(
Plot.plot({
  grid: true,
  x: {inset: 8, axis: null},
  y: {domain: [1, 20]},
  marks: [
    Plot.ruleY([0, 1]),
    Plot.dot(tinyData, {
      x: "Dial_Type",
      y: "rank",
      symbol: "Dial_Type",
      storke:"Brand"
    })
  ]
})
)}

function _SleepTrack(data){return(
data.filter(d => d.Sleep_Tracking === "Yes")
)}

function _HeartRate(data){return(
data.filter(d => d.Heart_Rate_Monitor === "Yes")
)}

function _StepTrack(data){return(
data.filter(d => d.Step_Tracking === "Yes")
)}

function _BloodOxygenLevel(data){return(
data.filter(d => d.Blood_Oxygen_Level_Monitor === "Yes")
)}

function _VoiceAssistant(data){return(
data.filter(d => d.Blood_Oxygen_Level_Monitor === "Yes")
)}

function _StressLevel(data){return(
data.filter(d => d.Stress_Level_Tracking === "Yes")
)}

function _CalorieTracker(data){return(
data.filter(d => d.Cal === "Yes")
)}

function _Voice1(Inputs){return(
Inputs.radio(["SleepTrack", "HeartRate",], {value: "SleepTrack", label: "Features"})
)}

function _dataFilter(data){return(
data.filter(d => d.Stress_Level_Tracking === "No")
)}

function _59(Plot,dataFilter){return(
Plot.plot({
   y: {
     label: "↑ Price in Rupees",
    grid: true,
  },
   x: {
     nice: true,
     label: "Watch Model →",
    grid: true,
     legend: false
  },
  marks: [ 
    Plot.dot(dataFilter, {x: "Brand", y: "Price",facet: "exclude",fill: "Brand"}),
    Plot.ruleY([0]),     
  ],
  color: {
    legend: true,
  }
})
)}

function _60(Plot,data){return(
Plot.plot({
  
   y: {
     label: "↑ Price in Rupees",
    grid: true,
    // transform: d => d / 1000
  },
   x: {
     nice: true,
     //domain: "Watch_Name",
     label: "Watch Model →",
    grid: true,
     legend: false
 
  },
  


 
  marks: [
    Plot.barY(data.filter(d => d.Stress_Level_Tracking === "Yes"), {x: "Watch_Name", y: "Price",facet: "exclude",fill: "Brand"
                    
                    }),
     Plot.ruleY([0]),
  //  Plot.text(data, {x: "Watch_Name", y: "Price", text: d => (d.Price * 100).toFixed(1), dy: -5}),
     
  ]


,
  color: {
    legend: true,
  }

})
)}

function _61(Plot,data){return(
Plot.plot({
  height: 640,
  padding: 0.05,
 marginLeft: 180,
  grid: true,
  x: {
    axis: "top",
    label: "Stress_Level_Tracking"
    
  },
  y: {
    label: "Watch Name"
  
  },

  // color: {
  //   scheme: "PiYG"
  // },

  //  facet: {
  //   data: data,
  //   y: "Brand"
  // },
  marks: [
    Plot.cell(data, {
      x: "Stress_Level_Tracking",
     // x1:"Heart_Rate_Monitor",
      y: "Watch_Name",
      fill: "Stress_Level_Tracking",
       rx: 8 // uncomment for circles
      
    }),

    //   Plot.cell(data, {
    //   x: "Heart_Rate_Monitor",
    //   y: "Watch_Name",
    //   fill: "Heart_Rate_Monitor",
    //    rx: 8 // uncomment for circles
    // })
    
  ]
})
)}

function _62(Plot,data){return(
Plot.plot({
  marginLeft: 180,
  
 marks: [
    Plot.cell(data, {
      x: "Stress_Level_Tracking",
     // x1:"Heart_Rate_Monitor",
      y: "Watch_Name",
      fill: "Stress_Level_Tracking",
       rx: 8 // uncomment for circles
      
    }),
  ]
})
)}

function _63(Plot,data,html)
{
  const plot1 = Plot.plot({
  marginLeft: 180,
  
 marks: [
    Plot.cell(data, {
      x: "Stress_Level_Tracking",
     // x1:"Heart_Rate_Monitor",
      y: "Watch_Name",
      fill: "Stress_Level_Tracking",
       rx: 8 // uncomment for circles
      
    }),
  ]
});

    const plot2 = Plot.plot({
  marginLeft: 180,
  
 marks: [
    Plot.cell(data, {
      x: "Notification",
     // x1:"Heart_Rate_Monitor",
      y: "Watch_Name",
      fill: "Notification",
       rx: 8 // uncomment for circles
      
    }),
  ]
});

 return html`${plot1}${plot2}`;
}


export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["square@1.svg", {url: new URL("./files/668c246e8e3c0a499175c47229d187fbc8592fe5479e2511e22e3d80e191ca702716058feca64074e8c1ded2e4c07ce9506e79d0d2ed25b74ddd7d3a1929cc37.svg", import.meta.url), mimeType: "image/svg+xml", toString}],
    ["circle@1.svg", {url: new URL("./files/8da9683da70140eb9f25bfa5fe436a68dfdc2416853986266b798a965aaeeb913aad65d19e80e88487a4a3ab6632d4a98553569396c32917673df2976b3c79b1.svg", import.meta.url), mimeType: "image/svg+xml", toString}],
    ["rounded.svg", {url: new URL("./files/d7073d442ca0edc8deb6c7c65d2b45b9abcc38a7fa0e9813c7beaadb663c48c930ac1df360823bc798d36a688557dfe999cc149721135a69675ba013a26df829.svg", import.meta.url), mimeType: "image/svg+xml", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("url")).define("url", _url);
  main.variable(observer("data")).define("data", ["d3","url"], _data);
  main.variable(observer()).define(["Inputs","data"], _4);
  main.variable(observer("roughdata1")).define("roughdata1", ["data"], _roughdata1);
  main.variable(observer("dataPlot2")).define("dataPlot2", ["data","Voice"], _dataPlot2);
  main.variable(observer()).define(["Inputs","dataPlot2"], _7);
  main.variable(observer("viewof Voice")).define("viewof Voice", ["Inputs"], _Voice);
  main.variable(observer("Voice")).define("Voice", ["Generators", "viewof Voice"], (G, _) => G.input(_));
  main.variable(observer("viewof chart1")).define("viewof chart1", ["Plot","data"], _chart1);
  main.variable(observer("chart1")).define("chart1", ["Generators", "viewof chart1"], (G, _) => G.input(_));
  main.variable(observer()).define(["Plot","data"], _11);
  main.variable(observer()).define(["Plot","data"], _12);
  main.variable(observer()).define(["Plot","data"], _13);
  main.variable(observer()).define(["Plot","data"], _14);
  main.variable(observer()).define(["Plot","d3","data"], _15);
  main.variable(observer()).define(["Plot","d3","data"], _16);
  main.variable(observer()).define(["Plot","d3","data"], _17);
  main.variable(observer()).define(["Plot","d3","data"], _18);
  const child1 = runtime.module(define1);
  main.import("Wrangler", child1);
  main.import("op", child1);
  main.variable(observer()).define(["Wrangler","data"], _20);
  main.variable(observer("data1")).define("data1", ["aq","data"], _data1);
  main.variable(observer()).define(["Inputs","data"], _22);
  main.variable(observer("viewof chart2")).define("viewof chart2", ["Plot","data1"], _chart2);
  main.variable(observer("chart2")).define("chart2", ["Generators", "viewof chart2"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _24);
  main.variable(observer()).define(["Plot","data"], _25);
  main.variable(observer()).define(["Wrangler","data"], _26);
  main.variable(observer("sortedpricedata")).define("sortedpricedata", ["aq","data"], _sortedpricedata);
  main.variable(observer()).define(["Plot","sortedpricedata"], _28);
  main.variable(observer()).define(["Plot","data"], _29);
  main.variable(observer()).define(["Plot","data"], _30);
  main.variable(observer()).define(["Plot","data"], _31);
  main.variable(observer("viewof chart12")).define("viewof chart12", ["Plot","data"], _chart12);
  main.variable(observer("chart12")).define("chart12", ["Generators", "viewof chart12"], (G, _) => G.input(_));
  main.variable(observer("chart4")).define("chart4", ["Plot","data"], _chart4);
  main.variable(observer()).define(["Plot","data"], _34);
  main.variable(observer()).define(["Plot","data"], _35);
  main.variable(observer()).define(["Plot","data"], _36);
  main.variable(observer()).define(["md"], _37);
  main.variable(observer()).define(["Plot","data"], _38);
  main.variable(observer()).define(["Plot","data"], _39);
  main.variable(observer()).define(["Plot","data"], _40);
  main.variable(observer("svgicons")).define("svgicons", ["FileAttachment"], _svgicons);
  main.variable(observer("rect1")).define("rect1", ["data"], _rect1);
  main.variable(observer("data12")).define("data12", _data12);
  main.variable(observer()).define(["Inputs","data"], _44);
  main.variable(observer()).define(["Plot","data12","svgicons"], _45);
  main.variable(observer("tinyData")).define("tinyData", ["aq","data"], _tinyData);
  main.variable(observer()).define(["Inputs","tinyData"], _48);
  main.variable(observer()).define(["Plot","tinyData"], _49);
  main.variable(observer("SleepTrack")).define("SleepTrack", ["data"], _SleepTrack);
  main.variable(observer("HeartRate")).define("HeartRate", ["data"], _HeartRate);
  main.variable(observer("StepTrack")).define("StepTrack", ["data"], _StepTrack);
  main.variable(observer("BloodOxygenLevel")).define("BloodOxygenLevel", ["data"], _BloodOxygenLevel);
  main.variable(observer("VoiceAssistant")).define("VoiceAssistant", ["data"], _VoiceAssistant);
  main.variable(observer("StressLevel")).define("StressLevel", ["data"], _StressLevel);
  main.variable(observer("CalorieTracker")).define("CalorieTracker", ["data"], _CalorieTracker);
  main.variable(observer("viewof Voice1")).define("viewof Voice1", ["Inputs"], _Voice1);
  main.variable(observer("Voice1")).define("Voice1", ["Generators", "viewof Voice1"], (G, _) => G.input(_));
  main.variable(observer("dataFilter")).define("dataFilter", ["data"], _dataFilter);
  main.variable(observer()).define(["Plot","dataFilter"], _59);
  main.variable(observer()).define(["Plot","data"], _60);
  main.variable(observer()).define(["Plot","data"], _61);
  main.variable(observer()).define(["Plot","data"], _62);
  main.variable(observer()).define(["Plot","data","html"], _63);
  return main;
}
