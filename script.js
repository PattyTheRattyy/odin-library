

myLibrary = [];



function Book(title, author, pages, beenRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.beenRead = beenRead;
    this.ID = crypto.randomUUID()
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
    const ID = book.ID
    card.setAttribute("data-id", ID);

    const title = document.createElement("p");
    title.textContent = "Title: " + book.title;
    const author = document.createElement("p");
    author.textContent = "Author: " + book.author;
    const pages = document.createElement("p");
    pages.textContent = "Pages: " + book.pages;
    const beenRead = document.createElement("p");
    if (book.beenRead === true) {
        read = "Yes"
    } else {
        read = "No"
    }
    beenRead.textContent = "Read it? " + read;

    const delBtn = document.createElement("button");
    delBtn.addEventListener("click", function(){
        console.log(myLibrary.length)
        deleteBook(ID);
        deleteCard(ID);
        

    });


    bookContainer.appendChild(card);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(beenRead);
    card.appendChild(delBtn);

}

function deleteBook(ID){
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].ID == ID) {
            myLibrary.splice(i);
        }
    }
    console.log(myLibrary.length)
}

function deleteCard(ID) {
    // console.log(ID);
    // const card = document.querySelector("card[data-id=1]");
    // console.log(card);
    // bookContainer.removeChild(card);

    console.log(`[data-id="${ID}"]`);

    const card = document.querySelector(`[data-id="${ID}"]`);
    bookContainer.removeChild(card);
    
    // cards.forEach((card) => {
    //     console.log("data-id: " + card.dataset.id);
    //     if (card.dataset.id == ID) {
    //         bookContainer.removeChild(card);

    //     }
    // });
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






