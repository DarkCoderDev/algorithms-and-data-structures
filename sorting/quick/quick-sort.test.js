const { quickSort } = require('./quick-sort');
const { array, sortedArray } = require("../../structures/arrays");

describe('Testing quick sort algorithm', () => {
    it('Correct sorting array', () => {
        expect(quickSort(array)).toEqual(sortedArray);
    });
});
