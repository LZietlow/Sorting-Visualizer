import React, {useState} from "react";
import Body from "./components/Body";
import ControllBar from "./components/ControllBar";

const ANIMATION_SPEED_MS = 1;

const BAR_COLOR = "#003399";


export default function SortingVisualizer() {
    const [array, setArray] = useState([]);
    const[sliderValue, setSliderValue] = useState(50);

    function resetArray() {
        const newArray = [];
        for (let i = 0; i < sliderValue; i++) {
           newArray[i] = generateRandomNumber();
        }
        setArray(newArray);
        resetBarColor();
    }

    function printArray() {
        console.log(array);
    }

    return (
        <div>
            <ControllBar resetArray={resetArray} array={array} printArray={printArray} sliderValue={sliderValue} setSliderValue={setSliderValue} />
            <Body array={array} BAR_COLOR={BAR_COLOR}  />
        </div>
    )
}

function generateRandomNumber() {
    return (Math.floor(Math.random() * (500 - 10 + 1)) + 10);
}
function resetBarColor() {
    let bars = document.getElementsByClassName("array-bars");
    for(let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = BAR_COLOR;
    }
}
