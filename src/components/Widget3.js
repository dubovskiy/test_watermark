import {useEffect} from "react";
import * as d3 from "d3";

const resolution = 100
const lineData = []
for(let i = 0; i < 15; i++) {
    lineData.push({x: i + 1, y: Math.round(Math.random() * resolution)})
}

const Widget3 = () => {
    useEffect(() => {
        const xScale = d3.scaleLinear().domain([0,15]).range([5, 300]);
        const yScale = d3.scaleLinear().domain([0,100]).range([300, 0]);

        const startLine = d3.line()
            .x(xScale(0) + 20)
            .y(yScale(0));

        const line = d3.line()
            .x(dt => xScale(dt.x))
            .y(dt => yScale(dt.y));

        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        d3.select('#widget3')
            .selectAll('path')
            .datum(lineData)
            .attr('d', startLine)
            .attr("stroke", "blue")
            .attr('fill', 'none')

        d3.select('#widget3')
            .selectAll('path')
            .transition()
            .duration(1000)
            .attr('d', line)

        d3.select('#widget3')
            .append("g")
            .attr("transform", "translate(20, " + 310 + ")")
            .call(xAxis)

        d3.select('#widget3')
            .append("g")
            .attr("transform", "translate(25, 10)")
            .call(yAxis)

    }, [])

    return (
        <div>
            <h3>Widget 3</h3>
            <svg id="widget3" width={350} height={350}><path /></svg>
        </div>
    );
}

export default Widget3;
