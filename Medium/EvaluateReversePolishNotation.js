
function evalRPN(arf) {
    let stack = []
    for (let i of arf) {
        switch (i) {
            case "+":
                let b = stack.pop()
                let a = stack.pop()
                stack.push(a + b)
                break;
            case "*":
                let b2 = stack.pop()
                let a2 = stack.pop()
                stack.push(a2 * b2)
                break;
            case "/":
                let b3 = stack.pop()
                let a3 = stack.pop()
                stack.push(Math.trunc(a3 / b3))
                break;
            case "-":
                let b4 = stack.pop()
                let a4 = stack.pop()
                stack.push(a4 - b4)
                break;
            default:
                stack.push(Number(i))
                break;
        }
    }
    return stack[0]
}
