/*Q1. Declare an enum named Color with values Red, Green, and Blue. */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
/*Q2. Declare an enum named Direction with string values North, South, East, and West. */
var Direction;
(function (Direction) {
    Direction["North"] = "North";
    Direction["South"] = "South";
    Direction["East"] = "East";
    Direction["West"] = "West";
})(Direction || (Direction = {}));
/*Q3. Declare an enum named Days with explicit values for Monday, Tuesday, and Wednesday. */
var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
    Days[Days["Sunday"] = 7] = "Sunday";
})(Days || (Days = {}));
console.log(Days.Monday);
/*Q4. Declare a variable selectedColor of type Color and assign it the value Color.Green */
var selectedColor = Color.Green;
console.log(selectedColor);
/*Q5. Declare a function isWeekend that takes a parameter of type Days and returns true if the day is Saturday or Sunday. */
function isWeekend(data) {
    return data === Days.Saturday || data === Days.Sunday;
}
console.log(isWeekend(Days.Saturday));
/*Q6. Declare a variable userStatus of type Status and assign it the value Status.Active. */
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Inactive"] = 1] = "Inactive";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
var userStatus = Status.Active;
/*Q7. Declare an enum named Fruit with values Apple, Banana, and Orange. Print the ordinal value of Orange. */
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
    Fruit[Fruit["Orange"] = 2] = "Orange";
})(Fruit || (Fruit = {}));
console.log(Fruit.Orange);
/*Q8. Declare an enum named Shape with values Circle, Square, and Triangle. Check if Square is defined in the enum. */
var Shape;
(function (Shape) {
    Shape[Shape["Circle"] = 0] = "Circle";
    Shape[Shape["Square"] = 1] = "Square";
    Shape[Shape["Triangle"] = 2] = "Triangle";
})(Shape || (Shape = {}));
var isSquareDefined = Shape.hasOwnProperty("Square");
console.log(isSquareDefined);
/*Q9. Declare an enum named Month with string values January, February, and March. Print the string value of February. */
var Month;
(function (Month) {
    Month["January"] = "January";
    Month["February"] = "February";
    Month["March"] = "March";
})(Month || (Month = {}));
console.log(Month.February);
/*Q10. Declare an enum named Card with values Ace, Two, Three, and Four. Print the number of elements in the enum. */
// enum Card {
//     Ace,
//     Two,
//     Three,
//     Four
// }
// const numberOfElements: number = Object.keys(Card).length / 2;
// console.log(numberOfElements); // Output: 4
var Card;
(function (Card) {
    Card[Card["Ace"] = 0] = "Ace";
    Card[Card["Two"] = 1] = "Two";
    Card[Card["Three"] = 2] = "Three";
    Card[Card["Four"] = 3] = "Four";
})(Card || (Card = {}));
var numberOfElements = Object.keys(Card).length / 2;
console.log(numberOfElements);
