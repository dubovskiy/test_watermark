import {useEffect} from "react";
import * as d3 from "d3";

const resolution = 100
const Widget1 = () => {
    useEffect(() => {
        d3.select('#widget1')
            .selectAll('p')
            .data(data)
            .enter()
            .append('p')
            .text(dt => dt.title + ": " + dt.value);
    }, [])

    return (
        <div>
            <h3>Widget 1</h3>
            <div id="widget1"></div>
        </div>
    );
}

const data = [
    {title: "First", value: Math.round(Math.random() * resolution)},
    {title: "Second", value: Math.round(Math.random() * resolution)},
    {title: "Third", value: Math.round(Math.random() * resolution)},
    {title: "Fourth", value: Math.round(Math.random() * resolution)},
    {title: "Fifth", value: Math.round(Math.random() * resolution)},
];

export default Widget1;
