const Elevator = {
    currentFloor: 1,
    toFloor: function (floorNum) {
        if (isNaN(floorNum)) {
            return `Неправильный ввод!`;
        } else if (floorNum == this.currentFloor) {
            return `Вы уже на этом этаже!`;
        } else if (floorNum < 1 || floorNum > 16) {
                return `Неправильный этаж!`;
        } else if (floorNum > this.currentFloor) {
            console.log(`Elevator is on the floor ${this.currentFloor}`);
            while (floorNum > this.currentFloor) {
                this.currentFloor++;
                console.log(`Elevator is on the floor ${this.currentFloor}`);
            }
        } else if (floorNum < this.currentFloor) {
            console.log(`Elevator is on the floor ${this.currentFloor}`);
            while (floorNum < this.currentFloor) {
                this.currentFloor--;
                console.log(`Elevator is on the floor ${this.currentFloor}`);
            }
        }
    },
    printFloor: function () {
        return `Current floor is ${this.currentFloor}`;
    },
    upOneFloor: function () {
        if (this.currentFloor < 16) {
            this.currentFloor++;
            return `Went one floor up, current floor is ${this.currentFloor}`;
        } else {
            return `You already at top floor`;
        }
    },
    downOneFloor: function () {
        if (this.currentFloor > 1) {
            this.currentFloor--;
            return `Went one floor down, current floor is ${this.currentFloor}`;
        } else {
            return `You already at bottom floor`;
        }
    },
};


