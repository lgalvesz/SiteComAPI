const pageUsers = []

function displayUsers() {
    const userList = document.getElementById("user-list");

    userList.innerHTML = "";

    pageUsers.forEach(user => {
        const listItem = document.createElement("li");
        listItem.setAttribute("class", "card");

        listItem.innerHTML = `
        <div class="space"><strong>Nome:</strong> ${user.name}</div>
        <div class="space"><strong>Usuário:</strong> ${user.username}</div>
        <div class="space"><strong>Email:</strong> ${user.email}</div>
        <div class="space"><strong>Telefone:</strong> ${user.phone || 'N/A'}</div>
        <div class="space"><strong>Site:</strong> ${user.website || 'N/A'}</div>
        <button onclick="removeUser(${user.id})" class="remove-btn">
            <iclass="bi bi-trash"></i>
        </button>`;

        userList.appendChild(listItem);
    });
}
    
function fetchUsers() {}
    
function addUser() {}

function removeUser() {}

document.addEventListener("DOMContentLoaded", function() {
    //Cria lista de usuários a partir da chamada da API
    fetchUsers();
});