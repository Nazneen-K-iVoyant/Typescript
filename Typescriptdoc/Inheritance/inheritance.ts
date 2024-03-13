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

const myObj=new Animal("Cat")
myObj.speak()