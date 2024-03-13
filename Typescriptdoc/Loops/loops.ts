/*Exercise
Given an object representing a collection of books, use the for...in loop to print out each book's title and author. */

const booksCollection = {
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
}


for (const bookKey in booksCollection) {
    if (Object.prototype.hasOwnProperty.call(booksCollection, bookKey)) {
        const book = booksCollection[bookKey]
        console.log(`Book Title ${book.title} and book author ${book.author}`)
    }
}
