class Hero {
    private hp: number 
    private str: number 
    private defense: number

    constructor(hp2: number, str2: number, defense2: number) {
        this.hp = hp2
        this.str = str2
        this.defense = defense2
    }
    public static showClassName(): void {
        console.log('Hero')
    }

    public attack(target: Hero): void {
        target.changeHp(-(this.str - target.defense))
    }
    public changeHp(health: number) {
        this.hp += health
    }
}

const witcher: Hero = new Hero(1000,100,50)
const griffon: Hero = new Hero(2000,100,25)
const arr: Hero[] = [witcher,griffon]

console.log(witcher)
console.log(griffon)

witcher.attack(griffon)
griffon.attack(witcher)

console.log(witcher)
console.log(griffon)

griffon.changeHp(-5000)
console.log(griffon)

witcher['str'] = 1000
witcher.changeHp(5000)

console.log(witcher)

class MathOperator {
    public static multiply(...rest: number[]) {
        return rest.reduce((prevval, value) => prevval * value)
    }
    public static sum(...rest: number[]) {
        return rest.reduce((prevval, value) => prevval + value)
    }
}

class Parser {
    static phone(phone: string): string {
        return phone.replace(/\D/g, '')
    }
}

console.log(MathOperator.multiply(1,5,9,1,2))
console.log(Parser.phone('+1(800)555-77-88'))

class Human {
    private _age: number
    constructor(age: number) {
        this._age = age
        // this.name 
    }
    set age(val: number) {
        this._age = val
    }
    get age() {
        return this._age
    }
}

const human = new Human(10)
human.age = 99
console.log(human.age)

class Student {
    private _name: string
    private _age: number
    constructor(name: string, age: number) {
        this._name = name
        this._age = age
    }

    public getName() {
        return this._name
    }

    public setName(val: string) {
        this._name = val
    }
}

const student = new Student('John', 55)
console.log(student.getName())
student.setName('Bob')
console.log(student.getName())
