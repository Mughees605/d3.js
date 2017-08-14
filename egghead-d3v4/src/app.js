var margin = { top: 10, right: 20, bottom: 30, left: 30 };
var width = 400 - margin.right - margin.left;
var height = 565 - margin.top - margin.bottom;

var svg = d3.select('.chart')
  .append('svg')
  .attr('width', width + margin.right + margin.left)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', `translate(${margin.left} , ${margin.top})`)

d3.json('./data/data.json', function (err, data) {
  var yScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.expectancy))
    .range([height, 0])
    .nice()
  var yAxis = d3.axisLeft(yScale);
  svg.call(yAxis)

  let xScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.cost))
    .range([0, width])
    .nice()
  var xAxis = d3.axisBottom(xScale)
    .ticks(5)

  svg.append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis)

  let rScale = d3.scaleSqrt()
    .domain([0, d3.max(data, d => d.population)])
    .range([0, 40])

  svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', d => xScale(d.cost))
    .attr('cy', d => yScale(d.expectancy))
    .attr('r', d => rScale(d => d.population))
    .style('fill', 'steelblue')
})


