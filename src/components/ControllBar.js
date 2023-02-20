import React, {useEffect, useState} from 'react'
import Button from './Button'
import Slider from './Slider'
import axios from 'axios';
import SortingVisualizer from '../SortingVisualizer';
import { setSort, startSorting} from '../Alogorithms/Sorts';


export default function ControllBar({resetArray, array, printArray, sliderValue, setSliderValue}) {

    function changeSliderValue(event) {
        setSliderValue(event.target.value);  
    }

    function handleClick(event) {
        setSort(event.target.id);
        console.log(event.target.id);
    }

    return (
        <div className='components-box'>
            <Button id="test123" onClick={resetArray} text="Generate new Array"/>
            <Slider id="test123" onChange={changeSliderValue} text="Array Size" type="range" min="4" max="100" value={sliderValue}/>
            <Button id="Bubble" onClick={handleClick} text="BubbleSort"/>
            <Button id="Quick" onClick={handleClick} text="QuickSort"/>
            <Button id="Selection" onClick={handleClick} text="SelectionSort"/>
            <Button id="Merge" onClick={handleClick} text="MergeSort"/>
            <Button id="test123" onClick={() => startSorting(array)} text="Sort!"/>
        </div>
    
    )
}
