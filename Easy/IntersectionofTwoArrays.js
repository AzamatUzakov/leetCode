
var intersection = function (nums1, nums2) {
    let seen = new Set(nums1)
    let seen2 = new Set(nums2)
    let arr = []
    for (let i of seen2) {
        if (seen.has(i)) {
            arr.push(i)
        }
    }
    return arr
};
console.log(
    intersection([1, 2, 3, 3], [2, 3, 3])// [2,3]
);
