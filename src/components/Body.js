import React from "react";


export default function Body({array, BAR_COLOR}) {
    const parentWidth = 500;
    const barWidth = parentWidth / array.length;
    return(
        <div style={{display: 'flex', justifyContent: 'center', height: "94vh"}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
                {array.map((value, index) => (
                    <div
                        className="array-bars"
                        key={index}
                        style={{
                            height: `${value}px`,
                            width: `${barWidth}px`,
                            backgroundColor: BAR_COLOR,
                            marginLeft: '2px',
                            marginRight: '2px',
                            display: "inline-block",
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
