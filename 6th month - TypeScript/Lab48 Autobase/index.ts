import { table } from "table";
import readline from "readline-sync";

abstract class TruckState {
    abstract changeDriver(): string;
    abstract startRun(): string;
    abstract startRepair(): string;
}

class InBaseState extends TruckState {
    changeDriver(): string {
        return "Driver changed successfully.";
    }
    startRun(): string {
        return "State changed to 'run'.";
    }
    startRepair(): string {
        return "State changed to 'repair'.";
    }
}

class InRunState extends TruckState {
    changeDriver(): string {
        return "Error: can't change driver while on the route.";
    }
    startRun(): string {
        return "Error: already on the route.";
    }
    startRepair(): string {
        return "State changed to 'repair'.";
    }
}

class InRepairState extends TruckState {
    changeDriver(): string {
        return "Error: can't change driver while under repair.";
    }
    startRun(): string {
        const random = Math.random();
        return random > 0.5
            ? "State changed to 'run'."
            : "State changed to 'base'.";
    }
    startRepair(): string {
        return "Error: already in repair.";
    }
}

class Driver {
    name: string;
    surname: string;
    age: number;
    experience: number;

    constructor(name: string, surname: string, age: number, experience: number) {
        if (experience > age - 18) {
            throw new Error(`Driver experience ${experience} is too high for age ${age}`);
        }
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.experience = experience;
    }
}

class Truck {
    static lastId: number = 1;
    id: number;
    name: string;
    driver: Driver;
    state: TruckState;

    constructor(name: string, driver: Driver) {
        this.id = Truck.lastId++;
        this.name = name;
        this.driver = driver;
        this.state = new InBaseState();
    }

    get stringState(): string {
        if (this.state instanceof InBaseState) return "On base";
        if (this.state instanceof InRunState) return "On route";
        if (this.state instanceof InRepairState) return "Under repair";
        return "Unknown";
    }

    setStateByName(stateName: string): string {
        if (stateName === "base") {
            this.state = new InBaseState();
            return `${this.name} is now On base.`;
        } else if (stateName === "run") {
            this.state = new InRunState();
            return `${this.name} is now On route.`;
        } else if (stateName === "repair") {
            this.state = new InRepairState();
            return `${this.name} is now Under repair.`;
        } else {
            return "Invalid state name.";
        }
    }
}

const john = new Driver("John", "Doe", 35, 10);
const jack = new Driver("Jack", "Rose", 55, 30);
const jane = new Driver("Jane", "McClein", 45, 15);
const jani = new Driver("Jani", "Isaac", 22, 4);

const trucks: Truck[] = [
    new Truck("Renault Magnum", john),
    new Truck("Volvo FH12", jack),
    new Truck("DAF XF", jane),
    new Truck("Volvo XR", jani),
];

while (true) {
    const user = readline.question(`
Menu:
1. Show all trucks
2. Show truck by ID
3. Update truck state
4. Exit
Choose an option: `);

    if (user === "1") {
        const dataTable = [["ID", "Truck", "Driver", "State"]];
        trucks.forEach((truck) => {
            dataTable.push([
                truck.id.toString(),
                truck.name,
                `${truck.driver.name} ${truck.driver.surname}`,
                truck.stringState,
            ]);
        });
        console.log(table(dataTable));
    } else if (user === "2") {
        const id = Number(readline.question("Enter truck ID: "));
        const truck = trucks.find((t) => t.id === id);
        if (truck) {
            console.log(`
                        Truck ID: ${truck.id}
                        Truck: ${truck.name}
                        Driver: ${truck.driver.name} ${truck.driver.surname}
                        State: ${truck.stringState}
`);
        } else {
            console.log("Truck not found.");
        }
    } else if (user === "3") {
        const input = readline.question(
            "Enter truck ID and new state (base, run, repair): "
        );
        const [idStr, newState] = input.split(" ");
        const id = Number(idStr);
        const truck = trucks.find((t) => t.id === id);
        if (truck) {
            const result = truck.setStateByName(newState);
            console.log(result);
        } else {
            console.log("Truck not found.");
        }
    } else if (user === "4") {
        console.log("Exiting...");
        break;
    } else {
        console.log("Invalid option.");
    }
}
