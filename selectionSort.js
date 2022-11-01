const books = require('./books_array');
const lowerValue = require('./lowerValue');

for(let i = 0; i < books.length; i++){
    let lower = lowerValue(books, i);

    let currentBook = books[i];
    let lowerValueBook = books[lower];

    books[i] = lowerValueBook;
    books[lower] = currentBook;
}

console.log(books);