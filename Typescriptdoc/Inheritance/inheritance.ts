/*TypeScript supports inheritance, allowing a new class (known as a subclass) to derive from an existing class (superclass). The extends keyword facilitates this.

When a subclass extends a superclass, it inherits all properties and methods. However, it can also:

- Add new properties or methods.
- Override existing methods. */

class Animal {
    name:string;

    constructor(name:string){
        this.name=name
    }


    speak():void{
        console.log(`${this.name} make a noise`)
    }
}

// const myObj=new Animal("Cat")
// myObj.speak()

/*Further extending the class

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a noise`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name); // Call the constructor of the superclass
    }

    // Override the speak method
    speak(): void {
        console.log(`${this.name} barks`);
    }

    // New method specific to Dog class
    wagTail(): void {
        console.log(`${this.name} wags tail`);
    }
}

const myDog = new Dog("Rover");
myDog.speak(); // Output: Rover barks
myDog.wagTail(); // Output: Rover wags tail
*/

/*Exercise
Using the inheritance concept in TypeScript, you're tasked to extend the Animal class to craft a Dog class. Ensure the Dog class overrides the speak method so it prints ${name} barks when called. */


class Dog extends Animal{
    constructor(name:string){
        super(name)
    }

    speak(): void {
        console.log(`${this.name} barks`)
    }
}

const dog=new Dog("Doggy")
dog.speak()