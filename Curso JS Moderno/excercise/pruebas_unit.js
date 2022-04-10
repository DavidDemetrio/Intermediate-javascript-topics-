var x = [1000, 1001, 2000, 2001];
var x2 = x.map(function(p) { return p / 1000; });
var y = [1,2,3,20];

Plotly.plot('graph', [{
  x: x2,
  y: y
}], {
  xaxis: {
    ticksuffix: " km"
  }
}, {
  modeBarButtons: [[{
    name: "scale to km",
    click: function(graph) {
      graph.data[0].x = x2;
      graph.layout.xaxis.ticksuffix = " km";
      Plotly.redraw(graph);
    }
  }, {
    name: "scale to m",
    click: function(graph) {
      graph.data[0].x = x;
      graph.layout.xaxis.ticksuffix = " m";
      Plotly.redraw(graph);
    }
  }]]
  
})