function countingSort(arr, min, max) {
    let i = min,
        j = 0;
    let countArr = [];
    for (i; i <= max; i++) {
        countArr[i] = 0;
    }
    for (i = 0; i <= arr.length; i++) {
        countArr[arr[i]]++;
    }
    for (i = min; i <= max; i++) {
        while (countArr[i] > 0) {
            arr[j] = i;
            countArr[i]--;
            j++;
        }
    }
    return arr;
}

// console.log(countingSort([4, 3, 4, 2, 3, 5, 5, 1, 2, 1], 1, 5));