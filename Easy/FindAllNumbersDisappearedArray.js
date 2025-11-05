var findDisappearedNumbers = function (nums) {
    let seen = new Set(nums)
    let arr = []
    for (let i = 1; i <= nums.length; i++) {
        if (!seen.has(i)) {
            arr.push(i)
        }
    }
    return arr
};

console.log(
    findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])
);
