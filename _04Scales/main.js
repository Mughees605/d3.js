var dataArray = [20, 40, 60];
var width = 500;
var height = 500;

var widthScale = d3.scaleLinear()
    .domain([0, 60])
    .range([0, width])
    
var canvas = d3.select("body")
    .append('svg')
    .attr("width", width)
    .attr("height", width);

var bars = canvas.selectAll("rect")
    .data(dataArray)
    .enter()
    .append("rect")
    .attr("width", (d) => {return widthScale(d)})
    .attr("height", 50)
    .attr("y", (d, i) => { return i * 100 })