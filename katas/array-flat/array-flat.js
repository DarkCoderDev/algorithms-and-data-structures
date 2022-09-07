const arrayFlat = array => array.reduce(
    (flattedArray, item) =>
        flattedArray = Array.isArray(item)
            ? [...flattedArray, ...arrayFlat(item)]
            : [...flattedArray, item]
    ,
    []
);

/** O(n) */

module.exports = {
    arrayFlat,
};
