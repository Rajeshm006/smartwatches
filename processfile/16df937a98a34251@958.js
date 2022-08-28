// https://observablehq.com/@rajeshm006/smart-watches-visualisation@958
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
marginLeft: 70,   // space to the left of the chart
  marginTop: 2000, 
  r: {
    range: [0, 10]
  },
    
  marks: [
    Plot.dot(data,  Plot.dodgeY({x: "Rating",  fill: "White" , stroke:"Brand"})),
  ],
  //   color: {
  //   legend: true,
  // }
})
)}

function _15(Plot,data){return(
Plot.plot({ 
  grid: true,
  round: true,
  marginLeft: 70,   // space to the left of the chart
  marginBottom: 50, 
   r: {
    range: [0, 20]
  },
   marks: [
  Plot.dot(data, {x: "Rating", y: "Price", stroke: "Brand", r:"Rated_Count"})
     ]
          })
)}

function _16(Plot,data){return(
Plot.plot({ 
  grid: true,
  round: true,
   height: 350,
  marginLeft: 70,   // space to the left of the chart
  marginBottom: 50, 
   r: {
    range: [0, 20]
  },
   marks: [
  Plot.dot(data, Plot.dodgeY({x: "Rating", stroke: "Brand", r:"Rated_Count"}))
     ]
          })
)}

