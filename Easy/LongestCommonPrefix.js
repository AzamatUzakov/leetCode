var longestCommonPrefix = function (strs) {

    let fl = strs[0]
    for (let i = 0; i < strs.length; i++) {
        while (!strs[i].startsWith(fl)) {
            fl = fl.slice(0, -1)
        }
    }
    return fl

};

console.log(
    longestCommonPrefix(["flower", "flow", "flight"])
);
