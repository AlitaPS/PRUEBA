document.getElementById('returnButton').addEventListener('click', function() {
    window.location.href = 'planos.html';
});

    var expandido = false; /* Estado inicial del div */

    function expandirDiv() {
        var div = document.getElementById('miDiv');
        var imagenes = div.querySelector('.container-div-inferior-imagenes');
        var divsOcultos = div.querySelectorAll('.oculto:not(.container-div-inferior-imagenes)');

        if (!expandido) {
            /* Si no está expandido, expandir hacia arriba */
            div.style.height = '500px'; /* Nueva altura al expandir */
            div.style.top = '-55%'; /* Mover hacia arriba */

            /* Ocultar las imágenes al expandir */
            imagenes.style.opacity = '0';
            imagenes.style.pointerEvents = 'none';
            
            /* Mostrar los demás divs ocultos */
            divsOcultos.forEach(function(divOculto) {
                divOculto.style.display = 'flex';
            });
            
            expandido = true;
        } else {
            /* Si está expandido, contraer */
            div.style.height = '10%'; /* Altura inicial al contraer */
            div.style.top = '0'; /* Volver a la posición original */
            /* Mostrar las imágenes al contraer */
            imagenes.style.opacity = '1';
            imagenes.style.pointerEvents = 'auto';

            /* Ocultar los demás divs al contraer */
            divsOcultos.forEach(function(divOculto) {
                divOculto.style.display = 'none';
            });
            
            expandido = false;
        }
    }



    const carousel = document.querySelector(".carousel"),
    firstImg = carousel.querySelectorAll("img")[0],
    arrowIcons = document.querySelectorAll(".wrapper i");

    let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

    const showHideIcons = () => {
        // showing and hiding prev/next icon according to carousel scroll left value
        let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
        arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
        arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
    }

    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
            // if clicked icon is left, reduce width value from the carousel scroll left else add to it
            carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
            setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
        });
    });

    const autoSlide = () => {
        // if there is no image left to scroll then return from here
        if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

        positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
        let firstImgWidth = firstImg.clientWidth + 14;
        // getting difference value that needs to add or reduce from carousel left to take middle img center
        let valDifference = firstImgWidth - positionDiff;

        if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
            return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
        }
        // if user is scrolling to the left
        carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }

    const dragStart = (e) => {
        // updatating global variables value on mouse down event
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        // scrolling images/carousel to left according to mouse pointer
        if(!isDragStart) return;
        e.preventDefault();
        isDragging = true;
        carousel.classList.add("dragging");
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
        showHideIcons();
    }

    const dragStop = () => {
        isDragStart = false;
        carousel.classList.remove("dragging");

        if(!isDragging) return;
        isDragging = false;
        autoSlide();
    }

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);

    document.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", dragging);

    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("touchend", dragStop);



    // Obtener el carrusel y las imágenes dentro de él
    const imagesCarousel = carousel.querySelectorAll("img");

    // Obtener el modal y la imagen dentro de él
    const modal = document.getElementById("myModal-3");
    const imgModal = document.getElementById("imgModal-3");

    // Recorrer cada imagen y agregar un evento de clic
    imagesCarousel.forEach(img => {
    img.onclick = function() {
        imgModal.src = this.src; // Establecer la imagen seleccionada en el modal
        modal.style.display = "block"; // Mostrar el modal con la imagen seleccionada
    }
    });

    document.addEventListener("DOMContentLoaded", function() {
        // Tu código JavaScript aquí
        const modal = document.getElementById("myModal-3");
        const span = document.querySelector("#myModal-3 .close");
    
        span.onclick = function() {
        modal.style.display = "none";
        }
    });

    // Cerrar el modal al hacer clic fuera de la imagen
    window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
    }


    let carruselExpandido = false;

    function toggleCarousel() {
      const carousel = document.querySelector(".carrusel");
    
      if (!carruselExpandido) {
        carousel.style.height = '300px'; /* Altura más grande al expandir */
        carruselExpandido = true;
      } else {
        carousel.style.height = '100px'; /* Altura más pequeña al contraer */
        carruselExpandido = false;
      }
    }

    
    var expandido = false; /* Estado inicial del div */





    