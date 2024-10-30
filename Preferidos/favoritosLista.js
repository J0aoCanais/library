// Função para carregar os favoritos do localStorage por usuário
function loadFavorites(userEmail) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    return favorites[userEmail] || []; // Retorna a lista de favoritos do usuário, se existir
}

// Função para exibir a lista de favoritos
function displayFavoriteBooks() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const userEmail = loggedInUser ? loggedInUser.email : null; // Obtém o email do usuário logado

    const favoritesList = document.getElementById('favorites-list');

    // Verifica se há um usuário logado


    const favoriteBooks = loadFavorites(userEmail);

    // Verifica se há livros favoritos
    if (favoriteBooks.length === 0) {
        favoritesList.innerHTML = `<p class="texto">Você ainda não adicionou livros aos favoritos.</p>`;
        return;
    }

    // Limpa a lista antes de adicionar os favoritos
    favoritesList.innerHTML = '';

    favoriteBooks.forEach((book) => {
        // Cria o item da lista
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
            <p><strong>Gêneros:</strong> ${book.genres}</p>
        `;

        // Anexa as divs de capa e informações ao item da lista
        li.appendChild(coverDiv);
        li.appendChild(infoDiv);
        favoritesList.appendChild(li);
    });
}

// Carrega e exibe os livros favoritos ao carregar a página
window.onload = displayFavoriteBooks;
