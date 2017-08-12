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


var bar = d3.select('.chart')
    .append('svg')
    .attr('width', 225)
    .attr('height', 300)
    .selectAll('g')
    .data(scores)
    .enter()
    .append('g')
    .attr('transform', (d, i) => 'translate(0, ' + i * 33 + ')')

    bar.append('rect')
    .style('width', d => d.age)
    .attr('class', "bar")

    bar.append('text')
    .attr('y', 20)
    .text((d)=>{
        return d.name
    })

