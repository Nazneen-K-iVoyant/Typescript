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


/*Given an object representing a collection of students' grades, use a loop to print out each student's name and their corresponding grades. */
const gradesCollection = {
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
}

// Your code goes here

for(const students in gradesCollection){
    const stud=gradesCollection[students]
    // console.log(stud.name, stud.grades)
    console.log(`${stud.name}: ${stud.grades.join(', ')}`);
}


