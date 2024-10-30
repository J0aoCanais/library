document.addEventListener("DOMContentLoaded", function () {
    const favoritesContainer = document.getElementById("favorites-container");
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
        // Exibe a mensagem e os botões caso o usuário não esteja logado
        favoritesContainer.innerHTML = `
            <p class="texto">
                Caso queira ver os seus livros favoritos, inicie sessão ou crie uma conta.
            </p>
            <div class="text-end">
                <a href="../Login/login.html" class="btn-outline-primary">Log in</a>
                <a href="../Signup/sign-up.html" class="btn-primary">Sign up</a>
            </div>
        `;
    } else {
        // Se o usuário estiver logado, exibe a lista de favoritos (exemplo com mensagem)
        favoritesContainer.innerHTML = `
            <h1>Livros Favoritos:</h1>
            <ul class="favorites-list">
                <!-- Aqui você pode preencher a lista com JavaScript para exibir os livros favoritos do usuário -->
            </ul>
        `;
    }
});
