const {moveZeroes} = require('./move-zeros');

const array = [0, 0, 1, 0, 2, 0, 3, 0, 5, 10];
const result = [1, 2, 3, 5, 10, 0, 0, 0, 0, 0];

describe('testing move zeros algorithm', () => {
    it('correct move zeros', () => {
        expect(moveZeroes(array)).toEqual(result);
    });
});
