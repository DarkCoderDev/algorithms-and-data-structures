const linearSearch = (array, desired) => {
    let idx;

    for(idx = 0; idx < array.length; ++idx) {
        const element = array[idx];
        if (element === desired) return idx;
    }

    return -1;
};

/** O(n) */

module.exports = {
    linearSearch,
}
