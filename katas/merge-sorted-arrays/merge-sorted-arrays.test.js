const {mergeSortedArrays} = require('./merge-sorted-arrays');

const stubs = {
    arr1: [1, 2, 3, 5, 10],
    arr2: [3, 3, 6, 7, 9, 11],
    result: [1, 2, 3, 3, 3, 5, 6, 7, 9, 10, 11],
}

describe('Testing merge arrays algorithm', () => {
    it('Correct merging', () => {
        expect(mergeSortedArrays(stubs.arr1, stubs.arr2)).toEqual(stubs.result);
    });
});
