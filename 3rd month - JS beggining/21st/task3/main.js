function multiply(num1, num2) {
    let result = 0;
    if (isNaN(num1) || isNaN(num2) ) {
        return `Оба параметра обязательны`;
    } else {
        for (let i = 0; i < num1; i++) {
            result += num2;
        }
        return result;
    }
}

// Напишите подряд несколько вызовов функции с выводом в консоль
console.log('multiply(2,5)')
console.log(multiply(2,5))
console.log(`multiply(3,3)`)
console.log(multiply(3,3))
console.log(`multiply(10,12)`)
console.log(multiply(10,12))
console.log(`multiply(4)`)
console.log(multiply(4))
