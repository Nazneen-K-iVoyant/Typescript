function detectTypes(val: number | string) {
    if (typeof val === 'string') {
        return val.toLowerCase()
    }
    return val + 3
}

// function provideId(id: string | null) {
//     if (!id) {
//         console.log("please provide ID")
//         return
//     }
//     id.toLowerCase()
// }

// console.log(provideId("h"))


function provideId(id: string | null): string | null {
    if (!id) {
        console.log("Please provide an ID");
        return null;
    }
    // Check if id is not null before calling toLowerCase()
    return id.toLowerCase();
}

console.log(provideId("h"));




