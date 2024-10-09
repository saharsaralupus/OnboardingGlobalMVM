const users = [
    { id: 1, nombre: 'Juan', apellidos: 'Gutierrez', correo: 'juan@gmail.com', rol: 'APRENDIZ', fechaInicio: '19/03/2024', telefono: '3128764523', estado: false },
    { id: 2, nombre: 'Jesus', apellidos: 'Tamayo', correo: 'jesus@gmail.com', rol: 'APRENDIZ', fechaInicio: '13/04/2024', telefono: '3607654234', estado: false },
    { id: 3, nombre: 'Juliana', apellidos: 'Perdomo', correo: 'juliana123@gmail.com', rol: 'APRENDIZ', fechaInicio: '19/05/2024', telefono: '3159876543', estado: false },
    { id: 4, nombre: 'Dilan', apellidos: 'Osorio', correo: 'Dilan@gmail.com', rol: 'APRENDIZ', fechaInicio: '30/06/2024', telefono: '3159876543', estado: true },
    { id: 5, nombre: 'Sara', apellidos: 'Cardona', correo: 'saracardona@gmail.com', rol: 'APRENDIZ', fechaInicio: '20/08/2024', telefono: '3159876543', estado: false },
    { id: 6, nombre: 'Veronica', apellidos: 'Henriquez', correo: 'veronica@gmail.com', rol: 'APRENDIZ', fechaInicio: '25/06/2024', telefono: '3159876543', estado: true },
    { id: 7, nombre: 'Santiago', apellidos: 'Palma', correo: 'palmasanti@gmail.com', rol: 'APRENDIZ', fechaInicio: '17/09/2024', telefono: '3159876543', estado: true },
    { id: 8, nombre: 'Sebastian', apellidos: 'Camacho', correo: 'camacho@gmail.com', rol: 'APRENDIZ', fechaInicio: '03/08/2024', telefono: '3159876543', estado: true },
];
 
let currentPage = 1;
const usersPerPage = 7;
 
function renderUsers(usersToRender) {
    const tableBody = document.getElementById('userTableBody');
    tableBody.innerHTML = '';
 
    usersToRender.forEach(user => {
        const row = document.createElement('tr');
        row.className = 'bg-white';
        row.innerHTML = `
            <td class="p-2">${user.nombre}</td>
            <td class="p-2">${user.apellidos}</td>
            <td class="p-2">${user.correo}</td>
            <td class="p-2">${user.rol}</td>
            <td class="p-2">${user.fechaInicio}</td>
            <td class="p-2">${user.telefono}</td>
            <td class="p-2">
                <button onclick="toggleUserStatus(${user.id})" class="w-6 h-6 rounded-full ${user.estado ? 'bg-green-500' : 'bg-red-500'}"></button>
            </td>
            <td class="p-2">
                <button class="p-1 bg-blue-100 rounded mr-1">✏️</button>
                <button class="p-1 bg-blue-100 rounded">📅</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}
 
function renderPagination(totalUsers) {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';
 
    const totalPages = Math.ceil(totalUsers / usersPerPage);
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = `px-3 py-1 rounded-full mx-1 ${currentPage === i ? 'bg-gray-300' : 'bg-gray-200'}`;
        button.onclick = () => {
            currentPage = i;
            updateUserList();
        };
        paginationContainer.appendChild(button);
    }
}
 
function toggleUserStatus(userId) {
    const user = users.find(u => u.id === userId);
    if (user) {
        user.estado = !user.estado;
        updateUserList();
    }
}
 
function updateUserList() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredUsers = users.filter(user =>
        Object.values(user).some(value =>
            value.toString().toLowerCase().includes(searchTerm)
        )
    );
 
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const usersToRender = filteredUsers.slice(startIndex, endIndex);
 
    renderUsers(usersToRender);
    renderPagination(filteredUsers.length);
}
 
document.getElementById('searchInput').addEventListener('input', () => {
    currentPage = 1;
    updateUserList();
});
 
// Initial render
updateUserList();