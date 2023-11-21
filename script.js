/* FUNCIONES DE JAVASCRIPT DE LA PRIMERA INTERFAZ */
function abrirModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function cerrarModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
    // Limpiar el campo de entrada al cerrar el modal
    document.getElementById('nombreModulo').value = '';
}

function cerrarModalPorClic(event) {
    var modal = document.getElementById('myModal');
    if (event.target === modal) {
        cerrarModal();
    }
}

function detenerPropagacion(event) {
    event.stopPropagation();
}

function crearModuloEnModal() {
    // Obtener el nombre del módulo desde el campo de entrada
    var nombreModulo = document.getElementById('nombreModulo').value;

    if (nombreModulo.trim() === '') {
        alert('Ingrese un nombre para el módulo.');
        return;
    }

    // Crear el nuevo módulo
    var nuevoModulo = document.createElement('div');
    nuevoModulo.className = 'container-modulo-carpeta';

    var enlace = document.createElement('a');
    enlace.href = '#';

    var articulo = document.createElement('article');

    var imgClose = document.createElement('img');
    imgClose.className = 'close';
    imgClose.src = 'img/close-removebg-preview (1).png';
    imgClose.alt = '';

    var imgOpen = document.createElement('img');
    imgOpen.className = 'open';
    imgOpen.src = 'img/open-removebg-preview (4).png';
    imgOpen.alt = '';

    // Añadir las imágenes al artículo
    articulo.appendChild(imgClose);
    articulo.appendChild(imgOpen);

    // Añadir el artículo al enlace
    enlace.appendChild(articulo);

    // Añadir el enlace al nuevo módulo
    nuevoModulo.appendChild(enlace);

    // Añadir el nombre del módulo al nuevo módulo
    var tituloModulo = document.createElement('p');
    tituloModulo.className = 'container-modulo-titulo';
    tituloModulo.textContent = nombreModulo;
    nuevoModulo.appendChild(tituloModulo);

    // Obtener el contenedor de módulos planos
    var contenedorModulosPlano = document.querySelector('.container-modulo-planos');

    // Añadir el nuevo módulo al contenedor de módulos planos
    contenedorModulosPlano.appendChild(nuevoModulo);

    // Cerrar el modal después de crear el módulo
    cerrarModal();
}



/* FIN DE LAS FUNCIONES DE JAVASCRIPT DE LA PRIMERA INTERFAZ */

