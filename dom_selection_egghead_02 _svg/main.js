var scores = [
    {
        age: 83,
        name: "Welch"
    },
    {
        age: 188,
        name: "Villarreal"
    },
    {
        age: 93,
        name: "Sheryl"
    },
    {
        age: 97,
        name: "Marshall"
    },
    {
        age: 88,
        name: "Villarreal"
    },
]

var g = d3.select('.chart') // process of creating g
    .append('svg')
    .attr('width', 400)
    .attr('height', 300)
    .selectAll('g')
    .data(scores)
    .enter()
    .append('g')
    .attr('transform', (d, i) => 'translate(0, ' + i * 33 + ')') // g created 

function scaleBar(selection, scale) {
    selection.style('transform', 'scaleX(' + scale + ')')
}

function scaleOpacity(selection, opacity) {
    selection.style('fill-opacity', opacity)
}

g.append('rect')
    .style('width', d => d.age)
    .attr('class', "bar")
    .on('mouseover', function (d, i, elements) {
        d3.select(this).call(scaleBar, 2)
        d3.selectAll(elements)
            .filter(':not(:hover)')
            .call(scaleOpacity, 0.5)
    })
    .on('mouseout', function (d, i, elements) {
        d3.select(this).call(scaleBar, 1)
        d3.selectAll(elements)
            .call(scaleOpacity, 1)
    })

g.append('text')
    .attr('y', 20)
    .text((d) => {
        return d.name
    })

