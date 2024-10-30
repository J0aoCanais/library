document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`Bem-vindo, ${user.name}!`);
        
        // Salva o nome do usuário e o status de login no localStorage
        localStorage.setItem("loggedInUser", JSON.stringify({ name: user.name }));
        
        // Redireciona para a página principal
        window.location.href = "../Main-page/index.html";
    } else {
        alert("E-mail ou palavra-passe incorretos. Tente novamente.");
    }
});
