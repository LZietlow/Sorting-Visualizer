

let selectedSort = "";

const BAR_COLOR = "#003399";
const FINISHED_COLOR = "green" 

const ANIMATION_SPEED_MS = 6;

export function setSort(sort) {
    selectedSort = sort;
}

export async function startSorting(array, setIsSorting) {
   switch(selectedSort) {
        case "Bubble": await bubbleSort(array);
        break;
        case "Quick": await quickSort(array, 0, array.length-1);
        break;
        case "Selection": await selectionSort(array);
        break;
        case "Merge": await mergeSort(array, getBars());
        break;
        default : throw new Error("Something went wrong");
    }
    setIsSorting();
    
}



function getBars() {
    const bars = document.getElementsByClassName("array-bars");
    return bars;
}



async function bubbleSort(array) {
    let bars = getBars();
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length-i-1; j++) {
            await sleep(ANIMATION_SPEED_MS);
            if(array[j+1] < array[j]) {
                let height = bars[j+1].style.height;

                bars[j+1].style.height = bars[j].style.height;
                bars[j].style.height = height;

                let tmp = array[j+1];
                array[j+1] = array[j];
                array[j] = tmp;

            } else {
                bars[j+1].style.backgroundColor = BAR_COLOR;
                bars[j].style.backgroundColor = BAR_COLOR;
            }  
        }
        bars[array.length-i-1].style.backgroundColor = FINISHED_COLOR;
    }
}


async function quickSort(array, lo, hi) {
    let bars = getBars();
    if(lo < hi) {
        let p = await partition(array, lo, hi, bars);
        await quickSort(array, lo, p);
        await quickSort(array, p+1, hi);

        for (let i = lo; i <= hi; i++) {
            bars[i].style.backgroundColor = FINISHED_COLOR;
          }
    }
}

async function partition(array, lo, hi, bars) {
    let pivotPos = Math.floor(((hi+lo)/2));
    let pivot = array[pivotPos];
    let i = lo-1;
    let j = hi+1;
    for(;;) {
        do{
            i = i+1;
            if(i>hi) {
                break;
            }
            await sleep(ANIMATION_SPEED_MS)
        }while(array[i] < pivot);
        do{
            j = j-1;
            if(j<0){
                break;
            }
            await sleep(ANIMATION_SPEED_MS)
        }while (array[j] > pivot);
        if(i >= j) {
           
            return j;
        }
        await swap(array, i, j, bars);
        await sleep(ANIMATION_SPEED_MS);
    }
}

async function selectionSort(array) {
    let bars = getBars();
    for (let i = 0; i < array.length-1; i++) {

        let min = i;
        for (let j = i+1; j < array.length; j++) {
            if(array[j] < array[min]){
                min = j;
                await sleep(ANIMATION_SPEED_MS);
            }
        }
        if(min !== i){
            await swap(array, i, min, bars);
            await sleep(ANIMATION_SPEED_MS);
        }
        bars[i].style.backgroundColor = FINISHED_COLOR;
    }
    bars[array.length-1].style.backgroundColor = FINISHED_COLOR;
}

async function swap(array, i, min, bars) {
    let tmp = array[i];
    array[i] = array[min];
    array[min] = tmp;

    let height = bars[i].style.height;
    bars[i].style.height = bars[min].style.height;
    bars[min].style.height = height;

}

async function mergeSort(array) {
    let bars = getBars();
    if (array.length > 1) {
        const middle = Math.floor(array.length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle);
        await mergeSort(left);
        await mergeSort(right);

        await merge(array, left, right, bars);

        for (let k = 0; k < left.length + right.length; k++) {
        bars[k].style.backgroundColor = FINISHED_COLOR;
        }
    }
    
}


async function merge(array, left, right, bars) {
    
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            array[k] = left[i];
            i++;
        } else {
            array[k] = right[j];
            j++;
        }
        bars[k].style.height = array[k] + "px";
        bars[k].style.backgroundColor = BAR_COLOR;
        if (k + array.length < bars.length) {
            bars[k + array.length].style.height = array[k] + "px";
            bars[k + array.length].style.backgroundColor = BAR_COLOR;
        }
        await sleep(ANIMATION_SPEED_MS);
        k++;
    }

    while (i < left.length) {
        array[k] = left[i];
        bars[k].style.height = array[k] + "px";
        bars[k].style.backgroundColor = BAR_COLOR;
        await sleep(ANIMATION_SPEED_MS);
        i++;
        k++;
    }

    while (j < right.length) {
        array[k] = right[j];
        bars[k].style.height = array[k] + "px";
        bars[k].style.backgroundColor = BAR_COLOR;
        await sleep(ANIMATION_SPEED_MS);
        j++;
        k++;
    }
}

function sleep(ms) {
    return new Promise((resolve => setTimeout(resolve, ms)));
}
