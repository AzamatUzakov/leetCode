var intersect = function (nums1, nums2) {
    let fr = new Set(nums1)
    let sc = new Set(nums2)
    let res = []
    fr.forEach((num1) => {
        if (sc.has(num1)) {
            res.push(num1)

        }
    })
    return res
};

console.log(
    intersect([1, 2, 2, 1], [2, 2])
);
