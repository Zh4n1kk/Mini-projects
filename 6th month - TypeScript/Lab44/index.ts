import { table } from "table";
import readline from 'readline-sync';

enum StoragePlace {
    icebox = "Icebox",
    showcase = "Showcase",
}

abstract class Product {
    private name: string;
    private storageLifeDays: number;
    private deliveryTimestamp: Date;
    private storagePlace: StoragePlace;

    constructor(
        name: string,
        storageLifeDays: number,
        deliveryTimestamp: Date,
        storagePlace: StoragePlace
    ) {
        this.storageLifeDays = storageLifeDays;
        this.name = name;
        this.deliveryTimestamp = deliveryTimestamp;
        this.storagePlace = storagePlace;
    }

    getName(): string {
        return this.name;
    }

    getDeliveryTimestamp(): Date {
        return this.deliveryTimestamp;
    }

    getStoragePlace(): StoragePlace {
        return this.storagePlace;
    }

    getStorageLifeDays(): number {
        return this.storageLifeDays;
    }

    abstract isFresh(): boolean;
}

class Milk extends Product {
    constructor(deliveryTimestamp: Date, storagePlace: StoragePlace) {
        const life = storagePlace === StoragePlace.icebox ? 60 : 30;
        super("Milk", life, deliveryTimestamp, storagePlace);
    }

    isFresh(): boolean {
        const now = new Date();
        const days = Math.floor((+now - +this.getDeliveryTimestamp()) / 86400000);
        return days <= this.getStorageLifeDays();
    }
}

class Salt extends Product {
    constructor(deliveryTimestamp: Date, storagePlace: StoragePlace) {
        super(
            "Salt",
            Number.POSITIVE_INFINITY,
            deliveryTimestamp,
            storagePlace
        );
    }

    isFresh(): boolean {
        return true;
    }
}

class Fish extends Product {
    constructor(deliveryTimestamp: Date, storagePlace: StoragePlace) {
        const life =
            storagePlace === StoragePlace.icebox ? 20 : Math.floor(20 / 6);
        super("Fish", life, deliveryTimestamp, storagePlace);
    }

    isFresh(): boolean {
        const now = new Date();
        const days = Math.floor((+now - +this.getDeliveryTimestamp()) / 86400000);
        return days <= this.getStorageLifeDays();
    }
}

class Corn extends Product {
    constructor(deliveryTimestamp: Date, storagePlace: StoragePlace) {
        super("Corn", 150, deliveryTimestamp, storagePlace);
    }

    isFresh(): boolean {
        const now = new Date();
        const days = Math.floor((+now - +this.getDeliveryTimestamp()) / 86400000);
        return days <= this.getStorageLifeDays();
    }
}

class Stew extends Product {
    constructor(deliveryTimestamp: Date, storagePlace: StoragePlace) {
        super("Stew", 180, deliveryTimestamp, storagePlace);
    }

    isFresh(): boolean {
        const now = new Date();
        const days = Math.floor((+now - +this.getDeliveryTimestamp()) / 86400000);
        return days <= this.getStorageLifeDays();
    }
}

abstract class Store {
    protected products: Product[] = []
    abstract doInspection(): string;
    abstract createNewInstance(): void;
}

class Duken extends Store {
    constructor() {
        super();
        const productClasses = [Milk, Salt, Fish, Stew, Corn];
        for (let i = 0; i < 20; i++) {
            const ProductClass = productClasses[Math.floor(Math.random() * productClasses.length)];
            const delivery = this.getRandomDeliveryTime();
            const storage = this.getRandomStoragePlace();
            const product = new ProductClass(delivery, storage);
            this.products.push(product);
        }
    }

    doInspection(): string {
        const tableData: string[][] = [];
        tableData.push([
            "Product",
            "Delivered At",
            "Storage Place",
            "S. life Days",
            "Fresh",
        ]);
        for (const product of this.products) {
            tableData.push([
                product.getName(),
                product.getDeliveryTimestamp().toDateString(),
                product.getStoragePlace(),
                product.getStorageLifeDays().toString(),
                product.isFresh() ? "Yes" : "No",
            ]);
        }
        console.log(table(tableData));

        return "Inspection completed";
    }

    private getRandomDeliveryTime(): Date {
        const randomNumber = Math.floor(Math.random() * 200 + 1);
        return new Date(Date.now() - 86400000 * randomNumber);
    }

    private getRandomStoragePlace(): StoragePlace {
        return Math.random() < 0.5
            ? StoragePlace.icebox
            : StoragePlace.showcase;
    }

    createNewInstance() {
        const shop = new Duken();
    }
}

while(true) {
    const askUser = readline.question(
        "Do you want to inspect the products? (yes/no): "
    );
    if (askUser.toLowerCase() === "yes") {
        const shop = new Duken();
        console.log(shop.doInspection());
    }
    else if (askUser.toLowerCase() === "no") {
        console.log("Goodbye!");
        break;
    }
    else {
        console.log("Invalid input");
    }
}
