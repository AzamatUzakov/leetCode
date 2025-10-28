var totalMoney = function (n) {


    let totalSum = 0
    let totalMonday = 1
    let day = 0
    for (let i = 1; i <= n; i++) {
        totalSum += totalMonday + day
        day++
        if (i % 7 === 0) {
            totalMonday++
            day = 0
        }
    }
    return totalSum
};

console.log(
    totalMoney(10)
);
