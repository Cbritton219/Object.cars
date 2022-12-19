class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return `beep`
    }
    toString() {
        return `The vhicle is a ${this.make}${this.model} from the year${this.year}`
    }
}

class Cars extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
        this.numWheels = 2;
    }
    revEngine() {
        return `Vroom!`;
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Sorry only vehicles allowed here"
        }
        if (this.vehicles.length >= this.capacity) {
            return "sorry we are full"
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added";
    }
}
