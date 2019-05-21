function shakerSort(array) {
    let left = 0;
    let right = array.length - 1;
    let temp;
    do {
        for (let i = left; i < right; i++) {
            if (array[i] > array[i + 1]) {
                temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
        right--;
        for (let i = right; left < i; i--) {
            if (array[i] < array[i - 1]) {
                temp = array[i];
                array[i] = array[i - 1];
                array[i - 1] = temp;
            }
        }
        left++;
    } while (left < right);
    return array;
}

// console.log(shakerSort([10, 8, 1, 5, 4, 6, 11, 2, 3, 7, 9, 0]));