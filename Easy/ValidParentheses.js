var isValid = function (s) {
    let stack = []

    let splitWord = s.split("")

    for (let i of splitWord) {
        if (i === "(" || i === "[" || i === "{") {
            stack.push(i)
        } else {
            let low = stack.pop()
            if (i === ")" && "(" !== low) return false
            if (i === "]" && "[" !== low) return false
            if (i === "}" && "{" !== low) return false
        }
    }
    return stack.length === 0
}
