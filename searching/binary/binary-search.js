const binarySearch = (array, desired) => {
    let start = 0;
    let end = array.length;
    let middleIdx;
    let isFound = false;
    let desiredIdx = -1;

    while (start <= end && !isFound) {
        middleIdx = Math.ceil((start + end) / 2);

        if (array[middleIdx] === desired) {
            isFound = true;
            desiredIdx = middleIdx;
            return desiredIdx;
        }

        array[middleIdx] > desired
            ? end = middleIdx - 1
            : start = middleIdx + 1;
    }

    return desiredIdx;
};

/** O(log n2) */

module.exports = {
    binarySearch,
}
