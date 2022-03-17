import {useEffect} from "react";
import * as d3 from "d3";

const Widget2 = () => {
    const getMax = () => Math.max.apply(null, data.map(dataItem => dataItem.value));

    useEffect(() => {
        d3.select('#widget2')
            .selectAll('div')
            .data(data)
            .enter()
            .append('div')
            .classed('bar', true)
            .style('height', 0)
            .style('width', '80px')
            .style('margin-right', '10px');

        d3.select('#widget2')
            .selectAll('.bar')
            .transition()
            .duration(1000)
            .style('height', bar => `${bar.value + 20}px`)
            .delay(300)
            .on("end", (dt, index, items) => {
                items[index].innerHTML = `${dt.title} (${dt.value})`;
            });

    }, [])

    return (
        <div>
            <h3>Widget 2</h3>
            <div id="widget2" style={{height: getMax()}}></div>
        </div>
    );
}

const resolution = 100

const data = [
    {title: "Item1", value: Math.round(Math.random() * resolution)},
    {title: "Item2", value: Math.round(Math.random() * resolution)},
    {title: "Item3", value: Math.round(Math.random() * resolution)},
    {title: "Item4", value: Math.round(Math.random() * resolution)},
    {title: "Item5", value: Math.round(Math.random() * resolution)},
];

export default Widget2;
