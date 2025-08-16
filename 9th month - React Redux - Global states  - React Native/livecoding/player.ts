class Player {
    name: string
    level: number
    exp: number
    constructor(name: string) {
        this.name = name
        this.level = 1
        this.exp = 0
    }

    addExp(points: number) {
        if(points < 0) {
            throw new Error()
        }
        this.exp += points
        if(this.exp >= 100) {
            const num = Math.round(this.exp / 100)
            const num2 = this.exp % 100
            this.exp = num2
            this.level += num
        }
    }

    info() {
        console.log(`Name: ${this.name}, Level: ${this.level}, Exp: ${this.exp}`)
    }
}

const pl = new Player('Jani')
console.log(pl)
pl.addExp(510513)
console.log(pl)
pl.info()
