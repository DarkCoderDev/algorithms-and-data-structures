const {minMax} = require('./min-max');

const array = [0, 0, 1, 0, 2, 0, 3, 0, 5, 10];

describe('testing min max algorithm', () => {
    it('correct find values', () => {
        expect(minMax(array)).toEqual({ min: 0, max: 10 });
    });
});
