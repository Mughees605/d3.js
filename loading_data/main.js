var data = [10, 20, 30, 40];
var dataObj = [{ age: 55 }, { age: 23 }, { age: 99 }, { age: 23 }]


var minValue = d3.min(dataObj,(d)=>{
    return d.age
})

var extent = d3.extent(dataObj, (d) => {
    return d.age
});

var set = d3.set(dataObj, (d)=>{
    return d.age
})

var linearScale = d3.scaleLinear()
.domain(extent)
.range([0,600])
