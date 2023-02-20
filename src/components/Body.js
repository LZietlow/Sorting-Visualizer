import React from "react";


export default function Body({array, BAR_COLOR}) {
    return(
        <div style={{display: 'flex', justifyContent: 'center', height: "94vh", backgroundColor: "red", alignItems: "flex-end", flexWrap: "nowrap"}}>
            <div>
                {array.map((value, index) => (
                    <div
                        className="array-bars"
                        key={index}
                        style={{
                            height: `${value}px`,
                            width: '10px',
                            backgroundColor: BAR_COLOR,
                            margin: '2px',
                            display: "inline-block",
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
