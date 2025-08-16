import readline from 'readline-sync'

class Elevator {
    currentFloor: number
    capacity: number
    maxFloor: number

    constructor(currentFloor: number, capacity: number, maxFloor: number) {
        this.currentFloor = currentFloor
        this.capacity = capacity
        this.maxFloor = maxFloor
    }

    isAllowableWeight(weight: number): boolean {
        return weight <= this.capacity;
    }

    isAllowableFloor(floor: number): boolean {
        return floor >= 1 && floor <= this.maxFloor;
    }

    move(toFloor: number, weight: number) {
        if (!this.isAllowableFloor(toFloor)) {
            console.log(`The floor ${toFloor} is not accessible. Please choose a floor between 1 and ${this.maxFloor}.`)
            return
        }

        if (!this.isAllowableWeight(weight)) {
            console.log(`The weight of ${weight} exceeds the capacity of ${this.capacity}.`)
            return
        }
         if (this.currentFloor === this.maxFloor) {
        console.log(`The elevator is already on the top floor ${this.maxFloor}.`)
        return
        } else if (toFloor === this.currentFloor) {
            console.log(`The elevator is already on the floor ${this.currentFloor}.`)
            return
        }

        if (toFloor > this.currentFloor) {
        console.log('Current floor:', this.currentFloor)
            for (let i = this.currentFloor; i < toFloor; i++) {
                if (Math.random() < 1 / 3) {
                    this.currentFloor = i + 1
                    console.log(`Elevator is stuck on this floor: ${this.currentFloor}, please try again`)
                    break;
                } else {
                    this.currentFloor = i + 1
                    console.log(`Elevator is moving to floor: ${this.currentFloor}`)
                }
            }

        } else if (toFloor < this.currentFloor) {
        console.log('Current floor:', this.currentFloor)
            for (let i = this.currentFloor; i > toFloor; i--) {
                if (Math.random() < 1 / 3) {
                    console.log(`Elevator is stuck on floor: ${this.currentFloor} please try again`)
                    this.currentFloor = i - 1
                    break;
                } else {
                    console.log(`Elevator is moving to floor: ${this.currentFloor}`)
                }
            }

        }
    }
}

const elevator = new Elevator(1, 200, 18)
console.log(`Current floor: ${elevator.currentFloor} | Capacity: ${elevator.capacity} | Max floor: ${elevator.maxFloor}`)

while (true) {
    const askUser = readline.question('What you want to do? (move, current, exit): ').trim().toLowerCase()

    if (askUser === 'move') {
        const floor = readline.questionInt('Enter the floor you want to go to: ')
        const weight = readline.questionInt('Enter the weight of the elevator: ')
        elevator.move(floor, weight)
    } else if (askUser === 'current') {
        console.log(`Current floor: ${elevator.currentFloor} | Capacity: ${elevator.capacity} | Max floor: ${elevator.maxFloor}`)
    } else if (askUser === 'exit') {
        console.log('Exiting the elevator system.')
        break
    }
    else {
        console.log('Invalid input. Please try again.')
    }
}