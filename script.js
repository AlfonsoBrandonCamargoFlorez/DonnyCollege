// script.js

// Manejo del carrusel de imágenes
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images .carousel-slide');
const totalImages = images.length;

function showSlide(index) {
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
}

// Ejecuta las funciones después de que el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    setInterval(() => moveSlide(1), 3000); // Cambia la imagen cada 3 segundos
});
let childCount = 0; // Para llevar el conteo de los niños

// Función para agregar un niño
document.getElementById('add-child-btn').addEventListener('click', function () {
    const childrenContainer = document.getElementById('children-container');

    // Crear el formulario para el niño
    const childForm = document.createElement('div');
    childForm.classList.add('child-form');
    childForm.classList.add('fade');
    childForm.innerHTML = `
        <h4>Estudiante ${childCount + 1}</h4>
        <div class="mb-3">
            <label for="child-name-${childCount}" class="form-label">Nombre del Estudiante</label>
            <input type="text" class="form-control" id="child-name-${childCount}" required>
        </div>
        <div class="mb-3">
            <label for="child-age-${childCount}" class="form-label">Edad</label>
            <select class="form-select" id="child-age-${childCount}" required>
                <option value="3-5">3-5 años</option>
                <option value="6-8">6-8 años</option>
                <option value="9-12">9-12 años</option>
                <option value="13-17">13-17 años</option>
            </select>
        </div>
        <div id="child-services-${childCount}">
            <div class="mb-3">
                <label for="child-service-${childCount}-1" class="form-label">Servicio de Interés</label>
                <select class="form-select" id="child-service-${childCount}-1" required>
                    <option value="ingles">Inglés</option>
                    <option value="matematicas">Matemáticas</option>
                    <option value="lenguaje">Lenguaje</option>
                    <option value="nivelacion">Nivelación</option>
                    <option value="guarderia">Guardería</option>
                </select>
            </div>
        </div>
        <button type="button" class="add-service-btn" onclick="addService(${childCount})">Agregar Servicio</button>
        <button type="button" class="remove-child-btn" onclick="removeChildForm(this)">Eliminar Estudiante</button>
    `;

    // Agregar el nuevo formulario al contenedor
    childrenContainer.appendChild(childForm);

    // Animación de aparición
    setTimeout(() => childForm.classList.remove('fade'), 100);

    // Incrementar el contador de niños
    childCount++;
});

// Función para agregar servicios
function addService(childId) {
    const childServicesContainer = document.getElementById(`child-services-${childId}`);
    const serviceCount = childServicesContainer.querySelectorAll('select').length + 1;

    // Crear un nuevo servicio para el niño
    const newServiceForm = document.createElement('div');
    newServiceForm.classList.add('mb-3');
    newServiceForm.innerHTML = `
        <label for="child-service-${childId}-${serviceCount}" class="form-label">Servicio de Interés</label>
        <select class="form-select" id="child-service-${childId}-${serviceCount}" required>
            <option value="ingles">Inglés</option>
            <option value="matematicas">Matemáticas</option>
            <option value="lenguaje">Lenguaje</option>
            <option value="nivelacion">Nivelación</option>
            <option value="guarderia">Guardería</option>
        </select>
        <button type="button" class="remove-service-btn" onclick="removeService(this)">Eliminar Servicio</button>
    `;

    childServicesContainer.appendChild(newServiceForm);
}

// Función para eliminar un servicio
function removeService(button) {
    const serviceForm = button.closest('.mb-3');
    serviceForm.remove();
}

// Función para eliminar un niño
function removeChildForm(button) {
    const childForm = button.closest('.child-form');
    childForm.remove();
    childCount--;
}

// Enviar el formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Formulario enviado correctamente!");
    // Aquí puedes agregar el código para enviar los datos a tu servidor
});

