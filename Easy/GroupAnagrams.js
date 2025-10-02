var groupAnagrams = function (strs) {

    const seen = new Map()

    for (let i = 0; i < strs.length; i++) {
        let key = strs[i].split("").sort().join("")

        if (!seen.has(key)) {
            seen.set(key, [])

        }
        seen.get(key).push(strs[i])

    }
    return Array.from(seen.values())
};

