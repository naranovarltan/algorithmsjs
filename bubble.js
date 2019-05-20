function bubble(arr) {
    for (let i = 0; i < arr.length ; i++) {
        let f = 0;
        for(let j = 0 ; j < arr.length - i - 1; j++){
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = temp;
                f = 1;
            }
        }
        if (f === 0) {
            break;
        }
    }
    return arr;
}

// console.log(bubble([1, 9, 2, 3, 7, 6, 4, 5, 5, 9, 2, 3, 7, 6, 4, 5, 5, 9, 2, 3, 7, 6, 4, 5, 5, 6]));