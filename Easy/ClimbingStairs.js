var climbStairs = function (n) {
    if (n === 2) return 2
    if (n === 1) return 1

    let fl = 0
    let sc = 0
    let push = 0

    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            fl = 1
        } else if (i === 2) {
            sc = 2

        } else {

            push = fl + sc
            fl = sc
            sc = push
        }

    }

    return push
};

console.log(
    climbStairs(2)
);
