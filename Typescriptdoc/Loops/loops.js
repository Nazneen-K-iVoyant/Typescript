/*Exercise
Given an object representing a collection of books, use the for...in loop to print out each book's title and author. */
var booksCollection = {
    book1: {
        title: "A",
        author: "AA"
    },
    book2: {
        title: "B",
        author: "BB"
    },
    book3: {
        title: "C",
        author: "CC"
    }
};
for (var bookKey in booksCollection) {
    if (Object.prototype.hasOwnProperty.call(booksCollection, bookKey)) {
        var book = booksCollection[bookKey];
        console.log("Book Title ".concat(book.title, " and book author ").concat(book.author));
    }
}
/*Given an object representing a collection of students' grades, use a loop to print out each student's name and their corresponding grades. */
var gradesCollection = {
    student1: {
        name: "Alice",
        grades: [85, 90, 92]
    },
    student2: {
        name: "Bob",
        grades: [78, 82, 80]
    },
    student3: {
        name: "Charlie",
        grades: [95, 88, 92]
    }
};
// Your code goes here
for (var students in gradesCollection) {
    var stud = gradesCollection[students];
    // console.log(stud.name, stud.grades)
    console.log("".concat(stud.name, ": ").concat(stud.grades.join(', ')));
}
