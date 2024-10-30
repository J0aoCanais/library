document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting normally

    // Get the input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("As senhas não coincidem!"); // Display an error message if passwords don't match
        return;
    }

    // Create a user object to store
    const user = {
        name: name,
        email: email,
        password: password
    };

    // Check if users are already stored in localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email is already registered
    const userExists = users.some((existingUser) => existingUser.email === email);
    if (userExists) {
        alert("Este e-mail já está registrado!"); // Display an error message if email is already registered
        return;
    }

    // Add the new user to the array
    users.push(user);

    // Save the updated user array back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Cadastro concluído com sucesso!");

    window.location.href = "../Login/login.html";
});
