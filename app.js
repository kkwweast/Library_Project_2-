// Book class
class Book {
    constructor(id, title, author, read) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

// Library class
class Library {
    constructor() {
        this.bookCount = 0;
        this.books = [];
    }

    markRead(checkbox, id) {
        this.books.forEach(book => {
            if (book.id === id) {
                book.read = true;
                checkbox.checked = true;
                checkbox.disabled = true;
            }
        });
    }

    addBook() {
        const titleInput = document.getElementById('title').value;
        const authorInput = document.getElementById('author').value;
        const readInput = document.getElementById('read').checked;

        const newBook = new Book(this.bookCount, titleInput, authorInput, readInput);

        const tableBody = document.getElementById('bookTableBody');
        const newRow = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = newBook.title;
        const authorCell = document.createElement('td');
        authorCell.textContent = newBook.author;
        const readCell = document.createElement('td');
        readCell.textContent = newBook.read ? 'Yes' : 'No';

        newRow.appendChild(titleCell);
        newRow.appendChild(authorCell);
        newRow.appendChild(readCell);

        tableBody.appendChild(newRow);

        this.books.push(newBook);
        this.bookCount++;
    }
}

const Library = new Library();

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', () => {
    library.addBook();
});
// Define your Book constructor
function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
  }
  
  // Define your library object
  const Library = {
    bookCount: 0,
    addBook: function (title, author, read) {
      // Create a new Book instance
      const newBook = new Book(title, author, read);
  
      // Create a new table row
      const newRow = document.createElement("tr");
  
      // Create new table cells for title, author, and read properties
      const titleCell = document.createElement("td");
      const authorCell = document.createElement("td");
      const readCell = document.createElement("td");
  
      // Set the content of the table cells
      titleCell.textContent = newBook.title;
      authorCell.textContent = newBook.author;
      readCell.textContent = newBook.read ? "Yes" : "No";
  
      // Append table cells to the row
      newRow.appendChild(titleCell);
      newRow.appendChild(authorCell);
      newRow.appendChild(readCell);
  
      // Select the table body
      const tableBody = document.getElementById("libraryBody");
  
      // Append the new row to the table body
      tableBody.appendChild(newRow);
  
      // Increment library bookCount by one
      this.bookCount++;
    }
  };
  
  // Add event listener to the "Add Book" button
  const addBookBtn = document.getElementById("addBookBtn");
  addBookBtn.addEventListener("click", function () {
    // Get input values from the form
    const titleInput = document.getElementById("title").value;
    const authorInput = document.getElementById("author").value;
    const readCheckbox = document.getElementById("read").value;
    const readValue = readCheckbox.checked;
  
    // Call the library's addBook method with input values
    library.addBook(titleInput, authorInput, readValue);
  });
  
