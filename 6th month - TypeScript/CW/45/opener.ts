interface Person {
    name: string
    age: number
}

abstract class Human {
    abstract name: string
    abstract age: number
}

interface IRequestConfig {
    method: 'GET' | 'POST'
    error: () => void
    success: () => void
}

const request = (config: IRequestConfig) => {
    // ...
}

request({
    method: 'GET',
    error() {},
    success() {}
})

const john: Person = {
    name: 'John',
    age: 99
}

const jane: Person = {
    name: 'Jane',
    age: 99
}

const arr: Person[] = [jane, john, {name: '', age: 1}]