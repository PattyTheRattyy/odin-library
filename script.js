

myLibrary = [];

const newBook = new Book("hey", "patrick", "true");
const newBook2 = new Book("hey", "patrick", "true");
const newBook3 = new Book("hey", "patrick", "true");
myLibrary.push(newBook);
myLibrary.push(newBook2);
myLibrary.push(newBook3);

function Book(title, author, beenRead) {
    this.title = title;
    this.author = author;
    this.beenRead = beenRead;
    this.ID = crypto.randomUUID()
}

function addBookToLibrary(title, author, beenRead) {
    book = new Book(title, author, beenRead);
    
    myLibrary.push(book)

    displayBooks();


}

const main = document.querySelector(".main");
function displayBooks() {
    myLibrary.forEach(book => {

        
        createBookCard(book)
        
    });

}


function createBookCard(book) {
    const card = document.createElement("div");
    card.classList.add("card")

    const title = document.createElement("p");
    title.textContent = book.title;
    const author = document.createElement("p");
    author.textContent = book.author;
    const beenRead = document.createElement("p");
    beenRead.textContent = book.beenRead;


    main.appendChild(card);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(beenRead);
}


displayBooks();






