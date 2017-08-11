var dataArray = [20, 40, 60];

var canvas = d3.select("body")
    .append('svg')
    .attr("width", 500)
    .attr("height", 500);

var bars = canvas.selectAll("rect")
           .data(dataArray)
           .enter()
             .append("rect")
             .attr("width",(d)=>d * 10)
             .attr("height",50)
             .attr("y",(d,i)=>{ return i * 100})