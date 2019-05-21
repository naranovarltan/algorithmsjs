function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr.pop(); // Опорный элемент
    const leftArr = arr.filter(item => item <= pivot);
    const rightArr = arr.filter(item => item > pivot);
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// console.log(quickSort([1, 6, 9, 7, 3, 4]));