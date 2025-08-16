class Animal {
    name: string;
    age: number;
    hungry: number;
    mood: number;
    hp: number;
    constructor(name: string, age: number, mood: number) {
        this.name = name;
        this.age = age;
        this.hungry = 0;
        this.mood = 0;
        this.hp = 0;
    }
    isDead(): boolean {
        return this.hp <= 0 || this.mood <= 0 || this.hungry < -20;
    }

    get(): string {
        return `Name: ${this.name}, Age: ${this.age}, Mood: ${this.mood}, Hungriness: ${this.hungry}, HP: ${this.hp}`;
    }
    type() {}
    feedAnimal() {
        if (Math.random() < 0.2) {
            this.mood -= 15;
            this.hp -= 20;
            return;
        }
        if (this.age > 0 && this.age <= 5) {
            this.hungry += 10;
            this.mood += 10;
            this.hp += 10;
        } else if (this.age >= 6 && this.age <= 10) {
            this.hungry += 5;
            this.mood += 5;
            this.hp += 5;
        } else if (this.age > 10) {
            this.hungry += 2;
            this.hp += 2;
            this.mood += 2;
        }
    }

    joyAnimal() {
        if (Math.random() < 0.15) {
            this.mood -= 15;
            this.hp -= 20;
            return;
        }
        if (this.age > 0 && this.age <= 5) {
            this.hungry -= 2;
            this.mood += 10;
            this.hp += 10;
        } else if (this.age >= 6 && this.age <= 10) {
            this.hungry -= 5;
            this.mood += 5;
            this.hp += 5;
        } else if (this.age > 10) {
            this.hungry -= 10;
            this.hp += 2;
            this.mood += 2;
        }
    }

    healAnimal() {
        if (this.age > 0 && this.age <= 5) {
            this.mood += 10;
            this.hp += 10;
        } else if (this.age >= 6 && this.age <= 10) {
            this.mood += 5;
            this.hp += 5;
        } else if (this.age > 10) {
            this.hp += 2;
            this.mood += 2;
        }
    }
}

interface AnimalFactory {
    create(name: string, age: number): Animal
}

class Cat extends Animal {
    constructor(name: string, age: number) {
        super(name,age, 0);
    }
    type() {
        return `Cat`
    }
}

class CatFactory implements AnimalFactory {
    create(name: string, age: number): Animal {
        return new Cat(name,age);
    }
}

class Dog extends Animal {
    constructor(name: string, age: number) {
        super(name,age, 0);
    }
    type() {
        return `Dog`
    }
}

class DogFactory implements AnimalFactory {
    create(name: string, age: number):Animal {
        return new Dog(name, age);
    }
}

class Camel extends Animal {
    constructor(name: string, age: number) {
        super(name,age, 0);
    }
    type() {
        return `Camel`
    }
}

class CamelFactory implements AnimalFactory {
    create(name: string, age: number): Animal {
        return new Camel(name, age);
    }
}

class Giraffe extends Animal {
    constructor(name: string, age: number) {
        super(name,age, 0);
    }
    type() {
        return `Giraffe`
    }
}

class GiraffeFactory implements AnimalFactory {
    create(name: string, age: number): Animal {
        return new Giraffe(name, age);
    }
}

let AnimalList = [
    ["cat", "Bobby", 2],
    ["dog", "Laika", 5],
    ["giraffe", "Bob", 8],
    ["camel", "Taheer", 12]
];
const pets = document.querySelector(".pets") as HTMLSelectElement;

document.addEventListener("DOMContentLoaded", () => {
    function renderAnimalList() {
        for (const [type, name, age] of AnimalList) {
            let factory: AnimalFactory;

            if (type === 'cat') {
                factory = new CatFactory();
            } else if (type === 'dog') {
                factory = new DogFactory();
            } else if (type === 'camel') {
                factory = new CamelFactory();
            } else if (type === 'giraffe') {
                factory = new GiraffeFactory();
            } else {
                continue;
            }

            const animal = factory.create(String(name), Number(age));
            const div = document.createElement("div");
            const p = document.createElement("p");
            const feed = document.createElement("button");
            feed.innerText = 'Feed animal';
            const play = document.createElement("button");
            play.innerText = 'Play';
            const heal = document.createElement("button");
            heal.innerText = 'Heal';

            feed.onclick = () => {
                animal.feedAnimal();
                p.innerText = animal.get() + ' Type: ' + animal.type();
                if (animal.isDead()) {
                    div.remove();
                    alert('Animal has dead');
                }
            };

            play.onclick = () => {
                animal.joyAnimal();
                p.innerText = animal.get() + ' Type: ' + animal.type();
                if (animal.isDead()) {
                    div.remove();
                    alert('Animal has dead');
                }
            };

            heal.onclick = () => {
                animal.healAnimal();
                p.innerText = animal.get() + ' Type: ' + animal.type();
                if (animal.isDead()) {
                    div.remove();
                    alert('Animal has dead');
                }
            };

            p.innerText = animal.get() + ' Type: ' + animal.type();
            div.appendChild(p);
            div.appendChild(play);
            div.appendChild(heal);
            div.appendChild(feed);
            pets.appendChild(div);
        }
    }

    const dialog = document.querySelector("dialog") as HTMLDialogElement;
    const openBtn = document.getElementById("openDialogBtn")!;
    const nameInput = document.getElementById("animal_name") as HTMLInputElement;
    const ageInput = document.getElementById("animal_age") as HTMLInputElement;
    const animalTypeInput = document.getElementById("animal_type") as HTMLSelectElement;

    openBtn.addEventListener("click", () => {
        dialog.showModal();
    });

    dialog.addEventListener("close", () => {
        const type = animalTypeInput.value
        const name = nameInput.value.trim();
        const age = parseInt(ageInput.value.trim(), 10);
        let animalArr = [type,name,age]

        if (!name || isNaN(age) || age > 30 || age <= 0) {
            return;
        }
        AnimalList.push(animalArr)

        let factory: AnimalFactory;

        if (type === 'cat') {
            factory = new CatFactory()
        } else if (type === 'dog') {
            factory = new DogFactory()
        } else if (type === 'camel') {
            factory = new CamelFactory()
        } else if (type === 'giraffe') {
            factory = new GiraffeFactory()
        } else {
            return
        }

        const animal = factory.create(name, age);
        const div = document.createElement("div");
        const p = document.createElement("p");
        const feed = document.createElement("button");
        feed.innerText = 'Feed animal'
        const play = document.createElement("button");
        play.innerText = 'Play'
        const heal = document.createElement("button");
        heal.innerText = 'Heal'
        p.innerText = animal.get() + ' Type: ' + animal.type();

        feed.onclick = () => {
            animal.feedAnimal();
            p.innerText = animal.get() + ' Type: ' + animal.type();
            if (animal.isDead()) {
                div.remove();
                alert('Animal has dead');
            }
        };

        play.onclick = () => {
            animal.joyAnimal();
            p.innerText = animal.get() + ' Type: ' + animal.type();
            if (animal.isDead()) {
                div.remove();
                alert('Animal has dead');
            }
        };

        heal.onclick = () => {
            animal.healAnimal();
            p.innerText = animal.get() + ' Type: ' + animal.type();
            if (animal.isDead()) {
                div.remove();
                alert('Animal has dead');
            }
        };

        div.appendChild(p);
        div.appendChild(play);
        div.appendChild(heal);
        div.appendChild(feed);
        pets.appendChild(div);
        nameInput.value = "";
        ageInput.value = "";
    });

    renderAnimalList();
});
