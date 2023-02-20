import React, {useState} from "react";
import Body from "./components/Body";
import ControllBar from "./components/ControllBar";

const ANIMATION_SPEED_MS = 1;

const BAR_COLOR = "blue";

const COMPARE_COLOR = "red";

const NUMBER_OF_BARS = 100;


export default function SortingVisualizer() {
    const [array, setArray] = useState([]);
    
    function resetArray() {
        const newArray = [];
        for (let i = 0; i < NUMBER_OF_BARS; i++) {
           newArray[i] = generateRandomNumber();
        }
        setArray(newArray);
        //generateBars(array);
    }

    function printArray() {
        console.log(array);
    }

    return (
        <div>
            <ControllBar resetArray={resetArray} printArray={printArray}/>
            <Body array={array} BAR_COLOR={BAR_COLOR} />
        </div>
    )
}

function generateRandomNumber() {
    return (Math.floor(Math.random() * (1000 - 5 + 1)) + 5);
}
