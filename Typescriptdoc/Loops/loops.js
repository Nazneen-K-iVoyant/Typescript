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
