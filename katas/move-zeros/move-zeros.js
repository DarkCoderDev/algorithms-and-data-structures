const moveZeroes = (nums) => {
    let count = 0;

    for (let idx = 0; idx < nums.length; ++idx) {
        if (nums[idx] !== 0) nums[count++] = nums[idx];
    }

    for (let idx = count; idx < nums.length; ++idx) {
        nums[idx] = 0;
    }

    return nums;
};

/** O(n) */

module.exports = {
    moveZeroes,
};
