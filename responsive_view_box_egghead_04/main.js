var margin = { top: 10, right: 10, bottom: 40, left: 40 };
var width = 400 - margin.right - margin.left;
var height = 600 - margin.top - margin.bottom;

var svg = d3.select('.chart')
    .append('svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left} , ${margin.top})`)


svg.append('rect')
    .attr('width', width)
    .attr('height', height)
    .style('fill', "lightblue")
    .style('stroke', "green ")
var yScale = d3.scaleLinear()
    .domain([0, 10])
    .range([height, 0])

var yAxis = d3.axisLeft(yScale);
svg.call(yAxis)

let xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, width])

var xAxis = d3.axisBottom(xScale).ticks(5)
svg.append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis)

function responsivefy(svg) {
    // get container + svg aspect ratio
    var container = d3.select(svg.node().parentNode),
        width = parseInt(svg.style("width")),
        height = parseInt(svg.style("height")),
        aspect = width / height;

    // add viewBox and preserveAspectRatio properties,
    // and call resize so that svg resizes on inital page load
    svg.attr("viewBox", "0 0 " + width + " " + height)
        .attr("preserveAspectRatio", "xMinYMid")
        .call(resize);

    // to register multiple listeners for same event type,
    // you need to add namespace, i.e., 'click.foo'
    // necessary if you call invoke this function for multiple svgs
    // api docs: https://github.com/mbostock/d3/wiki/Selections#on
    d3.select(window).on("resize." + container.attr("id"), resize);

    // get width of container and resize svg to fit it
    function resize() {
        var targetWidth = parseInt(container.style("width"));
        svg.attr("width", targetWidth);
        svg.attr("height", Math.round(targetWidth / aspect));
    }
}