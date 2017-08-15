var margin = { top: 10, right: 0, bottom: 30, left: 50 };
var width = 1450 - margin.left - margin.right;
var height = 565 - margin.top - margin.bottom;

var svg = d3.select('.chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)

  .append('g')
  .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json', function (err, res) {

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  var formatCurrency = d3.format("$,.2f");

  var parseTime = d3.timeParse('%Y/%m/%d')

  var div = d3.select(".chart").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  minDate = new Date(res.data[0][0]);
  maxDate = new Date(res.data[274][0]);

  var xScale = d3.scaleTime()
    .domain([minDate, maxDate])
    .range([0, width])
  svg
    .append('g')
    .attr('transform', `translate(${margin.right},${height})`)
    .call(d3.axisBottom(xScale).ticks(5).tickPadding(15))

  var yScale = d3.scaleLinear()
    .domain([
      0,
      d3.max(res.data, d => d[1])
    ])
    .range([height, 0])

  svg
    .append('g')
    .attr('transform', `translate(${margin.right}, 0)`)
    .call(d3.axisLeft(yScale).ticks(10))

  svg
    .selectAll('.bar')
    .data(res.data)
    .enter()
    .append('rect')
    .attr("class", "bar")
    .attr('x', d => xScale(new Date(d[0])))
    .attr('y', d => yScale(d[1]))
    .attr('width', d => width)
    .attr('height', d => height - yScale(d[1]))
    .style('fill', 'steelblue')
    .style('stroke', 'grey')
    .on('mouseover', function (d) {
      var rect = d3.select(this)
      rect.attr('class', 'mouse')
      var currentTime = new Date(d[0]);
      var year = currentTime.getFullYear();
      var month = currentTime.getMonth();
      var dollars = d[1];
      div.transition()
        .duration(200)
        .style("opacity", 0.5);
      div.html("<span class='amount'>" + formatCurrency(dollars) + "&nbsp;Billion </span><br><span class='year'>" + year + ' - ' + months[month] + "</span>")
        .style("left", (d3.event.pageX + 5) + "px")
        .style("top", (d3.event.pageY - 50) + "px");
    })
    .on('mouseout', function(){
      var rect = d3.select(this);
      rect.attr('class', "mouseoff");
      div.transition()
      .duration(500)
      .style('opacity', 0)
    })
});





//  var yScale = d3.scaleLinear()
//     .domain(d3.extent(data, d => d.expectancy))
//     .range([height, 0])
//     .nice();
//   var yAxis = d3.axisLeft(yScale);
//   svg.call(yAxis);

//   var xScale = d3.scaleLinear()
//     .domain(d3.extent(data, d => d.cost))
//     .range([0, width])
//     .nice();

//   var xAxis = d3.axisBottom(xScale)
//     .ticks(5);
//   svg
//     .append('g')
//       .attr('transform', `translate(0, ${height})`)
//     .call(xAxis);

//   var rScale = d3.scaleSqrt()
//     .domain([0, d3.max(data, d => d.population)])
//     .range([0, 40]);

//   var circles = svg
//     .selectAll('.ball')
//     .data(data)
//     .enter()
//     .append('g')
//     .attr('class', 'ball')
//     .attr('transform', d => {
//       return `translate(${xScale(d.cost)}, ${yScale(d.expectancy)})`;
//     });

//   circles
//     .append('circle')
//     .attr('cx', 0)
//     .attr('cy', 0)
//     .attr('r', d => rScale(d.population))
//     .style('fill-opacity', 0.5)
//     .style('fill', 'steelblue');

//   circles
//     .append('text')
//     .style('text-anchor', 'middle')
//     .style('fill', 'black')
//     .attr('y', 4)
//     .text(d => d.code);