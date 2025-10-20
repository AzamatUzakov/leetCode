var plusOne = function (digits) {

    let res = []

    for (let i = digits.length - 1; i >= 0; i--) {

        if (digits[i] === 9) {
            digits[i] = 0

        } else {
            digits[i] += 1

            break
        }



    }

    let nullNum = digits.every(num => num === 0)
    if (nullNum) {
        digits.unshift(1)
    }

    return digits

};

console.log(
    plusOne([9, 9, 9, 9])
);
