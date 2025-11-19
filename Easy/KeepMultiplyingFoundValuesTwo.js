/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {

    let seen = new Set(nums)

    while (nums.length !== 0) {
        if (!seen.has(original)) {
            return original
        } else {
            original = original * 2
        }
        nums.length--
    }

    return original

};

console.log(
    findFinalValue([2, 7, 9], 4)
);
