import React from 'react'
import Button from './Button'
import Slider from './Slider'


export default function ControllBar() {

    function method() {
        alert("hello world");
    }

    return (
        <div className='components-box'>
            <Button id="test123" onClick={method} text="Generate new Array"/>
            <Slider id="test123" onClick={method} text="Array Size" type="range" min="4" max="250"/>
            <Button id="test123" onClick={method} text="BubbleSort"/>
            <Button id="test123" onClick={method} text="QuickSort"/>
            <Button id="test123" onClick={method} text="SelectionSort"/>
            <Button id="test123" onClick={method} text="MergeSort"/>
            <Button id="test123" onClick={method} text="Sort!"/>
        </div>
    
    )
}