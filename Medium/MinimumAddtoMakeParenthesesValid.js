

function minimVal(strs) {
    let splitStr = strs.split("")
    let countOpen = 0
    let countClose = 0
    for (let i of splitStr) {
        if (i === "(") {
            countOpen++

        } else if (i === ")") {
            if (countOpen > 0) {
                countOpen--
            } else if (countOpen === 0) {
                countClose++

            }
        }
    }
    console.log(countClose, countOpen);


    return countOpen + countClose
}

console.log(minimVal("())"));
