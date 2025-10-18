var searchInsert = function (nums, target) {
    let left = 0
    let rigth = nums.length - 1

    while (left <= rigth) {
        let mid = Math.floor((left + rigth) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (target < nums[mid]) {
            rigth = mid - 1

        } else {
            left = mid + 1
        }

    }
    return left

};

console.log(
    searchInsert([1, 3, 5, 6], 2)
);
