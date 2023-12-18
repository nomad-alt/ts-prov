// DIN UPPGIFT: Skapa en egen sammansatt typ Book som beskriver en bok. Byt ut any mot passande typer. 
// Kompilera TS-koden och se att den fortfarande fungerar som den ska. / 2 poäng
var book = {
    title: "The secret",
    pages: 312,
    authors: ["John Doe", "Jane Doe"],
    price: 129,
};
var describeBook = function (book) {
    console.log("The book \"".concat(book.title, "\" has ").concat(book.pages, " pages and costs ").concat(book.price, " dollar."));
    book.authors.forEach(function (author) { console.log("Author: ".concat(author)); });
};
describeBook(book);
