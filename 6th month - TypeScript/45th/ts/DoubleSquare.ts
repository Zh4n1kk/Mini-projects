interface IFigure {
    getArea: () => number;
}
interface ISquare {
    getSide: () => number;
}
interface IDoubleSquare extends IFigure {
    buildDOubleSquare: (square1: ISquare, square2: ISquare) => void;
}
abstract class AbstractDoubleSquare implements IDoubleSquare {
    protected area!: number;
    public abstract buildDOubleSquare(square1: ISquare, square2: ISquare): void;
    protected abstract calculateArea(): number;
    public getArea(): number {
        if (this.area === 0) {
            this.area = this.calculateArea();
        }
        return this.calculateArea();
    }
}

class Square implements ISquare {
    side: number;
    constructor(side: number) {
        this.side = side;
    }
    getSide(): number {
        return this.side;
    }
}
class DoubleSquare extends AbstractDoubleSquare {
    private square1!: ISquare;
    private square2!: ISquare;
    public buildDOubleSquare(square1: ISquare, square2: ISquare): void {
        this.square1 = square1;
        this.square2 = square2;
    }
    protected calculateArea(): number {
        return this.square1.getSide() ** 2 + this.square2.getSide() ** 2;
    }
}

const square1: Square = new Square(10);
const square2: Square = new Square(12);
const doubleSquare: DoubleSquare = new DoubleSquare();
doubleSquare.buildDOubleSquare(square1, square2);
console.log(`Площадь doublequare = ${doubleSquare.getArea()}`);
