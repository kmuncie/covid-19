function makeBasicDataCharts() {
   Plotly.d3.csv("/csv/basic-data.csv", function(data){ processData(data) } );
};

// Positive and Deaths Main Chart
function processData(allRows) {
   var data = [],
       dates = [],
       positive = [],
       deaths = []
       monitored = [];

   for (var i=0; i<allRows.length; i++) {
      row = allRows[i];
      dates.push( row['Date'] );
      positive.push( row['Positive'] );
      deaths.push( row['Deaths'] );
      monitored.push( row['PUM'] );
   }

   var positiveData = {
      x: dates,
      y: positive,
      name: "Tested Positive",
      mode: 'lines+markers',
      marker: {
         color: 'rgb(180,0,60)',
         size: 4
      },
      line: {
         color: 'rgb(180,0,60)',
         width: 3
      },
   };

   var deathsData = {
      x: dates,
      y: deaths,
      name: "Deaths",
      mode: 'lines+markers',
      marker: {
         color: 'rgb(0,0,0)',
         size: 4
      },
      line: {
         color: 'rgb(0,0,0)',
         width: 3
      },
   };

   var pumData = {
      x: dates,
      y: monitored,
      name: "Persons Under Monitoring",
      mode: 'lines+markers',
      marker: {
         color: 'rgb(20,80,160)',
         size: 4
      },
      line: {
         color: 'rgb(20,80,160)',
         width: 3
      },
   };

   positiveDeathsCombo = [ positiveData, deathsData ];
   pumCombo = [ pumData ];

   positiveDeathsPlotlyConfig(positiveDeathsCombo);
   pumPlotlyConfig(pumCombo);
}

function positiveDeathsPlotlyConfig(data){
   var plotDiv = document.getElementById("plot-1");

   var layout = {
      font: {
         size: 13
      },
      showlegend: true,
      legend: {
         "orientation": "h",
         x: 0,
         xanchor: 'left',
         y: 1
      },
      autosize: true,
      margin: {
         l: 50,
         r: 50,
         b: 50,
         t: 30,
         pad: 4
      },
   };

   Plotly.newPlot('positive-deaths', data, layout, {responsive: true});
};

function pumPlotlyConfig(data){
   var plotDiv = document.getElementById("plot-2");

   var layout = {
      font: {
         size: 13
      },
      showlegend: true,
      legend: {
         "orientation": "h",
         x: 0,
         xanchor: 'left',
         y: 1
      },
      autosize: true,
      margin: {
         l: 50,
         r: 50,
         b: 50,
         t: 30,
         pad: 4
      },
   };

   Plotly.newPlot('pum', data, layout, {responsive: true});
};

makeBasicDataCharts();
