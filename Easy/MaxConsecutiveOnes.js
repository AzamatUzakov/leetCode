var findMaxConsecutiveOnes = function (nums) {
    console.log(nums);
    let maxLength = 0
    let maxNum = 0
    for (let i of nums) {

        if (i === 1) {
            maxLength++
            if (maxLength > maxNum) {
                maxNum = maxLength
            }
        } else {
            maxLength = 0
        }
    }
    return maxNum

};

console.log(findMaxConsecutiveOnes([1, 1, 1, 1, 1, 0, 1, 1, 1, 1]));//3
