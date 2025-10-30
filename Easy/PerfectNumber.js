var checkPerfectNumber = function (num) {
    if (num <= 1) return false;
    let nums = []
    for (let i = 1; i < num; i++) {
        let res = num % i
        if (res === 0) {
            nums.push(i)
            res = i

        }

    }

    return nums.reduce((a, b) => a + b, 0) === num


};


console.log(checkPerfectNumber(7));
