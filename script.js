let carrito = [];

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
