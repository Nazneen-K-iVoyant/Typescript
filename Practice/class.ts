/*Inheritance
Using the inheritance concept in TypeScript, you're tasked to extend the Animal class to craft a Dog class. Ensure the Dog class overrides the speak method so it prints ${name} barks when called. */

/* 

class Animal{
    protected name:string;

    constructor(name:string){
        this.name=name;
        console.log("Here is the constructor")
    }

    speak():void{
        console.log(`${this.name} makes a noise`)
    }
}

// const dog=new Dog("Buddy");
let a= new Animal("Cat")
// a.speak()

This is  the base class

*/

class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
        console.log("Here is the constructor")
    }

    speak(): void {
        console.log(`${this.name} makes a noise`)
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name)
    }
    speak(): void {
        console.log(`${this.name} barks`)
    }
}

let doggy= new Dog("Tommyyy")
doggy.speak()