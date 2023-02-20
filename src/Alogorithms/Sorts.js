
const isSorting = false;
let selectedSort = "";

const COMPARE_TWO_BARS_COLOR = "purple";
const BAR_COLOR = "blue";

export function setSort(sort) {
    selectedSort = sort;
}

export function startSorting(array) {
    if(!isSorting) {
        switch(selectedSort) {
            case "Bubble": bubbleSort(array);
            break;
            case "Quick": quickSort(array);
            break;
            case "Selection": selectedSort(array);
            break;
            case "Merge": mergeSort(array);
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
            bars[j+1].style.backgroundColor = COMPARE_TWO_BARS_COLOR;
            bars[j].style.backgroundColor = COMPARE_TWO_BARS_COLOR;
            await sleep(2);
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
        bars[array.length-i-1].style.backgroundColor = "green";
    }
}


async function quickSort(array, lo, hi) {
     //let bars = getBars();
    if(lo < hi) {
        let p = await partition(array, lo, hi);
        await quickSort(array, lo, p);
        await quickSort(array, p+1, hi);
    }
}

async function partition(array, lo, hi) {
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
            //await sleep(10)
        }while(array[i] < pivot);
        do{
            j = j-1;
            if(j<0){
                break;
            }
            //await sleep(10)
        }while (array[j] > pivot);
        if(i >= j) {
            return j;
        }
        await swap(array, i, j);
        //await sleep(10);
        //bars[i].style.backgroundColor = "blue";
        //bars[j].style.backgroundColor = "blue";
    }
}

async function selectionSort(array) {
    //let bars = getBars();
    for (let i = 0; i < array.length-1; i++) {

        let min = i;

        for (let j = i+1; j < array.length; j++) {
            if(array[j] < array[min]){
                min = j;
            }
        }
        if(min !== i){
            await swap(array, i, min);
            //await sleep(30);
            //bars[min].style.backgroundColor = "blue";
        }
        //bars[i].style.backgroundColor = "green";
    }
    //bars[array.length-1].style.backgroundColor = "green";
}

async function swap(array, i, min, bars) {
    let tmp = array[i];
    array[i] = array[min];
    array[min] = tmp;

    //bars[i].style.backgroundColor = "#42beeb";
    //bars[min].style.backgroundColor = "#42beeb";

    //let height = bars[i].style.height;
    //bars[i].style.height = bars[min].style.height;
    //bars[min].style.height = height;

}

async function mergeSort(array) {
    //let bars = getBars();
    if(array.length > 1) {
        let l = [];
        let r = [];
        let mid = Math.floor((array.length-1)/2);
        for (let i = 0; i < mid+1; i++) {
            l.push(array[i]);
        }
        for (let i = mid+1; i < array.length; i++) {
            r.push(array[i]);
        }
        l = await mergeSort(l);
        r = await mergeSort(r);

        await merge(array, l, r);
    }
    return array;
}

async function merge(array, left, right) {

    let countL = 0;
    let countR = 0;
    let k = 0;

    let length = left.length + right.length;
    for (let i = 0; i < length; i++) {
        //bars[countL].style.backgroundColor = "red";
        //bars[countR].style.backgroundColor = "red";
        //await sleep(10);
        if(left[countL] < right[countR] || right[countR] === undefined) {
            array[k++] = left[countL++];
            //let height = bars[k-1].style.height;
            //bars[k-1].style.height = bars[countL].style.height;
            //bars[countL].style.height = height;
        } else {
            array[k++] = right[countR++];
            //let test = bars[k-1].style.height;
            //bars[k-1].style.height = bars[countL].style.height;
            //bars[countR].style.height = test;
        }
    }

}

function sleep(ms) {
    return new Promise((resolve => setTimeout(resolve, ms)));
}
