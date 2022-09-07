const {arrayFlat} = require('./array-flat');

const array = [1, [2], [3, [5]], 10];
const result = [1, 2, 3, 5, 10];

describe('testing array flat algorithm', () => {
    it('correct flat array', () => {
        expect(arrayFlat(array)).toEqual(result);
    });
});
