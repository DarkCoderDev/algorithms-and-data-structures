const { selectionSort } = require('./selection-sort');
const { array, sortedArray } = require("../../structures/arrays");

describe('Testing selection sort algorithm', () => {
    it('Correct sorting array', () => {
        expect(selectionSort(array)).toEqual(sortedArray);
    });
});
