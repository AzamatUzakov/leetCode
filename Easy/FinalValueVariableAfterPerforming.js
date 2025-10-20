
var finalValueAfterOperations = function (operations) {
    let x = 0
    for (let i = 0; i < operations.length; i++) {
        let splits = operations[i].split("")
        if (splits[0] !== "X") {
            switch (operations[i][0]) {
                case "-":
                    --x
                    break;
                case "+":
                    ++x
                    break;
            }

        } else {

            switch (operations[i][1]) {
                case "-":
                    x--
                    break;
                case "+":
                    x++
                    break;
            }
        }


    }
    return x

};

console.log(
    finalValueAfterOperations(["--X", "X++", "X++"])
);
