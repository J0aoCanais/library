function displayBooks() {
    const books = loadBooks();
    const authorFilter = document.getElementById('author-filter').value.toLowerCase();
    const genreFilter = document.getElementById('genre-filter').value.toLowerCase();
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Limpa a lista

    // Verifica se o usuário está logado
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    // Filtra os livros com base nos valores dos filtros
    const filteredBooks = books.filter(book => {
        const matchesAuthor = book.author.toLowerCase().includes(authorFilter);
        const matchesGenre = book.genres.toLowerCase().includes(genreFilter);
        return matchesAuthor && matchesGenre;
    });

    filteredBooks.forEach((book) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');

        // Div para a capa do livro
        const coverDiv = document.createElement('div');
        coverDiv.classList.add('book-cover');
        coverDiv.innerHTML = `<img src="${book.cover_image_url}" alt="Capa de ${book.name}">`;

        // Div para as informações do livro
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('book-info');
        infoDiv.innerHTML = `
            <p><strong>Nome:</strong> ${book.name}</p>
            <p><strong>Autor:</strong> ${book.author}</p>
            <p><strong>Data de Lançamento:</strong> ${book.release_date}</p>
            <p><strong>Número de Páginas:</strong> ${book.number_of_pages}</p>
            <p><strong>Géneros:</strong> ${book.genres}</p>
        `;

        // Botão "Adicionar aos Favoritos" se o usuário estiver logado
        if (loggedInUser) {
            const favoriteButton = document.createElement('button');
            favoriteButton.classList.add('btn', 'btn-primary', 'add-favorite-button');
            favoriteButton.textContent = "Adicionar aos Favoritos";

            // Evento para adicionar o livro aos favoritos
            favoriteButton.addEventListener('click', () => addToFavorites(book, loggedInUser.email));
            infoDiv.appendChild(favoriteButton);
        }

        // Anexa as divs de capa e informações ao item da lista
        li.appendChild(coverDiv);
        li.appendChild(infoDiv);
        bookList.appendChild(li);
    });
}

// Função para adicionar o livro aos favoritos do usuário logado
function addToFavorites(book, userEmail) {
    // Recupera a lista de favoritos do localStorage por usuário
    let favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    favorites[userEmail] = favorites[userEmail] || [];

    // Verifica se o livro já está nos favoritos
    const isBookFavorited = favorites[userEmail].some(favBook => favBook.name === book.name);

    if (!isBookFavorited) {
        // Adiciona o livro à lista de favoritos do usuário logado
        favorites[userEmail].push(book);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`${book.name} foi adicionado aos seus favoritos!`);
    } else {
        alert(`${book.name} já está nos seus favoritos.`);
    }
}

// Funções para carregar e salvar os livros
function loadBooks() {
    return JSON.parse(localStorage.getItem('books')) || [];
}

// Chama a função ao carregar a página
window.onload = displayBooks;
