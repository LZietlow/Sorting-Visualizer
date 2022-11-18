import React from "react";


export default function Button(props) {
    return (
        <div className="tools-button" id={props.id} onClick={props.onClick}>{props.text}</div>
    )


}