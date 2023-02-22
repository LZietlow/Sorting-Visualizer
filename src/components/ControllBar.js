import React, {useEffect, useState} from 'react'
import Button from './Button'
import Slider from './Slider'
import axios from 'axios';
import SortingVisualizer from '../SortingVisualizer';
import { setSort, startSorting} from '../Alogorithms/Sorts';


export default function ControllBar({resetArray, array, printArray, sliderValue, setSliderValue}) {

    const[activeButtonId, setActiveButtonId] = useState(null);

    function changeSliderValue(event) {
        setSliderValue(event.target.value);
        resetArray();  
    }

    function handleClick(event) {
        const id = event.target.id;
        setSort(id);
        setActiveButtonId(id);
    }

    return (
        <div className='components-box'>
            <Button onClick={resetArray} text="Generate new Array" />
            <Slider id='slider' onChange={changeSliderValue} text="Array Size" type="range" min="4" max="250" value={sliderValue}/>
            <Button id="Bubble" onClick={handleClick} text="BubbleSort" className={activeButtonId}/>
            <Button id="Quick" onClick={handleClick} text="QuickSort" className={activeButtonId}/>
            <Button id="Selection" onClick={handleClick} text="SelectionSort" className={activeButtonId}/>
            <Button id="Merge" onClick={handleClick} text="MergeSort" className={activeButtonId}/>
            <Button id="test123" onClick={() => startSorting(array)} text="Sort!" className='tool-button'/>
        </div>
    
    )
}
