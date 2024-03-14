/*Exercise
Define a union type named Vehicle which can be either Car or Bike. The Car type has properties type and doors, while the Bike type has properties type and hasBell. Create a function that takes a Vehicle as an argument and returns whether it's a Car or Bike. */

type Vehicle = Car | Bike

type Car = {
    type: string,
    doors: number
}

type Bike = {
    type: string,
    hasBell: boolean
}

const car:Car = {
    type: "BMW",
    doors: 4
}
const bike:Bike = {
    type: "Mountain",
    hasBell: true
}

function vehicleType(vehicle: Vehicle): string {
    if ('door' in vehicle) {
        return "Car"
    } else {
        return "Bike"
    }
}

console.log(vehicleType(car))