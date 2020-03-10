function makeplot() {
   Plotly.d3.csv("/csv/basic-data.csv", function(data){ processData(data) } );
};

function processData(allRows) {
   var data = [],
       dates = [],
       positive = [],
       deaths = [],
       monitored = [];

   for (var i=0; i<allRows.length; i++) {
      row = allRows[i];
      dates.push( row['Date'] );
      positive.push( row['Positive'] );
      deaths.push( row['Deaths'] );
      monitored.push( row['PUM'] );
   }

   var trace1 = {
      x: dates,
      y: positive,
      name: "Tested Positive",
      mode: 'lines+markers',
      marker: {
         color: 'rgb(200,170,20)',
         size: 4
      },
      line: {
         color: 'rgb(200,170,20)',
         width: 3
      },
   }
   var trace2 = {
      x: dates,
      y: deaths,
      name: "Deaths",
      mode: 'lines+markers',
      marker: {
         color: 'rgb(179,0,59)',
         size: 4
      },
      line: {
         color: 'rgb(179,0,59)',
         width: 3
      },
   }
   var trace3 = {
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
   }

   data = [ trace1, trace2, trace3 ];

   makePlotly(data);
}

function makePlotly(data){
   var plotDiv = document.getElementById("plot");

   var layout = {
      font: {
         size: 13
      },
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

   Plotly.newPlot('basic-data', data, layout, {responsive: true});
};
makeplot();
