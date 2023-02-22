import React from "react";


export default function Button(props) {
    return (
        <button className={`tools-button ${props.className ===`${props.id}` ? 'active' : ''}`} id={props.id} onClick={props.onClick} disabled={props.disabled} >{props.text}</button>
    )


}