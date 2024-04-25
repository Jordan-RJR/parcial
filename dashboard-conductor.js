const driverInfo = {
    usersAborded: [
        { username: 'user1', times: 5 },
        { username: 'user2', times: 4 },
        { username: 'user3', times: 3 }
    ],
    totalAmount: '$2000'
};

document.addEventListener("DOMContentLoaded", function() {
    const listsDiv = document.getElementById("lists");
    const usersList = document.getElementById("users-list");
    const totalAmount = document.getElementById("total-amount");

    driverInfo.usersAborded.forEach(user => {
        const listItem = document.createElement("li");
        listItem.textContent = `${user.username}: ${user.times} veces`;
        usersList.appendChild(listItem);
    });

    totalAmount.textContent = `Monto total: ${driverInfo.totalAmount}`;

    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser === "driver") {
        listsDiv.style.display = "block";
    } else {
        window.location.href = "index.html";
    }

    const logoutBtn = document.getElementById("logout-btn");

    logoutBtn.addEventListener("click", function() {
        localStorage.removeItem("loggedInUser");
        window.location.href = "index.html";
    });
});
