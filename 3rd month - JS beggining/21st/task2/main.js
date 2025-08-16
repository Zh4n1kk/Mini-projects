function validateNum(num) {
    if (num === null) {
        return "Вы нажали 'Отмена'";
    } else if (isNaN(num) || num === '') {
        return "Вы ввели не число";
    } else {
        if (num > 0) {
            return `Вы ввели положительное число`
        } else if (num < 0) {
            return `Вы ввели отрицательное число`
        } else {
            return `Вы ввели ноль`
        }
    }
}

const num = prompt(`Введите число: `)
const result = (validateNum(num))
alert(result)