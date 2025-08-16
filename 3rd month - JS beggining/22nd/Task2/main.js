const Calculator = {
    a: 0,
    b: 0,
    read: function() {
        this.a = parseInt(prompt("Введите первое число:", "0"));
        this.b = parseInt(prompt("Введите второе число:", "0"));

        if (isNaN(this.a) || isNaN(this.b)) {
            alert("Ошибка: Введите числовые значения!");
            this.read();  // Повторный ввод при ошибке
        }
    },
    sum: function(a,b) {
        return `Сумма ${this.a} + ${this.b} = ${this.a + this.b}`
    },
    multiply: function(a,b) {
        return `Умножение ${this.a} * ${this.b} = ${this.a * this.b}`
    }
}

// Пример
Calculator.read(5,10)
alert(Calculator.sum())
alert(Calculator.multiply())