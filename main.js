document.getElementById('returnindex').addEventListener('click', function() {
    window.location.href = 'index.html';
});

// Obtener el segundo modal
var modal = document.getElementById('miSegundoModal');

// Botón para abrir el modal
var openModalBtn = document.getElementById('openModalBtn');

// Botón de cerrar ('x')
var closeModalBtn = document.querySelector('.cerrar-planos');

// Función para abrir el segundo modal al hacer clic en el botón
openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
});

// Función para cerrar el segundo modal
function cerrarSegundoModal() {
    modal.style.display = 'none';
}

// Cerrar el modal al hacer clic fuera de él (en el área oscura)
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Cerrar el modal al hacer clic en la 'x'
closeModalBtn.addEventListener('click', cerrarSegundoModal);

// Función para obtener la ruta del ícono según la extensión del archivo
function obtenerIconoPorExtension(extension) {
    switch (extension.toLowerCase()) {
        case 'pdf':
            return 'fa-file-pdf'; // Clase para el ícono PDF de Font Awesome
        case 'doc':
        case 'docx':
            return 'fa-file-word'; // Clase para el ícono Word de Font Awesome
        case 'xls':
        case 'xlsx':
            return 'fa-file-excel'; // Clase para el ícono Excel de Font Awesome
        case 'jpg':
        case 'jpeg':
        case 'png':
        case 'gif':
            return 'fa-file-image'; // Clase para el ícono de imagen en Font Awesome
        // Añade más casos según los tipos de archivo que desees manejar...
        default:
            return 'fa-file'; // Icono predeterminado para otros formatos en Font Awesome
    }
}


// Función para aplicar el efecto de desenfoque
function toggleVisibility(event) {
    event.currentTarget.parentNode.querySelector('.container-document-eye').classList.toggle('blurred');
}

// Función para agregar un nuevo módulo
function agregarModulo(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener los valores del formulario
    var titulo = document.getElementById('titulo').value;
    var documento = document.getElementById('documento').files[0]; // Obtener el archivo
    var extension = documento.name.split('.').pop(); // Obtener la extensión del archivo

    // Crear el contenedor principal del módulo
    var nuevoModulo = document.createElement('div');
    nuevoModulo.classList.add('container-documente-modulo');

    // Contenedor para el botón del ojo
    var toggleVisibilityButton = document.createElement('div');
    toggleVisibilityButton.classList.add('toggle-visibility');
    toggleVisibilityButton.addEventListener('click', toggleVisibility); // Añadir evento al botón del ojo
    var iconoOjo = document.createElement('i');
    iconoOjo.classList.add('fas', 'fa-eye');
    toggleVisibilityButton.appendChild(iconoOjo);

    // Contenedor para el ícono del documento
    var containerEye = document.createElement('div');
    containerEye.classList.add('container-document-eye');

    var iconoDocumento = document.createElement('i');
    iconoDocumento.classList.add('fas', obtenerIconoPorExtension(extension), 'fa-8x'); // Agregar la clase específica del ícono de Font Awesome y ajustar el tamaño
    containerEye.appendChild(iconoDocumento);

    // Contenedor para el título
    var containerTitulo = document.createElement('div');
    containerTitulo.classList.add('container-document-titulo');
    var tituloElement = document.createElement('p');
    tituloElement.textContent = titulo;
    containerTitulo.appendChild(tituloElement);

    // Agregar elementos al nuevo módulo
    nuevoModulo.appendChild(toggleVisibilityButton);
    nuevoModulo.appendChild(containerEye);
    nuevoModulo.appendChild(containerTitulo);

    // Agregar el nuevo módulo al contenedor de módulos
    var contenedorModulos = document.getElementById('contenedor-modulos');
    contenedorModulos.appendChild(nuevoModulo);

    // Añadir el evento de desenfoque al nuevo módulo creado
    toggleVisibilityButton.addEventListener('click', toggleVisibility);

    // Cerrar el modal después de agregar el módulo
    cerrarSegundoModal();

    // Limpiar el formulario
    document.getElementById('formModulo').reset();
}

// Escuchar el envío del formulario y llamar a la función agregarModulo
document.getElementById('formModulo').addEventListener('submit', agregarModulo);



