const quickSort = (array) => {
    const { length } = array;

    if (length <= 1) {
        return array;
    }

    const middleIdx = Math.ceil(length / 2);

    const less = [];
    const greater = [];

    array.forEach(el => {
        if (el < array[middleIdx]) {
            less.push(el)
        }
        if (el > array[middleIdx]) {
            greater.push(el)
        }
    })

    return [...quickSort(less), array[middleIdx], ...quickSort(greater)];
}

/**
 O(log2n * n)
 Тони Хоар МГУ 1960 год.
*/

module.exports = {
    quickSort,
}
