const intersection = (arr1, arr2) => [...new Set(arr1)].filter(num => new Set(arr2).has(num));

/** O(n) */

module.exports = {
    intersection,
};
