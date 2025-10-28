var thirdMax = function (nums) {
    let sortedNums = nums.sort((a, b) => b - a)
    let seen = new Set(sortedNums)
    let count = 1
    let max = 0

    for (let i of seen) {
        if (seen.size >= 3) {
            if (count <= 3) {
                max = Math.max(i)
                console.log(count);

            }
            count++

        } else {
              return i
        }

    }
  
    return max
};

console.log(
    thirdMax([1, 2, 2, 5, 3, 5])
);