function _Rating_vs_Rated_Chart(Plot,data){return(
Plot.plot({
  grid: true,
  round: true,
  y: {type: "log", domain: [1e3, 1e6], tickFormat: ","},
  r: {
    range: [0, 10]
  },
  marks: [
    Plot.dot(data, Plot.bin({r: "count"}, {x: "Rating", y: "Rated_Count", stroke: "Brand"}))

    // Plot.dot(data,  Plot.dodgeY({x: "Rating",  fill: "White" , stroke:"Brand",r: "count"})),
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

function _19(Plot,d3,data){return(
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

function _20(Plot,d3,data){return(
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

function _21(Plot,d3,data){return(
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

function _23(Wrangler,data){return(
Wrangler(data)
)}

function _data1(aq,data){return(
aq.from(data)
	.filter(d => d["WatchID"] !== "null")
)}

function _25(Inputs,data){return(
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

function _27(md){return(
md`### Question 15 : What is the price of the watch ? `
)}

function _28(Plot,data){return(
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

function _29(Wrangler,data){return(
Wrangler(data)
)}

function _sortedpricedata(aq,data){return(
aq.from(data)
	.orderby("Price")
	.groupby('Brand')
)}

function _31(Plot,sortedpricedata){return(
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

function _32(Plot,data){return(
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

function _33(Plot,data){return(
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

function _34(Plot,data){return(
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

function _chart123(Plot,data){return(
Plot.plot({
   grid: true,
 height:100,

  
  marks: [
    Plot.dot(data,  Plot.dodgeY({x: "Price",  fill: "Brand" , stroke:"Brand", r:3})),
    
  ],
  //   color: {
  //   legend: true,
  // }
})
)}

function _chart09(Plot,data){return(
Plot.plot({
   grid: true,
 height:100,

  
  marks: [
    Plot.dot(data,  Plot.dodgeY({x: "Price",  fill: "Brand" , stroke:"Brand", r:3})),
    
  ],
    color: {
    legend: true,
  }
})
)}

function _37(Plot,data){return(
Plot.plot({
   grid: true,
  height:100,
  // marginBottom: 100,
  
  marks: [
    Plot.dot(data,  Plot.dodgeY({x: "Price",  fill: "Brand" , stroke:"Brand", r:3})),
    
  ],
  //   color: {
  //   legend: true,
  // }
})
)}

function _38(Plot,data){return(
Plot.plot({
  marks: [
    Plot.dot(data,  Plot.dodgeY({x: "Price",  fill: "Brand" , stroke:"Brand"})),
    //  Plot.ruleY([0]),
  ],

    color: {
    legend: true,
  }
})
)}

function _chart4(Plot,data){return(
Plot.plot({
  // marginLeft: 180,
  grid: true,
  facet: {
    data: data,
    y: "Brand",
    marginRight: 180,
    marginLeft: 100
  },
  marks: [
    // Plot.rectY(data, Plot.binX({y: "count"}, {x: "Price", thresholds: 20 })),
    Plot.dot(data,  Plot.dodgeY({x: "Price",  fill: "White" , symbol:"Dial_Type", stroke:"Brand" })),
    
  ],
  symbol: {
    legend: true,
  }
  
})
)}

function _40(Plot,data){return(
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

function _41(Plot,data){return(
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

function _pricevsbrandchart(Plot,data){return(
Plot.plot({
  marginLeft: 120,
  padding: 0,
  x: {
    round: true,
    grid: true, 
    //axis: "top",
    label: "Price in Rupees →"
    
  },

  
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

function _43(md){return(
md`### 2.how is the design of the smart watch ?`
)}

function _44(Plot,data){return(
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

function _45(Plot,data){return(
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

function _46(Plot,data){return(
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

function _50(Inputs,data){return(
Inputs.table(data)
)}

function _51(Plot,data12,svgicons){return(
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
	.select('WatchID','Dial_Type','Brand')
  .orderby("Dial_Type")
  .derive({"rank":true})
  .groupby("Dial_Type")
  .derive({"rank": aq.op.row_number()})
	.objects()
)}

function _54(Inputs,tinyData){return(
Inputs.table(tinyData, {width: 400})
)}

function _dialtypechart(Plot,tinyData){return(
Plot.plot({
  grid: true,
//  marginBottom:100,
  x: {inset: 8, axis: null},
  y: {domain: [0, 20]},
  marks: [
   // Plot.ruleY(),
    Plot.dot(tinyData, {
      x: "Dial_Type",
      y: "rank",
      symbol: "Dial_Type",
      fill:"Brand",
    //sort: "count"
    }),
    // Plot.ruleY([0]),
  ],
    symbol: {
    legend: true,
  },
    color: {
    legend: true,
  }
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

function _65(Plot,dataFilter){return(
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

function _66(Plot,data){return(
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

function _67(Plot,data){return(
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

function _68(Plot,data){return(
Plot.plot({
  marginLeft: 180,
    grid:true,
  
 marks: [
    Plot.cell(data, {
      x: "Android_Device_Compatability",
     // x1:"Price",
      y: "Watch_Name",
      //y1: "Price",
      fill: "Android_Device_Compatability",
       rx: 8 // uncomment for circles
      
    }),
  ]
})
)}

function _69(Plot,data){return(
Plot.plot({
  marginLeft: 180,
    grid:true,
  
 marks: [
    Plot.cell(data, {
      x: "IOS_Device_Compatability",
      y: "Watch_Name",
      fill: "IOS_Device_Compatability",
       rx: 8 // uncomment for circles
      
    }),
  ]
})
)}

function _70(Plot,data){return(
Plot.plot({
  marginLeft: 180,
    grid:true,
  
 marks: [
    Plot.cell(data, {
      x: "Heart_Rate_Monitor",
      y: "Watch_Name",
      fill: "Heart_Rate_Monitor",
       rx: 8 // uncomment for circles
      
    }),
  ]
})
)}

function _71(Plot,data){return(
Plot.plot({
  marginLeft: 180,
    grid:true,
  
 marks: [
    Plot.cell(data, {
      x: "Sleep_Tracking",
      y: "Watch_Name",
      fill: "Sleep_Tracking",
       rx: 8 // uncomment for circles
      
    }),
  ]
})
)}

function _72(Plot,data){return(
Plot.plot({
  marginLeft: 180,
    grid:true,
  
 marks: [
    Plot.cell(data, {
      x: "Step_Tracking",
      y: "Watch_Name",
      fill: "Step_Tracking",
       rx: 8 // uncomment for circles
      
    }),
  ]
})
)}

function _73(Plot,data){return(
Plot.plot({
  marginLeft: 180,
    grid:true,
  
 marks: [
    Plot.cell(data, {
      x: "Blood_Oxygen_Level_Monitor",
      y: "Watch_Name",
      fill: "Blood_Oxygen_Level_Monitor",
       rx: 8 // uncomment for circles
      
    }),
  ]
})
)}

function _74(Plot,data){return(
Plot.plot({
  marginLeft: 180,
    grid:true,
  
 marks: [
    Plot.cell(data, {
      x: "Voice_Assistant",
      y: "Watch_Name",
      fill: "Voice_Assistant",
       rx: 8 // uncomment for circles
      
    }),
  ]
})
)}

function _75(Plot,data){return(
Plot.plot({
  marginLeft: 180,
    grid:true,
  
 marks: [
    Plot.cell(data, {
      x: "Stress_Level_Tracking",
      y: "Watch_Name",
      fill: "Stress_Level_Tracking",
       rx: 8 // uncomment for circles
      
    }),
  ]
})
)}

function _76(Plot,data){return(
Plot.plot({
  marginLeft: 180,
    grid:true,
  
 marks: [
    Plot.cell(data, {
      x: "Cal",
      y: "Watch_Name",
      fill: "Cal",
       rx: 8 // uncomment for circles
      
    }),
  ]
})
)}

function _77(Plot,data){return(
Plot.plot({
  marginLeft: 180,
    grid:true,
  
 marks: [
    Plot.cell(data, {
      x: "Camera & Music Control",
      y: "Watch_Name",
      fill: "Camera & Music Control",
       rx: 8 // uncomment for circles
      
    }),
  ]
})
)}

function _78(Plot,data){return(
Plot.plot({
  marginLeft: 180,
    grid:true,
  
 marks: [
    Plot.cell(data, {
      x: "Call_Attending",
      y: "Watch_Name",
      fill: "Call_Attending",
       rx: 8 // uncomment for circles
      
    }),
  ]
})
)}

function _79(Wrangler,data){return(
Wrangler(data)
)}

function _tabledummy(aq,data){return(
aq.from(data)
	.orderby(aq.desc("Rating"))
	.orderby(aq.desc("Rated_Count"))
	.groupby('WatchID','Brand')
)}

function _81(Inputs,tabledummy){return(
Inputs.table(tabledummy)
)}

function _82(Plot,data){return(
Plot.plot({
  y: {
    grid: true
  },
  marks: [
    Plot.rectY(data, Plot.binX({y: "count"}, {x: "Screen_Size_mm",inset: 0})),
    Plot.ruleY([0])
  ]
})
)}

function _83(Plot,data){return(
Plot.plot({
  y: {
    grid: true
  },
  marks: [
    Plot.areaY(data, Plot.binX({y: "count", filter: null}, {x: "Screen_Size_mm", fill: "#ccc"})),
    Plot.lineY(data, Plot.binX({y: "count", filter: null}, {x: "Screen_Size_mm"})),
    Plot.ruleY([0])
  ]
})
)}

function _84(Plot,data){return(
Plot.plot({
  y: {
    grid: true
  },
  marks: [
    Plot.rectY(data, Plot.binX({y: "count"}, {x: "Weight_gms",inset: 0,thresholds: 40,fill:"Brand"})),
    Plot.ruleY([0])
  ],
    color: {
    legend: true,
  }
})
)}

function _85(Plot,data){return(
Plot.plot({
  height: 400,
  y: {
    grid: true
  },
  marks: [
    Plot.rectY(data, Plot.binX({y: "count"}, {x: "Screen_Size_mm",inset: 0,thresholds: 10,fill:"Brand"})),
    Plot.ruleY([0])
  ],
    color: {
    legend: true,
  }
})
)}

function _86(Plot,data){return(
Plot.plot({ 
  grid: true,
  round: true,
  marginLeft: 70,   // space to the left of the chart
  marginBottom: 50, 
  marginRight: 70,
height: 400,
  width: 800,
   r: {
    range: [0, 25]
  },
   marks: [
// Plot.dot(data, {x: "Screen_Size_mm", y: "count", stroke: "Brand", r:"Rated_Count"})
  Plot.dot(data,  Plot.dodgeY({x: "Screen_Size_mm",  fill: "Brand" , stroke:"Brand",thresholds: 20,r:"Weight_gms"})),
   ]
          })
)}

function _87(Plot,data){return(
Plot.plot({ 
  grid: true,
  round: true,
  marginLeft: 70,   // space to the left of the chart
  marginBottom: 50, 
height: 400,
   r: {
    range: [0, 10]
  },
   marks: [
// Plot.dot(data, {x: "Screen_Size_mm", y: "count", stroke: "Brand", r:"Rated_Count"})
  Plot.dot(data,  Plot.dodgeY({x: "Weight_gms",  fill: "Brand" , stroke:"Brand",thresholds: 20,r:10})),
   ]
          })
)}

function _88(Plot,data){return(
Plot.plot({ 
  grid: true,
  round: true,
  marginLeft: 70,   // space to the left of the chart
  marginBottom: 50, 
height: 270,
   r: {
    range: [0, 15]
  },
   marks: [
// Plot.dot(data, {x: "Screen_Size_mm", y: "count", stroke: "Brand", r:"Rated_Count"})
  Plot.dot(data,  Plot.dodgeY({x: "Battery_life_Avg_Days",  fill: "Brand" , stroke:"Brand",thresholds: 20,r:"Weight_gms"})),
   ]
          })
)}

function _89(Plot,data){return(
Plot.plot({
  
   y: {
     label: "↑ Count",
    grid: true,
   
  },
   x: {
     nice: true,
    
     label: "Unisex →",
    grid: true,
     legend: false
 
  },
  
  marks: [
    Plot.barY(data, Plot.groupX({y: "count"}, {x: "Unisex",fill:"Unisex", sort: {x: "y", reverse: true}})),
     Plot.ruleY([0]),
  //  Plot.text(data, {x: "Watch_Name", y: "Price", text: d => (d.Price * 100).toFixed(1), dy: -5}),
     
  ],
  color: {
    legend: true,
  }

})
)}

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
  main.variable(observer()).define(["Plot","data"], _15);
  main.variable(observer()).define(["Plot","data"], _16);
  main.variable(observer("viewof Rating_vs_Rated_Chart")).define("viewof Rating_vs_Rated_Chart", ["Plot","data"], _Rating_vs_Rated_Chart);
  main.variable(observer("Rating_vs_Rated_Chart")).define("Rating_vs_Rated_Chart", ["Generators", "viewof Rating_vs_Rated_Chart"], (G, _) => G.input(_));
  main.variable(observer()).define(["Plot","d3","data"], _18);
  main.variable(observer()).define(["Plot","d3","data"], _19);
  main.variable(observer()).define(["Plot","d3","data"], _20);
  main.variable(observer()).define(["Plot","d3","data"], _21);
  const child1 = runtime.module(define1);
  main.import("Wrangler", child1);
  main.import("op", child1);
  main.variable(observer()).define(["Wrangler","data"], _23);
  main.variable(observer("data1")).define("data1", ["aq","data"], _data1);
  main.variable(observer()).define(["Inputs","data"], _25);
  main.variable(observer("viewof chart2")).define("viewof chart2", ["Plot","data1"], _chart2);
  main.variable(observer("chart2")).define("chart2", ["Generators", "viewof chart2"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _27);
  main.variable(observer()).define(["Plot","data"], _28);
  main.variable(observer()).define(["Wrangler","data"], _29);
  main.variable(observer("sortedpricedata")).define("sortedpricedata", ["aq","data"], _sortedpricedata);
  main.variable(observer()).define(["Plot","sortedpricedata"], _31);
  main.variable(observer()).define(["Plot","data"], _32);
  main.variable(observer()).define(["Plot","data"], _33);
  main.variable(observer()).define(["Plot","data"], _34);
  main.variable(observer("chart123")).define("chart123", ["Plot","data"], _chart123);
  main.variable(observer("chart09")).define("chart09", ["Plot","data"], _chart09);
  main.variable(observer()).define(["Plot","data"], _37);
  main.variable(observer()).define(["Plot","data"], _38);
  main.variable(observer("chart4")).define("chart4", ["Plot","data"], _chart4);
  main.variable(observer()).define(["Plot","data"], _40);
  main.variable(observer()).define(["Plot","data"], _41);
  main.variable(observer("viewof pricevsbrandchart")).define("viewof pricevsbrandchart", ["Plot","data"], _pricevsbrandchart);
  main.variable(observer("pricevsbrandchart")).define("pricevsbrandchart", ["Generators", "viewof pricevsbrandchart"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _43);
  main.variable(observer()).define(["Plot","data"], _44);
  main.variable(observer()).define(["Plot","data"], _45);
  main.variable(observer()).define(["Plot","data"], _46);
  main.variable(observer("svgicons")).define("svgicons", ["FileAttachment"], _svgicons);
  main.variable(observer("rect1")).define("rect1", ["data"], _rect1);
  main.variable(observer("data12")).define("data12", _data12);
  main.variable(observer()).define(["Inputs","data"], _50);
  main.variable(observer()).define(["Plot","data12","svgicons"], _51);
  main.variable(observer("tinyData")).define("tinyData", ["aq","data"], _tinyData);
  main.variable(observer()).define(["Inputs","tinyData"], _54);
  main.variable(observer("viewof dialtypechart")).define("viewof dialtypechart", ["Plot","tinyData"], _dialtypechart);
  main.variable(observer("dialtypechart")).define("dialtypechart", ["Generators", "viewof dialtypechart"], (G, _) => G.input(_));
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
  main.variable(observer()).define(["Plot","dataFilter"], _65);
  main.variable(observer()).define(["Plot","data"], _66);
  main.variable(observer()).define(["Plot","data"], _67);
  main.variable(observer()).define(["Plot","data"], _68);
  main.variable(observer()).define(["Plot","data"], _69);
  main.variable(observer()).define(["Plot","data"], _70);
  main.variable(observer()).define(["Plot","data"], _71);
  main.variable(observer()).define(["Plot","data"], _72);
  main.variable(observer()).define(["Plot","data"], _73);
  main.variable(observer()).define(["Plot","data"], _74);
  main.variable(observer()).define(["Plot","data"], _75);
  main.variable(observer()).define(["Plot","data"], _76);
  main.variable(observer()).define(["Plot","data"], _77);
  main.variable(observer()).define(["Plot","data"], _78);
  main.variable(observer()).define(["Wrangler","data"], _79);
  main.variable(observer("tabledummy")).define("tabledummy", ["aq","data"], _tabledummy);
  main.variable(observer()).define(["Inputs","tabledummy"], _81);
  main.variable(observer()).define(["Plot","data"], _82);
  main.variable(observer()).define(["Plot","data"], _83);
  main.variable(observer()).define(["Plot","data"], _84);
  main.variable(observer()).define(["Plot","data"], _85);
  main.variable(observer()).define(["Plot","data"], _86);
  main.variable(observer()).define(["Plot","data"], _87);
  main.variable(observer()).define(["Plot","data"], _88);
  main.variable(observer()).define(["Plot","data"], _89);
  return main;
}
