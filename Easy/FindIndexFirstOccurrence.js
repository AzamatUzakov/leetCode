var strStr = function (haystack, needle) {

    let splitHay = haystack.split("")
    for (let i = 0; i < splitHay.length; i++) {
        if (haystack.slice(i, (i + needle.length)) === needle) {
            return i
        }

    }

    return -1

};


console.log(
    strStr("hello", "ll")
);
