var canvas = d3.select("body")
    .append('svg')
    .attr("width", 500)
    .attr("height", 500);

var circle = canvas.append("circle")
    .attr("cx", 250)
    .attr("cy", 250)
    .attr("r", 50)
    .attr("fill", "red");

var rectangle = canvas.append('rect')
    .attr('width', 250)
    .attr('height', 50);


var line = canvas.append('line')
    .attr('x1',0)// x position of the first end of the line
    .attr('y1',100)// y position of the first end of the line
    .attr('x2',400) // x position of the second end of the line
    .attr('y2',400)// y position of the second end of the line
    .attr('stroke',"green")
    .attr('stroke-width',10)