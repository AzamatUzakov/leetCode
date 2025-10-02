var numWaterBottles = function (numBottles, numExchange) {


    let num = numBottles
    let ch = numBottles
    while (ch >= numExchange) {
        ch = ch / numExchange
        num += ch
        console.log(ch);
    }

};

console.log(
    numWaterBottles(9, 3)
);

