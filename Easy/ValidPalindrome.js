
var isPalindrome = function (s) {
    let split = s.toLowerCase().replace(/[^a-zA-Zа-яА-Я0-9]/g, "")
    let left = 0
    let rigth = split.length - 1

    while (left <= rigth) {
        if (split[left] !== split[rigth]) {
            return false
        }
        left++
        rigth--

    }
    return true

};

console.log(
    isPalindrome("ab#a")
);
