const currentYear = document.querySelector('.year');
currentYear.textContent = new Date().getFullYear();



const hobbit = new Book('The Hobbit', 'J.R.R. Tolkein', 295, false, 1);
const neuromancer = new Book('Neuromancer', 'William Gibson', 271, true, 2);
const bladerunner = new Book('Bladerunner', 'Philip K. Dick', 230, true, 3);

let myLibrary = [];

function Book(title, author, numberOfPages, haveRead, id) {
  //the constructor
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.haveRead = haveRead;
  this.id = id;
  this.toggleRead = function() {
    if(this.haveRead === false) {
      return this.haveRead = true;
    } else {
      return this.haveRead = false;
    }
  };
}

function addBookToLibrary(book) {
  //do stuff here
  return myLibrary.push(book);
};

addBookToLibrary(hobbit);
addBookToLibrary(neuromancer);
addBookToLibrary(bladerunner);

const bookshelf = document.querySelector('.bookshelf');

const form = document.getElementById('bookForm');
form.style.display = 'none';

const addBookBtn = document.querySelector('.beautiful-button');

const displayInput = function(e) {
  form.style.display = 'block';
  addBookBtn.style.display = 'none'; 
};

const submit = document.querySelector('.submitBtn');

const addNewBook = function(e) {
  e.preventDefault();

  let haveRead;
  let title = document.getElementById("title").value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let readStatus = document.getElementById('haveRead').value;
  if(readStatus === 'yes' || readStatus === 'Yes') {
    haveRead = true;
  } else if (readStatus === 'no' || readStatus === 'No') {
    haveRead = false;
  }

  let id = myLibrary.length + 1;
  const newBook = new Book(title, author, pages, haveRead, id);
  addBookToLibrary(newBook);
  displayBooks();
  form.reset();
  form.style.display = 'none';
  addBookBtn.style.display = "block";
};

addBookBtn.addEventListener('click', displayInput);

submit.addEventListener('click', addNewBook);

const displayBooks = function() {
  
  bookshelf.innerHTML = '';
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

    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'toggle read';
    toggleBtn.setAttribute('class', 'toggleButton');

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'deleteBtn');
    deleteBtn.textContent = 'Delete';

    const btnBox = document.createElement('div');
    btnBox.setAttribute('class', 'btnBox');
    btnBox.appendChild(deleteBtn);
    btnBox.appendChild(toggleBtn);
    
    card.appendChild(bookHeader);
    card.appendChild(bookAuthor);
    card.appendChild(bookLength);
    card.appendChild(readBook);
    card.appendChild(btnBox);
    bookshelf.appendChild(card);

    const buttons = document.querySelectorAll('.deleteBtn');

    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        myLibrary.map((item) => {
          if(item.id === book.id) {
            const a = myLibrary.indexOf(item);
            const b = 1;
            myLibrary.splice(a, b);
            displayBooks();
          }
        })
      })
    })

    const toggleButtons = document.querySelectorAll('.toggleButton');

    toggleButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        myLibrary.map((item) => {
          if(item.id === book.id) {
            
            item.toggleRead();
            displayBooks();
          }
        })
      })
    })



  });
};

displayBooks();