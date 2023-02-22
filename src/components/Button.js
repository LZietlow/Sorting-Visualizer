import React from "react";


export default function Button(props) {
    return (
        <div className={`tools-button ${props.className ===`${props.id}` ? 'active' : ''}`} id={props.id} onClick={props.onClick}>{props.text}</div>
    )


}