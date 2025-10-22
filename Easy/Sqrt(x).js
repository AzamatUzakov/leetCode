var mySqrt = function (x) {
    let res = 0
    while (true) {
        if ((res * res) < x) {
            res++
        } else if ((res * res) === x) {
            return res
        } else if ((res * res) > x) {
            return res - 1
        }
    }
};

console.log(mySqrt(4));
