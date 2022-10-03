import Vehicl from "./Vehicle";
import Car from "./Car";
import Motorcycle from "./Motorcycle";

const vehicle = new Vehicl("Vehicle", "Red");
vehicle.logTypsProps();

const car = new Car("Car", "Blue", 4, true);
car.logTypesProps();

const motorcycle = new Motorcycle("Motorcycle", "Black", 2);
motorcycle.logTypesProps();