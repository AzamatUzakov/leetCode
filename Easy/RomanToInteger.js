var romanToInt = function (s) {
    const romanMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    let split = s.split("")
    let res = 0

    for (let i = 0; i < split.length; i++) {
        let key = split[i]
        if (!romanMap.has(key)) return false

        let value = romanMap.get(key)
        if (i + 1 < split.length && value < romanMap.get(split[i + 1])) {
            res -= value
        } else {
            res += value
        }
    }
    return res
};

romanToInt("VII")