const mergeSortedArrays = (arr1, arr2) => {
    const merged = [];
    let idx = 0;
    let idx1 = 0;
    let idx2 = 0;

    while (idx < (arr1.length + arr2.length)) {

        const isArr1Done = idx1 >= arr1.length;
        const isArr2Done = idx2 >= arr2.length;

        if (!isArr1Done && (isArr2Done || (arr1[idx1] < arr2[idx2]))) {
            merged.push(arr1[idx1]);
            ++idx1
        } else {
            merged.push(arr2[idx2]);
            ++idx2
        }

        ++idx;
    }

    return merged;
}

/** O(n) */

module.exports = {
    mergeSortedArrays,
};
