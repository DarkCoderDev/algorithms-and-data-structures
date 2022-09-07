const bubbleSort = array => {
    const { length } = array;
    let idx1;
    let idx2;

    for (idx1 = 0; idx1 < length; ++idx1) {
        for (idx2 = 0; idx2 < length; ++idx2) {
            const next = idx2 + 1;

            if (array[idx2] > array[next]) {
                const current = array[idx2];
                array[idx2] = array[next];
                array[next] = current;
            }
        }
    }

    return array;
}

/** O(n^2) */

module.exports = {
    bubbleSort,
}
