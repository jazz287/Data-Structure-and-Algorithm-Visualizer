import { useState, useEffect } from "react";
import { getRandomArray } from "../utils/util";

export default function Footer(props) {
    let [arraySize, setArraySize] = useState(15);
    let [currentSpeed, setSpeed] = useState(window.vizSpeed || 0);
    useEffect(() => {
        props.setArray(getRandomArray(arraySize));
    }, [arraySize]);
    return <div style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        height: "60px",
        width: "100%",
        backgroundColor: "#213547",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
    }}>

        <div>
            &emsp;
            {"Array Size"}
            &emsp;
            <input type="range" min="5" max="25" className="slider" step="1" value={arraySize} onChange={(v) => {
                setArraySize(v.target.value);
                return false;
            }}></input>
            &emsp;
            ({arraySize})
        </div>
        <div>
            {"Speed"}
            &emsp;
            <input type="range" min="0" max="50" className="slider" step="1" value={currentSpeed} onChange={(v) => {
                setSpeed(v.target.value);
                window.vizSpeed = Number(v.target.value);
                document.querySelectorAll("div[data-value]").forEach(e => {
                    e.style.transition = `all ${window.vizSpeed}ms ease`;
                });
                return false;
            }}></input>
            &emsp;
            ({currentSpeed})
            &emsp;        </div>
    </div>;
}