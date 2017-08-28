var margin = { top: 10, right: 20, bottom: 30, left: 30 };
var width = 800 - margin.left - margin.right;
var height = 565 - margin.top - margin.bottom;

var svg = d3.select('.chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)

  .append('g')
  .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json', function (err, data) {
    
  var parseTime = d3.timeParse('')

  data.forEach((data)=>{
    console.log(data.Time)
  })

  var yScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.Place))
    .range([height, 0])
    .nice()

  var yAxis = d3.axisLeft(yScale);
  svg.call(yAxis);
  
  var xScale = d3.scaleTime()
      .domain([0,Math.ceil(d3.max(data,d=>d.Seconds) * 1000)])
      .range([0,width])
      .nice()
  
  var xAxis = d3.axisBottom(xScale).ticks(d3.timeMinute,10).tickFormat(d3.timeFormat('%M:%S'))

  svg.append('g')
     .attr('transform',`translate(0,${height})`)
     .call(xAxis)
  
  // var yScale = d3.scaleLinear()
  //   .domain(d3.extent(data, d => d.))
  //   .range([height, 0])
  //   .nice();
  // var yAxis = d3.axisLeft(yScale);
  // svg.call(yAxis);

  // var xScale = d3.scaleLinear()
  //   .domain(d3.extent(data, d => d.cost))
  //   .range([0, width])
  //   .nice();

  // var xAxis = d3.axisBottom(xScale)
  //   .ticks(5);
  // svg
  //   .append('g')
  //     .attr('transform', `translate(0, ${height})`)
  //   .call(xAxis);

  // var rScale = d3.scaleSqrt()
  //   .domain([0, d3.max(data, d => d.population)])
  //   .range([0, 40]);

  // var circles = svg
  //   .selectAll('.ball')
  //   .data(data)
  //   .enter()
  //   .append('g')
  //   .attr('class', 'ball')
  //   .attr('transform', d => {
  //     return `translate(${xScale(d.cost)}, ${yScale(d.expectancy)})`;
  //   });

  // circles
  //   .append('circle')
  //   .attr('cx', 0)
  //   .attr('cy', 0)
  //   .attr('r', d => rScale(d.population))
  //   .style('fill-opacity', 0.5)
  //   .style('fill', 'steelblue');

  // circles
  //   .append('text')
  //   .style('text-anchor', 'middle')
  //   .style('fill', 'black')
  //   .attr('y', 4)
  //   .text(d => d.code);

});


