const fibonacci = function* () {
    let a1 = 0, a2 =  1
    while (true) {
        yield a1;
        let b = a1 + a2;
        a1 = a2
        a2 = b
    }
}

const fib = fibonacci();

for (let i = 0; i < 10; i++) {
    console.log(fib.next().value);
}
