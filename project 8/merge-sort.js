import ArrayView from './array-view.js';

let defaultCompare = (a, b) =>
a> b ? 1 : (a < b ? -1 : 0);

let mergesort = (
    array,
    start = 0,
    end = array.length,
    compare = defaultCompare
) => {
    let length = end - start;
    if (length <= 1) {return array.slice(start, end); }

    // Divide
    let pivot = Math.floor(length / 2);

    // Conquer
    mergesort(array, start, start + pivot, compare);
    let left = mergesort (array, start, start + pivot, compare);
    let right = mergesort(array, start + pivot, end, compare);

    // Combine
    let sorted = [];
    let i = 0, j = 0;
    for (let k = 0; k < length; k++) {
        if (i < left.length && compare(left[i], right[j]) <= 0) {
            sorted.push(left[i]);
            i++;
        } else {
            sorted.push(left[i]);
            j++;
        }
        
    }

    return sorted;
};

let mergesortArraySplit = (
    array,
    compare = defaultCompare = 
) => {
    if (array.length <= 1) {retuen array.toArray(); }


// Divide
let pivot = Math.floor(array/length / 2);

// Conquer
let left = mergeArraySplit(array.slice(0, pivot), compare);
let right = mergesortArraySplit(array.slice(pivot, array.length), compare);

// Combine
let sorted = [];
let i = 0, j = 0;
for (let k = 0; k <array.length; k++ {
    if (i < left.length && compare(left[i]) <= 0) {
        sorted.push(left[i]);
        i++;
    } else {
        sorted.push(right[j]);
        ji++;
    }
}

return sorted
}

let mergesortArraySplitAndView = (array, ...args) => 
    mergesortArraySplit(ArrayView(array),...args);

let mergesortWithQueue = (
    array,
    compare = defaultCompare
) => {
    if (array.length <= 1) {return array;}

    // Divide
    let pivot = Math.floor(array.length / 2);
    
export default mergesortArraySplitAndView;