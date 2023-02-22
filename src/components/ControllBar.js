import React, {useEffect, useState} from 'react'
import Button from './Button'
import Slider from './Slider'
import { setSort, startSorting} from '../Alogorithms/Sorts';


export default function ControllBar({resetArray, array, sliderValue, setSliderValue}) {

    const[activeButtonId, setActiveButtonId] = useState(null);
    const[isSorting, setIsSorting] = useState(false);

    function changeSliderValue(event) {
        setSliderValue(event.target.value);
        resetArray();  
    }

    function handleClick(event) {
        const id = event.target.id;
        setSort(id);
        setActiveButtonId(id);
    }
    function handleSortClick(event) {
        setIsSorting(true);
        startSorting(array, () => setIsSorting(false));
    }

    return (
        <div className='components-box'>
            <Button onClick={resetArray} text="Generate new Array" disabled={isSorting}/>
            <Slider id='slider' onChange={changeSliderValue} text="Array Size" type="range" min="4" max="250" value={sliderValue} disabled={isSorting}/>
            <Button id="Bubble" onClick={handleClick} text="BubbleSort" className={activeButtonId} disabled={isSorting}/>
            <Button id="Quick" onClick={handleClick} text="QuickSort" className={activeButtonId} disabled={isSorting}/>
            <Button id="Selection" onClick={handleClick} text="SelectionSort" className={activeButtonId} disabled={isSorting}/>
            <Button id="Merge" onClick={handleClick} text="MergeSort" className={activeButtonId} disabled={isSorting}/>
            <Button onClick={handleSortClick} text="Sort!" disabled={isSorting} />
        </div>
    
    )
}
