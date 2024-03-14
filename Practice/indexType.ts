/*Create an interface for a dictionary which has string keys and values can be either strings or numbers. Then, create a function to return the value for a given key from this dictionary. */


interface dictionary{
    [key:string]:string;
}

/*[key: string]: This part defines the index signature. It specifies that any string can be used as a key to access properties of the object. */

const dictionary: dictionary={
    'key1':'value1',
    'key2':'value2'
}
console.log(dictionary['key1'])
console.log(dictionary['key2'])