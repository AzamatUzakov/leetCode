var isPerfectSquare = function (num) {
    let left = 0
    let rigth = num

    while (left <= rigth) {
        let mid = Math.floor((left + rigth) / 2)
        let res = num / mid
        let otv = res * res
        if (otv === num) {
            return true
        } else if (otv < num) {
            rigth = mid - 1
        } else {
            left = mid + 1
        }

    }
    return false

};

console.log(
    isPerfectSquare(16)
);
