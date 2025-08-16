const Circle = {
    radius: 0,
    setRadius: function() {
        this.radius = parseFloat(prompt('Введите радиус круга: '))
        if (isNaN(this.radius) || this.radius <= 0) {
            alert('Введите корекктное число для радиуса!');
            this.setRadius();
        }
    },
    getRadius: function() {
    return `Был выставлен радиус: ${this.radius}`
    },
    getArea: function() {
        return `Площадь окружности: ${Math.round(Math.PI * Math.pow(this.radius, 2))}`
    },
    getCircumference: function() {
        return `Длина окружности: ${Math.round(2 * Math.PI * this.radius)}`
    },
    getInfo: function() {
        return `Радиус составил: ${this.radius} | ${this.getArea()} | ${this.getCircumference()}`
    }
}

console.log(Circle.setRadius())
alert(Circle.getRadius())
alert(Circle.getArea())
alert(Circle.getCircumference())
alert(Circle.getInfo())
