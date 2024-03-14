/*Q1. Declare an enum named Color with values Red, Green, and Blue. */
enum Color {
    Red,
    Green,
    Blue
}

/*Q2. Declare an enum named Direction with string values North, South, East, and West. */
enum Direction {
    North = "North",
    South = "South",
    East = "East",
    West = "West"
}

/*Q3. Declare an enum named Days with explicit values for Monday, Tuesday, and Wednesday. */

enum Days {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}
console.log(Days.Monday)

/*Q4. Declare a variable selectedColor of type Color and assign it the value Color.Green */

var selectedColor = Color.Green
console.log(selectedColor)

/*Q5. Declare a function isWeekend that takes a parameter of type Days and returns true if the day is Saturday or Sunday. */

function isWeekend(data: Days): boolean {
    return data === Days.Saturday || data===Days.Sunday
}
console.log(isWeekend(Days.Saturday))

/*Q6. Declare a variable userStatus of type Status and assign it the value Status.Active. */
enum Status{
    Active,
    Inactive,
    Pending
}

let userStatus:Status=Status.Active

/*Q7. Declare an enum named Fruit with values Apple, Banana, and Orange. Print the ordinal value of Orange. */

enum Fruit{
    Apple,
    Banana,
    Orange
}
console.log(Fruit.Orange)

/*Q8. Declare an enum named Shape with values Circle, Square, and Triangle. Check if Square is defined in the enum. */

enum Shape{
    Circle,
    Square,
    Triangle
}

const isSquareDefined:boolean=Shape.hasOwnProperty("Square")
console.log(isSquareDefined)

/*Q9. Declare an enum named Month with string values January, February, and March. Print the string value of February. */

enum Month{
    January="January",
    February="February",
    March="March"
}
console.log(Month.February)

/*Q10. Declare an enum named Card with values Ace, Two, Three, and Four. Print the number of elements in the enum. */

enum Card{
    Ace,
    Two,
    Three,
    Four
}

const numberOfElements:number=Object.keys(Card).length/2
console.log(numberOfElements)

/*When you use Object.keys() on an enum, it returns an array containing both the numeric and string keys. */