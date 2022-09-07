const { bubbleSort } = require('./bubble-sort');
const { array, sortedArray } = require("../../structures/arrays");

describe('Testing bubble sort algorithm', () => {
    it('Correct sorting array', () => {
        expect(bubbleSort(array)).toEqual(sortedArray);
    });
});
