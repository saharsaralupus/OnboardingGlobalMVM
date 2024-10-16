document.addEventListener('DOMContentLoaded', function() {
    // Obtener el nombre de usuario del parámetro en la URL
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    if(email){
        const userName = email.split('@')[0];
        localStorage.setItem("name", userName);
    }    
    const name = localStorage.getItem('name');
    document.getElementById('name').textContent = `Hola ${name}`;


    // Manejo del menú de usuario
    const userProfileIcon = document.getElementById('userProfileIcon');
    const userMenu = document.getElementById('userMenu');
    const logoutButton = document.getElementById('logoutButton');

    userProfileIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        userMenu.style.display = userMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(e) {
        if (e.target !== userProfileIcon && e.target !== userMenu) {
            userMenu.style.display = 'none';
        }
    });

    logoutButton.addEventListener('click', function(e) {
        e.preventDefault();
        // Aquí iría la lógica para cerrar sesión
        alert('Cerrando sesión...');
        window.location.href = "https://onboarding-ashen.vercel.app/"; // Redirige al login
    });
});

//"{%url 'login'%}"