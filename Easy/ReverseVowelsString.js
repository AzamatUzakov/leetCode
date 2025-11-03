var reverseVowels = function (s) {
    let splitS = s.split("")
    let vowels = []
    let arr = []
    for (let i = 0; i < splitS.length; i++) {
        let val = splitS[i]
        if (val.toLowerCase() === "a".toLowerCase() || val.toLowerCase() === "e".toLowerCase() || val.toLowerCase() === "i".toLowerCase() || val.toLowerCase() === "o".toLowerCase() || val.toLowerCase() === "u".toLowerCase()) {
            vowels.push(val)
        }
    }
    for (let g = 0; g < splitS.length; g++) {
        let val = splitS[g]
        if (val.toLowerCase() === "a".toLowerCase() || val.toLowerCase() === "e".toLowerCase() || val.toLowerCase() === "i".toLowerCase() || val.toLowerCase() === "o".toLowerCase() || val.toLowerCase() === "u".toLowerCase()) {
            let last = vowels.pop()
            val = last
            arr.push(val)
        } else {
            arr.push(val)
        }
    }
    return arr.join("")

};
console.log(
    reverseVowels("leetcode")
);
