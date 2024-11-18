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
            <i class="bi bi-trash"></i>
        </button>`;

        userList.appendChild(listItem);
    });
}
    
function fetchUsers() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    fetch(apiUrl)
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            pageUsers.push(new User(user.id, user.name, user.username, user.email, user.phone, user.website))
        });
        console.log(pageUsers);
        displayUsers();
    }).catch(error => console.log("Erro ao obter dados da API", error));
}
    
function addUser() {
    const addUserForm = document.getElementById("add-user-form");

    const id = pageUsers[pageUsers.length - 1].id + 1;
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const website = document.getElementById("website").value;

    if(name.trim() != "") {
        pageUsers.push(new User(id, name, username, email, phone, website));
        addUserForm.reset();
        displayUsers();
    }
}

function removeUser(userId) {
    console.log("Removendo usuário com ID: ", userId);
    
    const userIndexToRemove = pageUsers.findIndex((user) => user.id === userId);
    pageUsers.splice(userIndexToRemove, 1);
    displayUsers();
}

document.addEventListener("DOMContentLoaded", function() {
    //Cria lista de usuários a partir da chamada da API
    fetchUsers();
});