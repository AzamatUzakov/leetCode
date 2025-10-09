
var MyStack = function () {
    this.items = []
};

MyStack.prototype.push = function (x) {
    return this.items.push(x)
};

MyStack.prototype.pop = function () {
    return this.items.pop()
};

MyStack.prototype.top = function () {
    return this.items[this.items.length - 1]
};

MyStack.prototype.empty = function () {
    return this.items.length === 0
};