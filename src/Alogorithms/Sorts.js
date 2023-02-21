
const isSorting = false;
let selectedSort = "";

const COMPARE_TWO_BARS_COLOR = "purple";
const BAR_COLOR = "#003399";
const FINISHED_COLOR = "green" 

const ANIMATION_SPEED_MS = 6;

export function setSort(sort) {
    selectedSort = sort;
}

export function startSorting(array) {
    if(!isSorting) {
        switch(selectedSort) {
            case "Bubble": bubbleSort(array);
            break;
            case "Quick": quickSort(array, 0, array.length-1);
            break;
            case "Selection": selectionSort(array);
            break;
            case "Merge": mergeSort(array, getBars());
            break;
            default : throw new Error("Something went wrong");
        }
    }
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

async function mergeSort(array, bars) {
    if(array.length > 1) {
        let barsL =[];
        let barsR = [];
        let l = [];
        let r = [];
        let mid = Math.floor((array.length-1)/2);
        for (let i = 0; i < mid+1; i++) {
            l.push(array[i]);
            barsL.push(bars[i]);
        }
        for (let i = mid+1; i < array.length; i++) {
            r.push(array[i]);
            barsR.push(array[i]);
        }
        l = await mergeSort(l,barsL);
        r = await mergeSort(r, barsR);


        await merge(l, r, barsL, barsR);
    }
    return array;
}

async function merge(left, right, barsL, barsR) {

    let toReturn = [];
    let returnBars = [];
    let countL = 0;
    let countR = 0;
    let k = 0;

    while (countL < left.length && countR < right.length) {
        await sleep(ANIMATION_SPEED_MS);

        if (left[countL] < right[countR]) {
            array[k++] = left[countL++];
        } else {
            array[k++] = right[countR++];
        }

        bars[k - 1].style.height = array[k - 1] + "px";
        //bars[k - 1].style.backgroundColor = FINISHED_COLOR;
    }

    while (countL < left.length) {
        await sleep(ANIMATION_SPEED_MS);
        array[k++] = left[countL++];
        bars[k - 1].style.height = array[k - 1] + "px";
        //bars[k - 1].style.backgroundColor = FINISHED_COLOR;
    }

    while (countR < right.length) {
        array[k++] = right[countR++];
        bars[k - 1].style.height = array[k - 1] + "px";
        //bars[k - 1].style.backgroundColor = FINISHED_COLOR;
    }

}

function sleep(ms) {
    return new Promise((resolve => setTimeout(resolve, ms)));
}
