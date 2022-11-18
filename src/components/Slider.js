import React from "react";


export default function Button(props) {
    return (
        <div className="tools-button" id={props.id}>{props.text} <input onClick={props.onClick} type={props.type} min={props.min} max={props.max}></input></div>
    )


}