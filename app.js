document.addEventListener("DOMContentLoaded", function(){

  var data = [{taste:"bitter","intensity":50},{taste:"sweet","intensity":50},{taste:"sore","intensity":50}];
  console.log(data);

  //Dodaję rozmiar do svg
  var width = 300,
  height = 300,
  radius = Math.min(width, height) / 2;


  //Dodaję kolory
  var color = d3.scaleOrdinal()
 	.range(["#2C93E8","#838690","#F56C4E"]);

  var pie = d3.pie()
	.value(function(d) { return d.intensity; })(data);


  var arc = d3.arc()
	.outerRadius(radius - 10)
	.innerRadius(0);

  var labelArc = d3.arc()
	.outerRadius(radius - 40)
	.innerRadius(radius - 40);

  var svg = d3.select("#pie")
	.append("svg")
	.attr("width", width)
	.attr("height", height)
		.append("g")
		.attr("transform", "translate(" + width/2 + "," + height/2 +")");


  var g = svg.selectAll("arc")
	.data(pie)
	.enter().append("g")
	.attr("class", "arc");

  g.append("path")
	.attr("d", arc)
	.style("fill", function(d) { return color(d.data.taste);});

  g.append("text")
	.attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
	.text(function(d) { return d.data.taste;})
	.style("fill", "#fff");

  function change() {
	var pie = d3.pie()
		.value(function(d) { return d.intensity; })(data);
	path = d3.select("#pie").selectAll("path").data(pie); // Compute the new angles
	path.attr("d", arc); // redrawing the path
	d3.selectAll("text").data(pie).attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; }); // recomputing the centroid and translating the text accordingly.
}



d3.select("#sweet")
	.on("change", function() {
    var sweet = document.querySelector("#sweet").value;
    var sore = document.querySelector("#sore").value;
    var bitter = document.querySelector("#bitter").value;
    console.log("oko");
		data = [{taste:"bitter","intensity": bitter},{taste:"sweet","intensity": sweet},{taste:"sore","intensity": sore}];
		change();
	})
d3.select("#sore")
	.on("change", function() {
    var sweet = document.querySelector("#sweet").value;
    var sore = document.querySelector("#sore").value;
    var bitter = document.querySelector("#bitter").value;
    console.log("oko");
    data = [{taste:"bitter","intensity": bitter},{taste:"sweet","intensity": sweet},{taste:"sore","intensity": sore}];
		change();
	})
d3.select("#bitter")
	.on("change", function() {
    var sweet = document.querySelector("#sweet").value;
    var sore = document.querySelector("#sore").value;
    var bitter = document.querySelector("#bitter").value;
    console.log("oko");
    data = [{taste:"bitter","intensity": bitter},{taste:"sweet","intensity": sweet},{taste:"sore","intensity": sore}];
		change();
	});







});
