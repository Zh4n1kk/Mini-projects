interface ISwitchable {
    status: boolean,
    turnOn(): void
    turnOff(): void
}
interface IRefregirator extends ISwitchable {
    plugStatus: boolean
    plug(): void
}

interface ITV extends ISwitchable {}

interface IComputer extends ISwitchable {}

const refregirator:IRefregirator = {
    status: false,
    plugStatus: false,
    plug() {
        if (this.plugStatus === false) {
            this.plugStatus = true
            return `Plugged in!`
        } 
        if (this.plugStatus === true) {
            this.plugStatus = false
            return `Plugged off`
        }
    },
    turnOn() {
        if(this.status === false && this.plugStatus === true) {
            this.status = true
            return `turning On`
        } else {
            return `something wrong`
        }
    },
    turnOff() {
        if(this.status === true && this.plugStatus === true) {
            this.status = false
            return `turnOff`
        } else {
            return `Already off`
        }
    }
} 

const tv: ITV = {
    status: false,
    turnOn() {
        if (this.status === false) {
            this.status = true;
            return "TV is now on";
        } else {
            return "TV is already on";
        }
    },
    turnOff() {
        if (this.status === true) {
            this.status = false;
            return "TV is now off";
        } else {
            return "TV is already off";
        }
    }
};

const computer: IComputer = {
    status: false,
    turnOn() {
        if (this.status === false) {
            this.status = true;
            return "Computer booting up...";
        } else {
            return "Computer is already running";
        }
    },
    turnOff() {
        if (this.status === true) {
            this.status = false;
            return "Computer shutting down...";
        } else {
            return "Computer is already off";
        }
    }
};

console.log(refregirator.turnOn())
console.log(refregirator.plug())
console.log(tv.turnOn());
console.log(tv.turnOff());
console.log(computer.turnOn());
console.log(computer.turnOff());
