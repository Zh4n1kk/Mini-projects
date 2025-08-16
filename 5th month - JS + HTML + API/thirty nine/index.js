function Machine() {
    this.state = false

    this.turnOn = function () {
        if (this.state) {
            console.log('already on');
        } else if (!this.state) {
            console.log('on');
            this.state = true;
        }
    };

    this.turnOff = function () {
        if (!this.state) {
            console.log('already off');
        } else if (this.state) {
            console.log('off');
            this.state = false;
        }
    }
}
function HomeAppliance() {
    Machine.call(this);

    this.plug = false
    this.state = false

    this.plugIn = function () {
        if (this.plug) {
            console.log('already plugged');
        } else if (!this.plug) {
            console.log('you just plugged in');
            this.plug = true;
        }
    }

    this.plugOff = function () {
        if (this.plug) {
            console.log('plugged off');
            this.plug = false;
        } else if (this.plug === false) {
            console.log('already plugged off');
        }
    }

    this.turnOn = function () {
        if (!this.plug) {
            console.log('plug in first!');
        } else if (this.plug) {
            this.state = true
            console.log('turning on');
        }
    }
}

function WashingMachine() {
    HomeAppliance.call(this);
    this.running = false;
    this.state = false;

    this.run = function () {
        if (this.running) {
            console.log('already running');
        } else {
            if (!this.plug) {
                console.warn('plug in the machine')
            } else if (!this.state) {
                console.warn('turn on the machine');
            } else {
                this.running = true;
                console.log('machine started');
            }
        }
    }
}

function LightSource() {
    HomeAppliance.call(this);
    this.level = 0

    this.setLevel = function (level) {
        if (level < 0) {
            console.log(`level can't be negative`)
        } else if (level > 100) {
            console.log(`level can't be more than 100`)
        } else if (level <= 100 && level >= 0) {
            this.level = level;
            console.log('level set to:' + this.level)
        }
    }
}

function autoVehicle() {
    Machine.call(this);
    this.positionX = 0
    this.positionY = 0

    this.setPosition = function (x, y) {
        this.positionX = x
        this.positionY = y
        return `Your position on: X:${x} and Y:${y}`
    }
}

function Car() {
    autoVehicle.call(this);
    this.speed = 10

    this.setSpeed = function (speed) {
        if (speed < 0) {
            return `Incorrect number`
        } else {
            this.speed = speed
            return `Your vehicle speed: ${this.speed}`
        }
    }

    this.run = function (x,y) {
        if (x < 0 || y < 0) {
            return `position can't be negative`
        }

        var interval = setInterval(() => {
            var reachX = this.positionX >= x;

            if (!reachX) {
                this.positionX += this.speed;
                if (this.positionX < x) {
                    console.log('reachX: ' + this.positionX)
                }
                if (this.positionX > x) {
                    this.positionX = x;
                    console.log('We reached X:' + this.positionX)
                }
            }

            var reachY = this.positionY >= y;

            if(!reachY) {
                this.positionY += this.speed;
                if (this.positionY < y) {
                    console.log('reachY: ' + this.positionY)
                }
                if (this.positionY > y) {
                    this.positionY = y;
                    console.log('We reached Y:' + this.positionY)
                }
            }

            if (this.positionX === x && this.positionY === y) {
                clearInterval(interval)
                console.log(`reached destination X:${ this.positionX } Y:${ this.positionY }`)
            }
        }, 1000)
    }

    this.moveBack = function (x, y) {
        if (x < 0 || y < 0) {
            return `position can't be negative`;
        }

        var interval = setInterval(() => {
            var reachX = this.positionX <= x;
            var reachY = this.positionY <= y;

            if (!reachX) {
                this.positionX -= this.speed;
                if (this.positionX > x) {
                    console.log('moving back X: ' + this.positionX);
                } else {
                    this.positionX = x;
                    console.log('Reached back X: ' + this.positionX);
                }
            }

            if (!reachY) {
                this.positionY -= this.speed;
                if (this.positionY > y) {
                    console.log('moving back Y: ' + this.positionY);
                } else {
                    this.positionY = y;
                    console.log('Reached back Y: ' + this.positionY);
                }
            }

            if (this.positionX === x && this.positionY === y) {
                clearInterval(interval);
                console.log(`Reached back destination X:${this.positionX} Y:${this.positionY}`);
            }
        }, 1000);
    }
}

var light = new LightSource()
var bosch = new WashingMachine();
bosch.plugIn();
bosch.turnOn();
bosch.run()
var lightBulb = new LightSource();
lightBulb.setLevel(60);
lightBulb.turnOn();
lightBulb.plugIn();
var honda = new Car();
honda.setPosition(30, 40);
honda.turnOn();
honda.setSpeed(60);
honda.run(180, 240);