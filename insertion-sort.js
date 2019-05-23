function insertionSort (arr) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        for (var j = i - 1; j > -1 && arr[j] > value; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = value
    }
    return arr;
}

// console.log(insertionSort([5, 3, 1, 6, 4, 2]));