var removeAnagrams = function (words) {

    let sortedArr = []
    let stack = []
    for (let i of words) {
        let sorted = i.split("").sort().join("")
        sortedArr.push(sorted)
    }

    for (let g = 0; g < sortedArr.length; g++) {
        if (sortedArr[g] !== sortedArr[g - 1]) {
            stack.push(words[g])
        }
    }

    return stack


};
console.log(
    removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"])
);
