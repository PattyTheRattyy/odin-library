

myLibrary = [];



// function Book(title, author, pages, beenRead) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.beenRead = beenRead;
//     this.ID = crypto.randomUUID()
// }

class Book {
    constructor(title, author, pages, beenRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.beenRead = beenRead;
        this.ID = crypto.randomUUID()
    }
}

function addBookToLibrary(title, author, pages, beenRead) {
    console.log("HELLO I AM IN ADDBOOK TO LIBARY")
    console.log(title, author, pages, beenRead)
    book = new Book(title, author, pages, beenRead);
    
    myLibrary.push(book)

    createBookCard(book);
}



const bookContainer = document.querySelector(".book-container");
function createBookCard(book) {

    const card = document.createElement("div");
    card.classList.add("card")
    const ID = book.ID;
    card.setAttribute("data-id", ID);


    const titleDiv = document.createElement("div");
    titleDiv.classList.add("card-div");
    const title = document.createElement("p");
    title.classList.add("card-p");
    title.textContent = "Title: ";
    const title2 = document.createElement("p");
    title2.textContent = book.title;
    titleDiv.appendChild(title);
    titleDiv.appendChild(title2);


    const authorDiv = document.createElement("div");
    authorDiv.classList.add("card-div");
    const author = document.createElement("p");
    author.classList.add("card-p");
    author.textContent = "Author: ";
    const author2 = document.createElement("p");
    author2.textContent = book.author;
    authorDiv.appendChild(author);
    authorDiv.appendChild(author2);


    const pagesDiv = document.createElement("div");
    pagesDiv.classList.add("card-div");
    const pages = document.createElement("p");
    pages.classList.add("card-p")
    pages.textContent = "Pages: ";
    const pages2 = document.createElement("p");
    pages2.textContent = book.pages;
    pagesDiv.appendChild(pages);
    pagesDiv.appendChild(pages2);

    const beenRead = document.createElement("button");
    beenRead.classList.add("toggle");
    if (book.beenRead === true) {
        read = "Read"
    } else {
        read = "Not Read"
    }
    beenRead.textContent = read;

    beenRead.addEventListener("click", function(){
        if (beenRead.textContent == "Read") {
            beenRead.textContent = "Not Read"
            book.beenRead = "Not Read"
        }
        else {
            beenRead.textContent = "Read"
            book.beenRead = "Read"
        }
    });


    const delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", function(){
        console.log(myLibrary.length)
        deleteBook(ID);
        deleteCard(ID);
    });

    bookContainer.appendChild(card);
    card.appendChild(titleDiv);
    card.appendChild(authorDiv);
    card.appendChild(pagesDiv);
    card.appendChild(beenRead);
    card.appendChild(delBtn);

}




function deleteBook(ID){
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].ID == ID) {
            myLibrary.splice(i);
        }
    }
}

function deleteCard(ID) {
    const card = document.querySelector(`[data-id="${ID}"]`);
    bookContainer.removeChild(card);
}


const addButton = document.querySelector(".addButton");
const dialog = document.querySelector("dialog");

addButton.addEventListener("click", function(){
    dialog.showModal();
});

const addBook = document.querySelector(".addBook");
const addBookForm = document.querySelector(".addBookForm");

addBookForm.addEventListener("submit", function(e){
    e.preventDefault();

    const title = addBookForm.title.value;
    const author = addBookForm.author.value;
    const pages = addBookForm.pages.value;
    const read = addBookForm.beenRead.checked;
   


    console.log(title);

    addBookToLibrary(title, author, pages, read);
    dialog.close();
    addBookForm.reset();

})






