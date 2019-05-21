function merge(arr1, arr2) {
    let arrSort = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) { // TODO: можно упростить
            arrSort.push(arr1[i]);
            i++;
        } else {
            arrSort.push(arr2[j]);
            j++;
        }
    }
    return [...arrSort, ...arr1.slice(i), ...arr2.slice(j)]
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const arr1 = arr.slice(0, mid);
    const arr2 = arr.slice(mid);
    return merge(mergeSort(arr1), mergeSort(arr2));
}

// console.log(mergeSort([5,3,6,2,1,4]));