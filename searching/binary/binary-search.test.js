const { binarySearch } = require('./binary-search');
const { sortedArray } = require("../../structures/arrays");

describe('Testing binary search algorithm', () => {
    it('Found correct index of desired value', () => {
        expect(binarySearch(sortedArray, 6)).toBe(0);
    });

    it('Found correct index of desired value', () => {
        expect(binarySearch(sortedArray, 11)).toBe(2);
    });

    it('Found correct index of desired value', () => {
        expect(binarySearch(sortedArray, 19)).toBe(3);
    });

    it('if have not found the index of desired value, return a negative index', () => {
        expect(binarySearch(sortedArray, 30102000)).toBe(-1);
    });
});
