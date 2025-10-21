var fibGenerator = function* () {
    let fr = 0
    let sc = 1
    let push = 0
    yield fr
    while (true) {
        push = fr + sc
        fr = sc
        sc = push

        yield fr

    }
};


const gen = fibGenerator();
console.log(
    gen.next().value
);
console.log(
    gen.next().value
);

console.log(
    gen.next().value
);
console.log(
    gen.next().value
);
console.log(
    gen.next().value
);