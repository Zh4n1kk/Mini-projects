const number = prompt("Введите число: ");
const exponentiation = prompt(`На сколько раз хотите возвести в степень?`);

function power(number, exponentiation) {
    let result = 1;
    if (isNaN(number) || number == null) {
        return "Вы ввели неверное число";
    } else if (isNaN(exponentiation)) {
        exponentiation = 2;
    }
    for (let i = 0; i < exponentiation; i++) {
        result *= number;
    }
    return `${number} в степени ${exponentiation} будет равен ${result}`;
}

alert(`${power(number, exponentiation)}`);
