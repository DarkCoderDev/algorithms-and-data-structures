const minMax = (array) => {
    let min = array[0];
    let max = array[0];

    array.forEach(num => {
        (num > max) && (max = num);
        (num < min) && (min = num);
    });

    return {
        min,
        max,
    }
}

module.exports = {
    minMax,
};
