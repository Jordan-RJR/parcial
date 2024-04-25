document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "usuario" && password === "12345") {
            localStorage.setItem("loggedInUser", "user");
            window.location.href = "dashboard.html";
        } else if (username === "conductor" && password === "123456") {
            localStorage.setItem("loggedInUser", "driver");
            window.location.href = "dashboard-conductor.html";
        } else {
            alert("Nombre de usuario o contraseña incorrectos.");
        }
    });
});
