interface IUnit {
    str: number
    weapon: number
    hp: number
    isActive?: boolean
}

interface IDetails {
    showStatus: () => void
}

interface IHero extends IUnit,IDetails {
    attack: ( target: IUnit ) => void
}

// const hero: IHero = {
//     str: 100,
//     weapon: 100,
//     hp: 200,
//     attack() {},
//     showStatus() {}
// }

interface IGoodHero {
    swallow: () => number
}

interface IPickShield {
    (min: number, max: number): number
}

class GoodHero implements IHero,IGoodHero {
    str: number
    weapon: number
    isActive?: boolean | undefined
    hp: number
    constructor(str: number, weapon: number, hp: number, isActive?: boolean ) {
        this.str = str
        this.isActive = isActive
        this.hp = hp
        this.weapon = weapon
    }
    
    attack: (target: IUnit) => void
    showStatus: () => void
    swallow: () => number
    igni: IPickShield = () => {return 1}
}

const witch = new GoodHero(5,5,5)
witch.igni(5,10)


interface MyObject {
    [index: number]: string
}

interface MyObject2 {
    [index: string]: string
}

const obj: MyObject = ['A','B','c','d','e','f','g','h','i','j','k']
const obj2: MyObject = {
    1: 'a',
    5: 'b'
}

const obj3: MyObject2 = {
    age: 'someAge'
}

class User {
    // 100 fields
}

// User name DTO data transfer object

interface IUser {
    // 100 fields
    name: string
    age: number
}

interface IUserDTO {
    name: IUser['name']
}

