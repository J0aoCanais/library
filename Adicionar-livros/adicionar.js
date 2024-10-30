// adicionar.js
document.getElementById('add-book-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Obtém os valores do formulário
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const release_date = document.getElementById('release_date').value;
    const number_of_pages = parseInt(document.getElementById('number_of_pages').value, 10);
    const genres = document.getElementById('genres').value;
    const cover_image_url = document.getElementById('cover_image_url').value;

    // Cria um objeto livro
    const newBook = {
        name,
        author,
        release_date,
        number_of_pages,
        genres,
        cover_image_url
    };

    // Adiciona o livro à lista
    addBook(newBook);

    // Redireciona para a página de listar livros
    window.location.href = '../Listar-livros/listar.html';
});
