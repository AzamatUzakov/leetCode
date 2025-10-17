var removeDuplicates = function (nums) {
    let uniqueElemCount = 1
    for (let i = 1; i < nums.length; i++) {

        if (nums[i] !== nums[i - 1]) {
            nums[uniqueElemCount] = nums[i]
            uniqueElemCount++

        }

    }

    return uniqueElemCount

};


console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
