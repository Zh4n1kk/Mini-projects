abstract class figure {
    width: number
    height: number
    constructor(width: number, height: number) {
        this.width = width
        this.height = height
    }

    abstract calculateArea(): number
}

class Rectangle extends figure {
    constructor(width: number, height: number) {
        super(width, height)
    }

    calculateArea(): number {
        return this.width * this.height
    }
}

class Circle extends figure {
    constructor(radius: number) {
        super(radius, radius)
    }

    calculateArea(): number {
        return Math.PI * (this.width / 2) ** 2
    }
}

class Triangle extends figure {
    constructor(base: number, height: number) {
        super(base, height)
    }
    calculateArea(): number {
        return (this.width * this.height) / 2
    }
}

const rectangleFigure = new Rectangle(10, 20)
const circleFigure = new Circle(10)
const triangleFigure = new Triangle(10, 20)
const figures: figure[] = [rectangleFigure, circleFigure, triangleFigure]

figures.forEach(figure => {
    console.log(figure.calculateArea())
})