// eliminar.js
document.addEventListener('DOMContentLoaded', function() {
    const bookSelect = document.getElementById('book-name');

    // Carrega a lista de livros e popula o dropdown
    function populateBookSelect() {
        const books = loadBooks();
        books.forEach((book) => {
            const option = document.createElement('option');
            option.value = book.name; // O valor será o nome do livro
            option.textContent = book.name; // O texto exibido será o nome do livro
            bookSelect.appendChild(option);
        });
    }

    // Função para excluir um livro
    function deleteBook(bookName) {
        const books = loadBooks();
        const updatedBooks = books.filter(book => book.name !== bookName);
        saveBooks(updatedBooks);
    }

    // Evento do formulário de exclusão
    document.getElementById('delete-book-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const bookName = bookSelect.value;
        deleteBook(bookName);
        alert(`O livro "${bookName}" foi eliminado com sucesso.`);
        window.location.reload(); // Recarrega a página para atualizar a lista
    });

    populateBookSelect(); // Preenche o select com livros existentes
});
