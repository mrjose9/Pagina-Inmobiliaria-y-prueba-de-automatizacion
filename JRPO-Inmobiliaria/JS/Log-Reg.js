const $btnSignIn = document.querySelector('.sign-in-btn');
const $btnSignUp = document.querySelector('.sign-up-btn');
const $signUp = document.querySelector('.sign-up');
const $signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    const loginForm = document.getElementById("login-form");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const rusername = document.getElementById("username").value;
        const remail = document.getElementById("email").value;
        const rpassword = document.getElementById("password").value;

        // Validar campos vacíos
        if (rusername.trim() === "" || remail.trim() === "" || rpassword.trim() === "") {
            alert("Hay campos vacios, por favor completarlos.");
            return;
        }

        // Guardar datos en el almacenamiento local
        const userData = {
            username: rusername,
            email: remail,
            password: rpassword,
        };

        localStorage.setItem("user_data", JSON.stringify(userData));
        if ($btnSignUp) {
            $signIn.classList.toggle('active');
            $signUp.classList.toggle('active');
        }
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const lemail = document.getElementById("login-email").value;
        const lpassword = document.getElementById("login-password").value;

        // Verificar si los datos ingresados coinciden con los guardados en el almacenamiento local
        const savedUserData = localStorage.getItem("user_data");
        const adminUser = {
            username: "admin",
            email: "admin@example.com",
            password: "1234"
        };

        if (savedUserData) {
            const userData = JSON.parse(savedUserData);
            if (
                (userData.email === lemail && userData.password === lpassword) ||
                (adminUser.email === lemail && adminUser.password === lpassword)
            ) {
                // Redirigir al usuario a la página principal después del inicio de sesión exitoso
                window.location.href = "index.html"; // Cambia "index.html" por la ruta correcta de tu página principal
            } else {
                alert("Los campos están vacíos o incorrectos");
            }
        } else {
            
        }
    });
});
