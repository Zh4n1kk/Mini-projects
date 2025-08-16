import readline from "readline-sync";
import { table } from "table";
import MD5 from "./MD5";

class Generator {
    public static calculateMD5Hash(input: string): string {
        const md5: string = MD5(input);
        return input + '' + md5;
    }

    public static generateHonoraryCode(product: Product): string {
            const code = product.price >= 1000
                ? Generator.calculateMD5Hash('Gold -' + product.id)
                : product.price >= 500
                ? Generator.calculateMD5Hash('Silver -' + product.id) 
                : Generator.calculateMD5Hash('Bronze -' + product.id);
    
                return code;
    }
}


abstract class ProductState {
    abstract raisePrice(product: Product): void;
    abstract setUp(product: Product): void;
    abstract setOff(product: Product): void;
    abstract giveToTheWinner(product: Product): void;
    abstract getName(): string;
}

class inStockState extends ProductState {
    getName() {
        return `InStock`;
    }
    raisePrice(): void {
        console.log("Продукт еще не учавствует в торгах");
    }
    setUp(product: Product): void {
        product.setState(new ForSaleState());
        console.log(`Торги были успешно начаты!`);
    }
    giveToTheWinner(): void {
        console.log(`Нельзя отдать товар co склада вы коррупционеры!`);
    }
    setOff(): void {
        console.log(
            `Нельзя снять c торгов продукт который не учавствует в торгах`
        );
    }
}

class ForSaleState extends ProductState {
    getName(): string {
        return `For Sale`;
    }
    raisePrice(product: Product): void {
        const askPrice = readline.question(
            "На сколько вы хотите повысить цену?: "
        );
        const price = Number(askPrice);
        if (price < 0) {
            console.log("Введите корректное число!");
            return;
        } else if (isNaN(price) || price === undefined) {
            console.log(`Вводите только числа!`);
        } else {
            product.price = product.price + price;
            console.log(`Цена была повышена на ${price}$ !`);
        }
    }
    setUp(Product: Product): void {
        console.log(`Продукт уже на торгах`);
    }
    setOff(product: Product): void {
        product.price = 0;
        product.setState(new inStockState());
    }
    giveToTheWinner(product: Product): void {
        if (product.price === 0) {
            console.log("Нельзя отдать продукт бесплатно");
        } else if (product.price > 0) {
            product.honoraryCode = Generator.generateHonoraryCode(product)
            product.setState(new SoldState());
            console.log(`Продукт был успешно продан`);
        }
    }
}

class SoldState extends ProductState {
    getName(): string {
        return `Sold`;
    }
    raisePrice(): void {
        console.log(`Ошибка, Товар уже продан`);
    }
    setUp(Product: Product): void {
        console.log(`Ошибка, Товар уже продан`);
    }
    setOff(): void {
        console.log(`Ошибка, нельзя снять c торгов проданный продукт`);
    }
    giveToTheWinner(): void {
        console.log(`Ошибка, продукт уже продан!`);
    }
}

class Product {
    id: number;
    static lastId: number = 1;
    name: string;
    price: number = 0;
    honoraryCode: string = "";
    state: ProductState;
    constructor(name: string, state: ProductState) {
        this.id = Product.lastId++;
        this.name = name;
        this.price = 0;
        this.honoraryCode = "";
        this.state = state;
    }

    setState(state: ProductState) {
        this.state = state;
    }
}

const data = [["ID", "Название", "Цена", "Статус", "Гонорарный код"]];
const products: Product[] = [
    new Product("Panteen Ultra Gel", new inStockState()),
    new Product("iPhone 5s", new inStockState()),
    new Product("MacBook M2 Pro", new inStockState()),
    new Product("Laptop HP 2K", new inStockState()),
    new Product("Iphone XS", new inStockState()),
];
products.forEach((product) => {
    data.push([
        String(product.id),
        product.name,
        String(product.price),
        product.state.getName(),
        product.honoraryCode ? product.honoraryCode : "Отсутствует",
    ]);
});

function userInteraction() {
    while (true) {
        data.sort((a, b) => {
            if (a[0] === "ID") return -1;
            if (b[0] === "ID") return 1;
            return Number(a[0]) - Number(b[0]);
        });
        console.log(table(data));
        const selectedProductIndex = readline.question(
            "Выберите продукт по номеру: "
        );
        const selectedProduct = products[Number(selectedProductIndex) - 1];
        if (selectedProduct) {
            while (true) {
                const productInfo = [["ID", "Название", "Цена", "Статус"]];
                productInfo.push([
                    String(selectedProduct.id),
                    selectedProduct.name,
                    String(selectedProduct.price),
                    selectedProduct.state.getName(),
                ]);
                console.log(table(productInfo));
                const action = readline.question(
                    "Выберите действие:\n1) повысить цену\n2) начать торги\n3) закончить торги\n4) отдать победителю\n5) выйти из товара:\n6) выйти из программы: "
                );
                if (action === "1") {
                    selectedProduct.state.raisePrice(selectedProduct);
                } else if (action === "2") {
                    selectedProduct.state.setUp(selectedProduct);
                } else if (action === "3") {
                    selectedProduct.state.setOff(selectedProduct);
                } else if (action === "4") {
                    selectedProduct.state.giveToTheWinner(selectedProduct);
                } else if (action === "5") {
                    data.splice(Number(selectedProductIndex), 1);
                    data.push([
                        String(selectedProduct.id),
                        selectedProduct.name,
                        String(selectedProduct.price),
                        selectedProduct.state.getName(),
                        selectedProduct.honoraryCode ? selectedProduct.honoraryCode : "Отсутствует",
                    ]);
                    console.log("Вы вышли из программы");
                    break;
                } else if (action === "6") {
                    console.log("Вы вышли из программы");
                    return;
                } else {
                    console.log("Введите корректное число!");
                }
            }
        } else {
            console.log("Продукт не найден");
        }
    }
}

userInteraction();
