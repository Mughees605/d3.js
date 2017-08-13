var margin = { top: 0, right: 0, bottom: 25, left: 25 };
var width = 425 - margin.right - margin.left;
var height = 625 - margin.top - margin.bottom;

var svg = d3.select('.chart')
    .append('svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', width + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left} , ${margin.top})`)
svg.append('rect')
    .attr('width', width / 2)
    .attr('height', height)
    .style('fill', "lightblue")
    .style('stroke', "green ")

svg.append('rect')
    .attr('x', width/2)
    .attr('width', width / 2)
    .attr('height', height)
    .style('fill', "lightblue")
    .style('stroke', "green ")