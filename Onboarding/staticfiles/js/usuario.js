let users = [
    { nombre: 'Juan', apellidos: 'Gutierrez', correo: 'juan@gmail.com', rol: 'APRENDIZ', fechaInicio: '2024-03-19', telefono: '3128764523', estado: false },
    { nombre: 'Jesus', apellidos: 'Tamayo', correo: 'jesus@gmail.com', rol: 'APRENDIZ', fechaInicio: '2024-04-13', telefono: '3607654234', estado: false },
    { nombre: 'Juliana', apellidos: 'Perdomo', correo: 'juliana123@gmail.com', rol: 'APRENDIZ', fechaInicio: '2024-05-19', telefono: '3159876543', estado: false },
    { nombre: 'Dilan', apellidos: 'Osorio', correo: 'Dilan@gmail.com', rol: 'APRENDIZ', fechaInicio: '2024-06-30', telefono: '3159876543', estado: true },
    { nombre: 'Sara', apellidos: 'Cardona', correo: 'saracardona@gmail.com', rol: 'APRENDIZ', fechaInicio: '2024-08-20', telefono: '3159876543', estado: false },
    { nombre: 'Veronica', apellidos: 'Henriquez', correo: 'veronica@gmail.com', rol: 'APRENDIZ', fechaInicio: '2024-06-25', telefono: '3159876543', estado: true },
    { nombre: 'Santiago', apellidos: 'Palma', correo: 'palmasanti@gmail.com', rol: 'APRENDIZ', fechaInicio: '2024-09-17', telefono: '3159876543', estado: true },
    { nombre: 'Andrés', apellidos: 'Felipe', correo: 'andresfelipe@gmail.com', rol: 'APRENDIZ', fechaInicio: '2024-07-15', telefono: '3112345678', estado: false },
    { nombre: 'Laura', apellidos: 'Velasquez', correo: 'lauravelasquez@gmail.com', rol: 'APRENDIZ', fechaInicio: '2024-08-05', telefono: '3009876543', estado: true },
    { nombre: 'Daniel', apellidos: 'Gomez', correo: 'danielgomez@gmail.com', rol: 'APRENDIZ', fechaInicio: '2024-09-22', telefono: '3187654321', estado: false },
    { nombre: 'Valentina', apellidos: 'Suarez', correo: 'valentina@gmail.com', rol: 'APRENDIZ', fechaInicio: '2024-10-10', telefono: '3201234567', estado: true },
    { nombre: 'Nicolas', apellidos: 'Rojas', correo: 'nicolasrojas@gmail.com', rol: 'APRENDIZ', fechaInicio: '2024-11-05', telefono: '3198765432', estado: false },
    { nombre: 'Sofia', apellidos: 'Martinez', correo: 'sofiamartinez@gmail.com', rol: 'APRENDIZ', fechaInicio: '2024-12-20', telefono: '3215678901', estado: true },
    { nombre: 'Camila', apellidos: 'Perez', correo: 'camila@gmail.com', rol: 'APRENDIZ', fechaInicio: '2024-01-15', telefono: '3104567890', estado: false },
    { nombre: 'Sebastian', apellidos: 'Ramirez', correo: 'sebastianramirez@gmail.com', rol: 'APRENDIZ', fechaInicio: '2024-02-28', telefono: '3173456789', estado: true },
    { nombre: 'Mariana', apellidos: 'Jimenez', correo: 'marianajimenez@gmail.com', rol: 'APRENDIZ', fechaInicio: '2024-03-12', telefono: '3162345678', estado: false },
    { nombre: 'Mateo', apellidos: 'Lopez', correo: 'mateolopez@gmail.com', rol: 'APRENDIZ', fechaInicio: '2024-04-25', telefono: '3151234567', estado: true },
    { nombre: 'Isabella', apellidos: 'Gomez', correo: 'isabella@gmail.com', rol: 'APRENDIZ', fechaInicio: '2024-05-18', telefono: '3140123456', estado: false },
    { nombre: 'Samuel', apellidos: 'Rodriguez', correo: 'samuelrodriguez@gmail.com', rol: 'APRENDIZ', fechaInicio: '2024-06-10', telefono: '3139012345', estado: true }
];
 
