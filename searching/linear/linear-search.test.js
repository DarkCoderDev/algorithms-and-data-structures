const { linearSearch } = require('./linear-search');
const { array } = require("../../structures/arrays");

describe('Testing linear search algorithm', () => {
    it('Found correct value', () => {
        expect(linearSearch(array, 90)).toBe(2);
    });

    it('if have not found the desired value, return null', () => {
        expect(linearSearch(array, 30102000)).toBe(-1);
    });
});
