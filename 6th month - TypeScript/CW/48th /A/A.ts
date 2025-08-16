import { getRandomNumber } from "../helpers";
import { MyType } from "./types";

export class A implements MyType {
    getRand = () => {
        return getRandomNumber;
    }
}

export const MyFunc = () => {
    getRandomNumber: () => {}
}

export default A