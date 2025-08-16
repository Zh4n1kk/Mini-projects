enum Gender {
    MALE = 'male',
    FEMALE = 'female'
}

enum AnimalType {
    PREDATOR = 'predator',
    GREENEATER = 'greeneater'
}
abstract class Animal {
    protected age: number
    protected height: number
    protected type: AnimalType
    protected gender: Gender 
    constructor(age: number, height: number, type: AnimalType, gender: Gender ) {
        this.age = age
        this.height = height
        this.type = type
        this.gender = gender
    }
    public abstract getType(): AnimalType
    public abstract setType(type: AnimalType): boolean 
    public abstract showDetails(): void
}

// const animal = new Animal

class Cat extends Animal {
    family: string
    constructor(age: number, height: number, type: AnimalType, gender: Gender, family: string ) {
        super(age, height, type, gender)
        this.family = family
    }

    showDetails() {
        console.log(`
            Age: ${this.age}
            height: ${this.height}
            type: ${this.type}
            Gender: ${this.gender}
            `)
    }
    getType() {
        return this.type
    }

    setType(type: AnimalType) {
        this.type = type
        return true
    }
}

const cat = new Cat(2,25, AnimalType.PREDATOR, Gender.MALE, 'home') 
console.log(cat)

// class Dog extends Animal {
//     constructor(age: number, height: number, type: AnimalType, gender: Gender ) {
//         super(age, height, type, gender)
//     }
// }

// const dog = new Dog(5 , 40, AnimalType.GREENEATER, Gender.FEMALE) 
// const arr: Animal[] = [cat,dog]

// abstract class Figure {
//     height: number
//     width: number
//     constructor(height: number, width: number) {
//         this.height = height
//         this.width = width
//     }
//     abstract countSquare(): number
// }

class MyHTMLElement {}

const tv = new MyHTMLElement()

function getRandomNumber() {
    return Math.floor(Math.random() * 100)
}