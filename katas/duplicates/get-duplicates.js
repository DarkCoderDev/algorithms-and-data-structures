const getDuplicates = (array) => {
    const duplicatesMap = array.reduce((duplicates, el) => {
        duplicates[el]
            ? duplicates[el]++
            : duplicates[el] = 1;

        return duplicates;
    }, {});

    return Object.entries(duplicatesMap)
        .reduce((result, [el, quantity]) => {
            quantity > 1 && result.push(+el);
            return result;
        }, []);
}

/** O(n) */

module.exports = {
    getDuplicates,
};
