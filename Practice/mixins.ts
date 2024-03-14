/*Mixins are a design pattern that allows you to compose behavious from multiple source objects into a new object.
In Typescript this pattern can be achieved by combining multiple classes to form a new class.
Its a way of reusing multiple class functionalities to form a new unique class */

/*Steps for mixins:
- Create Classes
- Define Interfaces  ---> that describe the structure of each mixin
- Compose Mixins
- Apply Mixins                                                         

*/


//Define a mixin interface representing a printable behaviour
interface Printable {
    print(): void;
}
//Define a mixin class that implements the mixin behaviour
class PrintableMixin implements Printable {
    print(): void {
        console.log("Printing....")
    }
}


//Define a target class that will use the mixin
class Document {
    title: string;

    constructor(title: string) {
        this.title = title
    }
}

//Apply the mixin to the target class using  intersection types
type DocumentWithPrint = Document & Printable;

//Implement the printable behaviour on the target class
class PrintableDocument extends Document implements Printable {
    constructor(title: string) {
        super(title)
    }
    //Implement the print method from the printable interface
    print(): void {
        console.log(`Printing document ${this.title}`)
    }

}

const doc = new PrintableDocument("My Document")
doc.print()
export { }