/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {


    let x_arr = []
    let y_arr = []
    while (x !== 0 || y !== 0) {
        let x_num = x % 2
        let y_num = y % 2
        x = Math.floor(x / 2)
        y = Math.floor(y / 2)

        x_arr.unshift(x_num)
        y_arr.unshift(y_num)

    }

    let currentCount = 0


    for (let i = 0; i < x_arr.length; i++) {
        if (x_arr[i] !== y_arr[i]) {
            currentCount++
        }
    }

    return currentCount
};



console.log(
    hammingDistance(93, 73)
);
