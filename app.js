const currentYear = document.querySelector('.year');
currentYear.textContent = new Date().getFullYear();

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
const bladerunner = new Book('Bladerunner', 'Philip K. Dick', 230, true);



function addBookToLibrary(book) {
  //do stuff here
  return myLibrary.push(book);
};

addBookToLibrary(hobbit);
addBookToLibrary(neuromancer);
addBookToLibrary(bladerunner);

const form = document.getElementById('book-form');
form.style.display = 'none';

const addBookBtn = document.querySelector('.beautiful-button');

const displayInput = function(e) {
  form.style.display = 'block';
  addBookBtn.style.display = 'none';
  
};


const submit = document.querySelector('.submit');

const addNewBook = function(e) {
  form.style.display = 'none';
  addBookBtn.style.display = "block";
};

addBookBtn.addEventListener('click', displayInput);

submit.addEventListener('click', addNewBook);


const displayBooks = function() {
  const bookshelf = document.querySelector('.bookshelf');
  
  myLibrary.map((book) => {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const bookHeader = document.createElement('h2');
    bookHeader.textContent = book.title;

    const bookAuthor = document.createElement('h4');
    bookAuthor.textContent = `Author: ${book.author}`;

    const bookLength = document.createElement('p');
    bookLength.textContent = `Number of Pages: ${book.numberOfPages}`;
    bookLength.setAttribute('class', 'num')

    const readBook = document.createElement('p');
    if(book.haveRead){
      readBook.textContent = 'Have Read? Yes';
    } else {
      readBook.textContent = 'Have Read? No';
    }
    card.appendChild(bookHeader);
    card.appendChild(bookAuthor);
    card.appendChild(bookLength);
    card.appendChild(readBook);
    bookshelf.appendChild(card);



  });
};

displayBooks();