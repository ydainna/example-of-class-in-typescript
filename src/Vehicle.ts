import { getLogger } from "./utils/getLogger";

class Vehicle {
    private name: string;
    private color: string;
    private wheels: number;
    
    constructor(name: string, color: string, wheels: number = 4) {
        this.name = name;
        this.color = color;
        this.wheels = wheels;
    }

    public getPropsString(): string {
        return `Name: ${this.name}, Color: ${this.color}, Wheels: ${this.wheels}`;
    }

    public logTypsProps(): void {
        const log = getLogger("Vehicle");
        log.info(this.getPropsString());
    }
}

export default Vehicle;