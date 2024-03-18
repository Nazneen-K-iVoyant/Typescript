/*Classes */
var MyClass = /** @class */ (function () {
    function MyClass(name) {
        this.name = name;
        console.log("The constructor is a special method that gets called when we create an instance of the class.");
    }
    return MyClass;
}());
var myObject = new MyClass("Example");
console.log(myObject.name);
/*We define a class named MyClass using the class keyword.
Inside the class, we declare a property name of type string.
We define a constructor method using the constructor keyword. The constructor is a special method that gets called when we create an instance of the class. It takes a parameter name of type string and assigns it to the name property of the instance using this.name = name.
We create an instance of the class MyClass using the new keyword and passing the required arguments to the constructor.
We access the name property of the instance using dot notation (myObject.name) and log its value to the console. */ 
