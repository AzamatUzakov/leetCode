/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let split = n.toString().split("")
    let curr = []


    let res = 0

    while (res !== 1) {
        res = 0
        for (let i of split) {
            res += +i * +i

        }

        if (!curr.includes(res)) {
            split.length = 0
            split.push(...res.toString().split(""))

        } else {
            return false
        }
        curr.push(res)



    }

    return true


};

console.log(
    isHappy(19)
);
