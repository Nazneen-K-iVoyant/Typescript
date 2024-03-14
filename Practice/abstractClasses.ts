/* */

abstract class Vehicle{

    //Abstract method that all subclasses must implement
    abstract startEngine():void;

    //Concrete method that is already implemented
    honk():void{
        console.log("Beep Beep!!")
    }
}

//Concrete subclass represnting a Car

class Car extends Vehicle{
    //Implementation of the startEngine method specific to Car
    startEngine(): void {
        console.log("Starting Car Engine...")
    }

}

//Concrerte Subclass reprenting a Motorcycle

class Motorcycle extends Vehicle{
    startEngine(): void {
        console.log("Starting motorcycle engine")
    }
}


//Create instance of Car and Motocycle

const myCar=new Car()
const myMotorcycle=new Motorcycle()

//call methods on instance
myCar.startEngine()
myMotorcycle.startEngine()
myCar.honk()


export {}