var margin = { top: 10, right: 20, bottom: 30, left: 30 };
var width = 400 - margin.left - margin.right;
var height = 565 - margin.top - margin.bottom;

var svg = d3.select('.chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)

  .append('g')
  .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

d3.json('./data/data.json', function (err, data) {
  console.log(data);
  var parseTime = d3.timeParse('%Y/%m/%d');
  data.forEach((company) => {
    company.values.forEach((d) => {
      d.date = parseTime(d.date)
      
      d.close = +d.close
    });
  });

  var xScale = d3.scaleTime()
    .domain([
      d3.min(data, co => d3.min(co.values, d => d.date)),
      d3.max(data, co => d3.max(co.values, d => d.date))
    ])
    .range([0,width])

  var xAxis = d3.axisBottom(xScale).ticks(5);
  svg.append('g')
  .attr('transform',`translate(0,${height})`)
  .call(xAxis)
  
  var yScale = d3.scaleLinear()
  .domain([
    d3.min(data, co => d3.min(co.values, d => d.close)),
    d3.max(data, co => d3.max(co.values, d => d.close))
  ])
  .range([height, 0])

  var yAxis = d3.axisLeft(yScale)
  svg
  .append('g')
  .call(yAxis)

  var line = d3.line()
   .x(d => xScale(d.data))
   .y(d => yScale(d.close))

   svg
   .selectAll('.line')
   .data(data)
   .enter()
   .append('path')
   .attr('class', 'line')
   .attr('d' , d => line(d.values))
   .style('stroke' , (d,i) => ['#FF9900', '#3369E8'][i])
   .style('stroke-width', 2)
});
