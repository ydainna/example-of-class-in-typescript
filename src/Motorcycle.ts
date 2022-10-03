import { getLogger } from './utils/getLogger';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
    constructor(name: string, color: string, wheels: number) {
        super(name, color, wheels);
    }
    public logTypesProps(): void {
        const log = getLogger("Motorcycle");
        log.info(`Information(s): ${this.getPropsString()}`);
    }
}

export default Motorcycle;