const USERS_PER_PAGE = 5;
let currentPage = 1;
 
function renderUsers(usersToRender, page) {
    const tableBody = document.getElementById('userTableBody');
    tableBody.innerHTML = '';
    const start = (page - 1) * USERS_PER_PAGE;
    const end = start + USERS_PER_PAGE;
    const paginatedUsers = usersToRender.slice(start, end);
 
    paginatedUsers.forEach((user, index) => {
        const row = `
            <tr>
                <td>${user.nombre}</td>
                <td>${user.apellidos}</td>
                <td>${user.correo}</td>
                <td>${user.rol}</td>
                <td>${formatDate(user.fechaInicio)}</td>
                <td>${user.telefono}</td>
                <td><span class="${user.estado ? 'status-active' : 'status-inactive'}"></span></td>
                <td>
                    <button class="action-btn" onclick="openEditModal(${start + index})">✏️</button>
                    <button class="action-btn" onclick="openCalendarModal(${start + index})">📅</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
 
    renderPagination(usersToRender.length, page);
}
 
function renderPagination(totalUsers, currentPage) {
    const totalPages = Math.ceil(totalUsers / USERS_PER_PAGE);
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';
 
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.classList.add('page-btn');
        if (i === currentPage) {
            button.classList.add('active');
        }
        button.onclick = () => {
            currentPage = i;
            renderUsers(users, currentPage);
        };
        paginationContainer.appendChild(button);
    }
}
 
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
}
 
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}
 
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
 
let currentUserIndex = null;
 
function openEditModal(index) {
    currentUserIndex = index;
    const user = users[index];
    document.getElementById('editNombre').value = user.nombre;
    document.getElementById('editApellidos').value = user.apellidos;
    document.getElementById('editCorreo').value = user.correo;
    document.getElementById('editRol').value = user.rol;
    document.getElementById('editFechaInicio').value = user.fechaInicio;
    document.getElementById('editTelefono').value = user.telefono;
    document.getElementById('editEstado').value = user.estado.toString();
    openModal('editModal');
}
 
function openCalendarModal(index) {
    currentUserIndex = index;
    openModal('calendarModal');
}
 
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredUsers = users.filter(user =>
        Object.values(user).some(value =>
            value.toString().toLowerCase().includes(searchTerm)
        )
    );
    currentPage = 1;
    renderUsers(filteredUsers, currentPage);
});
 
document.getElementById('addUserForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const newUser = {
        nombre: this.elements[0].value,
        apellidos: this.elements[1].value,
        correo: this.elements[2].value,
        rol: this.elements[3].value,
        fechaInicio: this.elements[4].value,
        telefono: this.elements[5].value,
        estado: this.elements[6].value === 'true'
    };
    users.push(newUser);
    closeModal('addModal');
    currentPage = Math.ceil(users.length / USERS_PER_PAGE);
    renderUsers(users, currentPage);
    this.reset();
});
 
document.getElementById('editUserForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const updatedUser = {
        nombre: document.getElementById('editNombre').value,
        apellidos: document.getElementById('editApellidos').value,
        correo: document.getElementById('editCorreo').value,
        rol: document.getElementById('editRol').value,
        fechaInicio: document.getElementById('editFechaInicio').value,
        telefono: document.getElementById('editTelefono').value,
        estado: document.getElementById('editEstado').value === 'true'
    };
    users[currentUserIndex] = updatedUser;
    renderUsers(users, currentPage);
    closeModal('editModal');
});
 
// document.getElementById('taskForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const newTask = {
//         title: document.getElementById('taskTitle').value,
//         date: document.getElementById('taskDate').value,
//         description: document.getElementById('taskDescription').value
//     };
//     console.log('Nueva tarea asignada:', newTask);
//     alert('Tarea asignada con éxito');
//     closeModal('calendarModal');
// });
 
// Cerrar modales si se hace clic fuera de ellos
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}
 
renderUsers(users, currentPage);