var moveZeroes = function (nums) {

    let nulls = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nulls.push(...nums.splice(i, 1))
        }
    }
    nums.push(...nulls)


    return nums
};

console.log(
    moveZeroes([0, 1, 0, 3, 12])
);
