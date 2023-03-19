/* eslint-disable no-unused-vars */
let myLibrary = [];

function Book(title, author, pages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function render() {
    let libraryEl = document.querySelector(".libraryBooks");
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let BookEl = document.createElement('div');
        BookEl.setAttribute('class', 'myBook')
        BookEl.innerHTML = `<p>${book.title}</p>`
        libraryEl.appendChild(BookEl)
        console.log(myLibrary[i]);
    }
}

function addBookToLibrary() {
    // do stuff here
    let title = document.querySelector("#bookTitle").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#Totalpages").value;
    let read = document.querySelector("#books-status").value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

document.querySelector("#AddBookForm").addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary();
})


function ModalOpen() {
    document.querySelector(".modal").style.display = "revert";
}
function ModalClose() {
    document.querySelector(".modal").style.display = "none";
}

