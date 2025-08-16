
import readline from 'readline-sync'
const name = readline.question(`What's your name? \n`)
console.log(`Hello! ${name}`)

while(true) {
    const answer: string = readline.question('Your age?\n')
    const age: number = parseInt(answer)
    if(!isNaN(age)) {
        console.log(`Your age is ${age}`)
        break
    }
}

// console.log('Hello World!')

let isActive: boolean = true

isActive = false

let num: number | string | null = null
let str: string = 'Hello'
let arr: number[] = [5,1]
let arr2: Array<number> = [5,2,5]
const arr3: [boolean, number,string] = [true,2,'Hello']
arr3[2].toLowerCase()

const person: {
    name: string,
    job: string,
    isActive: boolean
} = {
    name: 'jani',
    job: 'Dev',
    isActive: true
}

const persons: {
    name: string,
    job: string,
    isActive: boolean
}[] = [{
    name: 'John',
    job: 'Dev',
    isActive: false
}]

persons[0]

let allTypes = [5,'String',true]

const getRandomNum: (min: number, max:number) => number = (min:number,max:number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getRandomNum(50,55))

let grades = [9.4,9,10.7,6.8,10,9.1,9,11]
let overallGrades:number = 0;

grades.forEach(grade => {
    overallGrades += grade
})

console.log(overallGrades / 8 * 10 )

// Приведение типов & ENUM

const myStr: any = `I'm a string` // response from server
const lengthOfStr: number = (myStr as string).length
const lengthOfStr2: number = (<string>myStr).length

// const myName = 'jani'
// (myName as any).push('Test')

enum Status {
    OK,
    NOT_OK,
    I_DONT_KNOW
}
let status2: 'ok' | 'not ok' = 'not ok'
status2 = 'ok'
console.log(Status.NOT_OK)