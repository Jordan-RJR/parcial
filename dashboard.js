// Array de viajes
const trips = [
    { 
        id: 1, 
        origin: 'Madrid', 
        destination: 'París', 
        date: '10/05/2024', 
        duration: '2 horas', 
        driver: 'Juan Pérez' 
    },
    { 
        id: 2, 
        origin: 'Barcelona', 
        destination: 'Roma', 
        date: '15/06/2024', 
        duration: '3 horas', 
        driver: 'Laura Martínez' 
    },
    { 
        id: 3, 
        origin: 'Londres', 
        destination: 'Londres', 
        date: '20/07/2024', 
        duration: '2 horas 52 minutos', 
        driver: 'Carlos Sánchez' 
    },
    { 
        id: 4, 
        origin: 'Nueva York', 
        destination: 'Nueva York', 
        date: '25/08/2024', 
        duration: '3 horas', 
        driver: 'Elena Rodríguez' 
    },
    { 
        id: 5, 
        origin: 'Tokio', 
        destination: 'Tokio', 
        date: '30/09/2024', 
        duration: '7 horas', 
        driver: 'Antonio Gómez' 
    },
    { 
        id: 6, 
        origin: 'Sidney', 
        destination: 'Sidney', 
        date: '05/10/2024', 
        duration: '14 horas', 
        driver: 'Isabel Fernández' 
    },
    { 
        id: 7, 
        origin: 'Berlín', 
        destination: 'Barcelona', 
        date: '10/11/2024', 
        duration: '12 horas', 
        driver: 'Miguel López' 
    },
    { 
        id: 8, 
        origin: 'Ámsterdam', 
        destination: 'Berlín', 
        date: '15/12/2024', 
        duration: '8 horas', 
        driver: 'Sara Pérez' 
    },
    { 
        id: 9, 
        origin: 'Praga', 
        destination: 'Praga', 
        date: '20/01/2025', 
        duration: '4 horas', 
        driver: 'Daniel García' 
    },
    { 
        id: 10, 
        origin: 'Roma', 
        destination: 'Ámsterdam', 
        date: '25/02/2025', 
        duration: '5 horas', 
        driver: 'Lucía Martínez' 
    }
];

// Verificar inicio de sesión
document.addEventListener("DOMContentLoaded", function() {
    const listsDiv = document.getElementById("lists");
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
        listsDiv.style.display = "block"; // Mostrar las listas si el usuario ha iniciado sesión
    } else {
        window.location.href = "login.html"; // Redireccionar al login si no ha iniciado sesión
    }
});

// Mostrar los últimos 4 viajes
document.addEventListener("DOMContentLoaded", function() {
    const lastTrips = trips.slice(-4);
    const tripsList = document.getElementById("trips-list");
    
    lastTrips.forEach(trip => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>Origen:</strong> ${trip.origin}<br>
            <strong>Destino:</strong> ${trip.destination}<br>
            <strong>Fecha:</strong> ${trip.date}<br>
            <strong>Duración:</strong> ${trip.duration}<br>
            <strong>Conductor:</strong> ${trip.driver}
        `;
        tripsList.appendChild(listItem);
    });
});

// Mostrar todos los viajes al hacer clic en "Ver más"
document.addEventListener("DOMContentLoaded", function() {
    const showMoreBtn = document.getElementById("show-more-btn");
    
    showMoreBtn.addEventListener("click", function() {
        const tripsList = document.getElementById("trips-list");
        tripsList.innerHTML = ''; // Limpiar la lista

        trips.forEach(trip => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <strong>Origen:</strong> ${trip.origin}<br>
                <strong>Destino:</strong> ${trip.destination}<br>
                <strong>Fecha:</strong> ${trip.date}<br>
                <strong>Duración:</strong> ${trip.duration}<br>
                <strong>Conductor:</strong> ${trip.driver}
            `;
            tripsList.appendChild(listItem);
        });

        showMoreBtn.style.display = 'none'; // Ocultar el botón después de mostrar todos los viajes
    });
});

// Cerrar sesión
document.addEventListener("DOMContentLoaded", function() {
    const logoutBtn = document.getElementById("logout-btn");

    logoutBtn.addEventListener("click", function() {
        localStorage.removeItem("loggedInUser");
        window.location.href = "index.html";
    });
});
