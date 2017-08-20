var data = [{
  "Client": "ABC",
  "sale": "202",
  "year": "2000"
}, {
  "Client": "ABC",
  "sale": "215",
  "year": "2002"
}, {
  "Client": "ABC",
  "sale": "179",
  "year": "2004"
}, {
  "Client": "ABC",
  "sale": "199",
  "year": "2006"
}, {
  "Client": "ABC",
  "sale": "134",
  "year": "2008"
}, {
  "Client": "ABC",
  "sale": "176",
  "year": "2010"
}, {
  "Client": "XYZ",
  "sale": "100",
  "year": "2000"
}, {
  "Client": "XYZ",
  "sale": "215",
  "year": "2002"
}, {
  "Client": "XYZ",
  "sale": "179",
  "year": "2004"
}, {
  "Client": "XYZ",
  "sale": "199",
  "year": "2006"
}, {
  "Client": "XYZ",
  "sale": "134",
  "year": "2008"
}, {
  "Client": "XYZ",
  "sale": "176",
  "year": "2013"  
},
{
  "Client": "CCC",
  "sale": "23",
  "year": "2003"
}, {
  "Client": "CCC",
  "sale": "55",
  "year": "2004"
}, {
  "Client": "CCC",
  "sale": "179",
  "year": "2005"
}, {
  "Client": "CCC",
  "sale": "199",
  "year": "2006"
}, {
  "Client": "CCC",
  "sale": "134",
  "year": "2008"
}, {
  "Client": "CCC",
  "sale": "176",
  "year": "2013"
 }];

var margin = { top: 10, right: 20, bottom: 30, left: 30 };
var width = 400 - margin.left - margin.right;
var height = 565 - margin.top - margin.bottom;

var svg = d3.select('.chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

var dataGroup = d3.nest()
  .key(function (d) {
    return d.Client;
  })
  .entries(data)

var parseTime = d3.timeParse("%Y");

dataGroup.forEach((company) => {
  company.values.forEach((d) => {
    d.year = parseTime(d.year)
    d.sale = +d.sale
  })
})

var xScale = d3.scaleTime()
  .domain([
    d3.min(dataGroup, d => d3.min(d.values, d => d.year)),
    d3.max(dataGroup, d => d3.max(d.values, d => d.year))
  ])
  .range([0, width])

var xAxis = d3.axisBottom(xScale)
svg.append('g')
  .attr('transform', `translate(0,${height})`)
  .call(xAxis)

var yScale = d3.scaleLinear()
  .domain([
    d3.min(dataGroup, d => d3.min(d.values, d => d.sale)),
    d3.max(dataGroup, d => d3.max(d.values, d => d.sale))
  ])
  .range([height, 0])

var yAxis = d3.axisLeft(yScale);
svg.append('g')
  .call(yAxis)

var line = d3.line()
  .x(d => xScale(d.year))
  .y(d => yScale(d.sale))

  svg
  .selectAll('.line')
  .data(dataGroup)
  .enter()
  .append('path')
  .attr('class',"line")
  .attr('d', d => line(d.values))
  .style('stroke', (d, i) => ['#FF9900', '#3369E8',"#008000"][i])
  .style('stroke-width', 2)  
  .style('fill','none')
  


//  var parseTime = d3.timeParse('%Y/%m/%d');

//   data.forEach(company => {
//     company.values.forEach(d => {
//       d.date = parseTime(d.date);
//       d.close = +d.close;
//     });
//   });

//   var xScale = d3.scaleTime()
//     .domain([
//       d3.min(data, co => d3.min(co.values, d => d.date)),
//       d3.max(data, co => d3.max(co.values, d => d.date))
//     ])
//     .range([0, width]);
//   svg
//     .append('g')
//       .attr('transform', `translate(0, ${height})`)
//     .call(d3.axisBottom(xScale).ticks(5));

//   var yScale = d3.scaleLinear()
//     .domain([
//       d3.min(data, co => d3.min(co.values, d => d.close)),
//       d3.max(data, co => d3.max(co.values, d => d.close))
//     ])
//     .range([height, 0]);
//   svg
//     .append('g')
//     .call(d3.axisLeft(yScale));

//   var line = d3.line()
//     .x(d => xScale(d.date))
//     .y(d => yScale(d.close))
//     .curve(d3.curveCatmullRom.alpha(0.5));

//   svg
//     .selectAll('.line')
//     .data(data)
//     .enter()
//     .append('path')
//     .attr('class', 'line')
//     .attr('d', d => line(d.values))
//     .style('stroke', (d, i) => ['#FF9900', '#3369E8'][i])
//     .style('stroke-width', 2)
//     .style('fill', 'none');