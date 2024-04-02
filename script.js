let carrito = [];

// Lista de usuarios registrados (simulada)
let usuariosRegistrados = [];

function agregarAlCarrito(btn) {
    let item = btn.parentElement;
    let nombre = item.querySelector('h2').innerText;
    let precio = parseFloat(item.getAttribute('data-precio'));
    carrito.push({ nombre, precio });
    actualizarCarrito();
    mostrarCarrito();
}

function mostrarCarrito() {
    let carritoOverlay = document.getElementById('carrito-overlay');
    carritoOverlay.style.display = 'block';
}

function cerrarCarrito() {
    let carritoOverlay = document.getElementById('carrito-overlay');
    carritoOverlay.style.display = 'none';
}

function actualizarCarrito() {
    let carritoLista = document.getElementById('carrito-lista');
    let total = 0;
    carritoLista.innerHTML = '';
    carrito.forEach(item => {
        total += item.precio;
        carritoLista.innerHTML += `<li>${item.nombre} - ${item.precio} € <button onclick="eliminarDelCarrito('${item.nombre}')">Eliminar</button></li>`;
    });
    document.getElementById('total').innerText = total;
}

function eliminarDelCarrito(nombre) {
    carrito = carrito.filter(item => item.nombre !== nombre);
    actualizarCarrito();
}

function realizarCompra(metodo) {
    alert(`Pagar con ${metodo}`);
    // Aquí podrías agregar la lógica para procesar el pago según el método seleccionado
}

function mostrarFormulario() {
    let formularioOverlay = document.getElementById('formulario-overlay');
    formularioOverlay.style.display = 'block';
}

function cerrarFormulario() {
    let formularioOverlay = document.getElementById('formulario-overlay');
    formularioOverlay.style.display = 'none';
}

document.getElementById('formulario-pago').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí podrías agregar la lógica para procesar el pago con la información del formulario
    alert('Pago realizado con éxito');
    cerrarFormulario();
});

// Función para registrar un nuevo usuario
function registrarUsuario() {
    let nuevoUsuario = {
        usuario: document.getElementById('nuevo-usuario').value,
        contrasena: document.getElementById('nueva-contrasena').value
    };
    usuariosRegistrados.push(nuevoUsuario);
    alert('¡Usuario registrado con éxito!');
    cerrarRegistro();
}

// Función para iniciar sesión
function iniciarSesion() {
    var usuario = document.getElementById('usuario').value;
    var contrasena = document.getElementById('contrasena').value;

    // Comprobar si el usuario existe y las credenciales son correctas
    let usuarioEncontrado = usuariosRegistrados.find(u => u.usuario === usuario && u.contrasena === contrasena);
    if (usuarioEncontrado) {
        alert('Inicio de sesión exitoso');
        // Aquí puedes redirigir al usuario a la página de inicio o realizar otras acciones
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
}

// Función para mostrar el formulario de inicio de sesión
function openLogin() {
    var loginOverlay = document.getElementById('login-overlay');
    loginOverlay.style.display = 'block';
}

// Función para cerrar el formulario de inicio de sesión
function cerrarLogin() {
    var loginOverlay = document.getElementById('login-overlay');
    loginOverlay.style.display = 'none';
}

// Función para mostrar el formulario de registro
function openRegistro() {
    var registroOverlay = document.getElementById('registro-overlay');
    registroOverlay.style.display = 'block';
}

// Función para cerrar el formulario de registro
function cerrarRegistro() {
    var registroOverlay = document.getElementById('registro-overlay');
    registroOverlay.style.display = 'none';
}

// Menu desplegable
function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0px';
    } else {
        sidebar.style.left = '-250px';
    }
}

// Función para cerrar el menú
function cerrarMenu() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.left = '-250px';
}

// Evento de clic en el documento
document.addEventListener('click', function(event) {
    var sidebar = document.getElementById('sidebar');
    var menuBtn = document.querySelector('.menu-btn');
    if (event.target !== sidebar && event.target !== menuBtn && !sidebar.contains(event.target)) {
        cerrarMenu(); // Cerrar el menú si se hizo clic fuera de él
    }
});
