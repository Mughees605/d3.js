var dataArray = [20, 40, 60, 70, 80];
var width = 700;
var height = 600;

var widthScale = d3.scaleLinear()
    .domain([0, 80])
    .range([0, width])

var color = d3.scaleLinear()
    .domain([0, 80])
    .range(["red", "blue"])

var axis = d3.axisBottom(widthScale).ticks(5)

var canvas = d3.select("body")
    .append('svg')
    .attr("width", width)
    .attr("height", width)
    .append("g")

var bars = canvas.selectAll("rect")
    .data(dataArray)
    .enter()
    .append("rect")
    .attr("width", (d) => { return widthScale(d) })
    .attr("height", 50)
    .attr("fill", (d) => color(d))
    .attr("y", (d, i) => { return i * 100 })

canvas.append("g")
    .attr("transform", "translate(0,500)")
    .call(axis)