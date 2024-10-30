// lista.js
function loadBooks() {
    return JSON.parse(localStorage.getItem('books')) || [];
}

function saveBooks(books) {
    localStorage.setItem('books', JSON.stringify(books));
}

function addBook(book) {
    const books = loadBooks();
    books.push(book);
    saveBooks(books);
}

function clearFilters() {
    document.getElementById('author-filter').value = '';
    document.getElementById('genre-filter').value = '';
    displayBooks(); // Atualiza a lista para exibir todos os livros
}
