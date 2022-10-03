import { getLogger } from './utils/getLogger';
import Vehicle from './Vehicle';

class Car extends Vehicle {
    
    private lockDoors: boolean;

    constructor(name: string, color: string, wheels: number, lockDoors: boolean = true) {
        super(name, color, wheels);
        this.lockDoors = lockDoors;
    }
    public logTypesProps(): void {
        const log = getLogger("Car");
        log.info(`Information(s): ${this.getPropsString()}, doors ${this.lockDoors ? "locked" : "unlocked"}`);
    }
}

export default Car;