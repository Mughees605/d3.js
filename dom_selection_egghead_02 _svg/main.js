var scores = [
    {
        age: 83,
        name: "Welch"
    },
    {
        age: 68,
        name: "Villarreal"
    },
    {
        age: 93,
        name: "Sheryl"
    },
    {
        age: 57,
        name: "Marshall"
    },
     {
        age: 68,
        name: "Villarreal"
    },
]


var update = d3.select('.chart')
.append('svg')
 .attr('width', 225)
 .attr('height', 300)
 .selectAll('rect')
 .data(scores)
 .enter()
   .append('rect')
   .attr('y',(d,i)=> i * 33)
   .style('width', d => d.age)
   .text((d)=>{
       return d.name
   })
   .attr('class',"bar")
   
