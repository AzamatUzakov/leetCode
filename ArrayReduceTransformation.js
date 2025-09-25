var reduce = function (nums, fn, init) {
    if (nums.length === 0) return init

    for (let i of nums) {
        let val = fn(init, i)
        init = val
    }
    return init
};
let nums = []

let fn = function sum(accum, curr) { return 0; }
let init = 25;

let result = reduce(nums, fn, init);

console.log(result);
