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
    }
]


var update = d3.select('.chart')
 .selectAll('div')
 .data(scores)
 .enter()
   .append('div')
   .text((d)=>{
       return d.name
   })
   .attr('class',"bar")
   .style('width', d => d.age + "px")
   
