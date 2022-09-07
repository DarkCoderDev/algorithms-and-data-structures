const selectionSort = (array) => {
    const { length } = array;
    let idx1, currentValue;
    let idx2, nextValue;
    let idxMin;

    for (idx1 = 0; idx1 < length; ++idx1) {
        idxMin = idx1;
        currentValue = array[idx1];

        for (idx2 = idx1 + 1; idx2 < length; ++idx2) {
            nextValue = array[idx2];
            if (nextValue < array[idxMin]) idxMin = idx2;
        }

        array[idx1] = array[idxMin];
        array[idxMin] = currentValue;
    }

    return array;
}

/** O(n^2) */

module.exports = {
    selectionSort,
}
