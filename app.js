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

const library = new Library();

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', () => {
    library.addBook();
});

