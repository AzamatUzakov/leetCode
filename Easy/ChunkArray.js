var chunk = function (arr, size) {

    let newArr = []
    let start = 0
    for (let i = 0; i < arr.length; i++) {

        let slice = arr.slice(start, start + size)
        if (slice.length !== 0) {
            newArr.push(slice)
        }
        start += size


    }
    return newArr
};


console.log(
    chunk([1, 9, 6, 3, 2], 3)
);
