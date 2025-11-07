var canConstruct = function (ransomNote, magazine) {


    let seen1 = new Map()
    let seen2 = new Map()
    let ransom = ransomNote.split("")
    let magaz = magazine.split("")


    for (let g = 0; g < magaz.length; g++) {
        if (seen2.has(magaz[g])) {
            let count = seen2.get(magaz[g])
            seen2.set(magaz[g], count += 1)
        } else {
            seen2.set(magaz[g], 1)
        }

    }

    for (let g = 0; g < ransom.length; g++) {
        if (seen1.has(ransom[g])) {
            let count = seen1.get(ransom[g])
            seen1.set(ransom[g], count += 1)
        } else {
            seen1.set(ransom[g], 1)
        }
    }

    for (let [index1, val1] of seen1) {

        if (seen2.has(index1)) {
            let sl = seen2.get(index1)

            if (sl <= val1) {
                return false
            }

        } else {
            return false
        }
    }
    return true

};

console.log(
    canConstruct("a", "b")
);
