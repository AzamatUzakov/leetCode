var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    let s1 = s.split("").sort()
    let t1 = t.split("").sort()

    let left = 0
    let right = s1.length - 1
    while (left <= right) {
        if (s1[left] !== t1[left]) {
            return false
        }
        left++
    }
    return true

};

console.log(
    isAnagram("rat", "car")
);
