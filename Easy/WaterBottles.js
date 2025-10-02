var numWaterBottles = function (numBottles, numExchange) {


    let num = numBottles
    let ch = numBottles
    while (ch >= numExchange) {
        let newFull = Math.floor(ch / numExchange)
        num += newFull
        ch = (ch % numExchange) + newFull
    }
    return num
};
numWaterBottles(15, 4)


