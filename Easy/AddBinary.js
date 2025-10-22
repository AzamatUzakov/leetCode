
var addBinary = function (a, b) {

    let res = ""
    let curr = 0
    let long = Math.max(a.length, b.length)

    for (let i = long - 1; i >= 0; i--) {
   let d = parseInt(a[a.length - long + i] ? a[a.length - long + i] : "0") +
            parseInt(b[b.length - long + i] ? b[b.length - long + i] : "0") +
            curr;
        if (d === 0) {
            res = 0 + res
        } else if (d === 1) {
            res = 1 + res
        } else if (d === 2) {
            res = 0 + res
            curr = 1
        } else if (d === 3) {
            res = 1 + res
            curr = 1
        }
        if (d < 2) {
            curr = 0
        }

    }
    if (curr == 1) {
        res = curr + res

    }

    return res
};

console.log(
    addBinary("1010", "1011")
);
