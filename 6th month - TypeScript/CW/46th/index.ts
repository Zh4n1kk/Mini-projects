class MyObj<T> {
    obj: T;
    constructor(obj: T) {
        this.obj = obj
    }

    showObjectType = () => {
        console.log(typeof this.obj)
    }
}

const myObj = new MyObj<string>('test')
const myObj2 = new MyObj<boolean>(true)
myObj.showObjectType()
myObj2.showObjectType()

// abstract class Figure<T> {
//     abstract x: T
//     abstract y: T
//     constructor(x: T, y: T) {
//         this.x = x
//         this.y = y
//     }
// }

// class Square<T> extends Figure<T> {
//     constructor(x: number, y:number) {
//         super(x,y)
//     }
// } 