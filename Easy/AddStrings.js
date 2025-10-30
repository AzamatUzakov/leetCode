var addStrings = function (num1, num2) {
    let frSplit = num1.split("")
    let scSplit = num2.split("")
    let maxLen = Math.max(frSplit.length, scSplit.length)
    let newArr = []
    let curry = 0
    for (let i = 0; i < maxLen; i++) {
        let a = +frSplit.pop() || 0
        let b = +scSplit.pop() || 0
        if (curry === 1) {
            a += 1
            curry = 0
        }
        let sum = a + b
        if (sum > 9) {
            newArr.unshift(sum % 10)
            curry++
        } else {
            newArr.unshift(a + b)
        }
    }
    if (curry === 1) newArr.unshift(1)
    return newArr.join("")
};

console.log(
    addStrings("9", "9")
);
