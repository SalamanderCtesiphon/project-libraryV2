let myLibrary = [];

function Book(title, author, numberOfPages, haveRead) {
  //the constructor
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.haveRead = haveRead;
}

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkein', 295, true);
const neuromancer = new Book('Neuromancer', 'William Gibson', 271, true);
const bladerunner = new Book('Do Androids Dream of Electric Sheep', 'Philip K. Dick', 230, true);



function addBookToLibrary(book) {
  //do stuff here
  return myLibrary.push(book);
};

addBookToLibrary(hobbit);
addBookToLibrary(neuromancer);
addBookToLibrary(bladerunner);

console.log(myLibrary);