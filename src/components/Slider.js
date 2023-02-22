import React from "react";


export default function Slider(props) {
    return (
        <button className="tools-button" id={props.id}>{props.text} <input onClick={props.onClick} type={props.type} min={props.min} max={props.max} onChange={props.onChange} value={props.value} disabled={props.disabled}></input></button>
    )


}