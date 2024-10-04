export const formValidation = () => {
    const form = document.getElementById('form');
    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const allInputs = [...document.getElementsByTagName('input')];
    
    // Añadir eventos a los inputs
    allInputs.forEach(input => {
        input.addEventListener('input', function () {
            clearError(input); // Limpia el error cuando el usuario empieza a corregir
        });
    });

    // Función de validación al enviar el formulario
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Limpiar mensajes de error
        clearAllErrors();

        let isValid = true;

        // Validación del nombre
        if (!validateText(nameInput, 2, 50)) {
            showError(nameInput, 'El nombre debería contener entre 2 y 50 caracteres y contener solo letras.');
            isValid = false;
        }

        // Validación del apellido
        if (!validateText(surnameInput, 2, 50)) {
            showError(surnameInput, 'El apellido debería contener entre 2 y 50 caracteres y contener solo letras.');
            isValid = false;
        }

        // Validación del email
        if (!validateEmail(emailInput)) {
            showError(emailInput, 'Por favor, ingresa una dirección de correo electrónico valida.');
            isValid = false;
        }

        // Validación del asunto
        if (!validateMessage(subjectInput, 2, 100)) {
            showError(subjectInput, 'El asunto debería contener entre 2 y 100 caracteres.');
            isValid = false;
        }

        // Validación del mensaje
        if (!validateMessage(messageInput, 10, 500)) {
            showError(messageInput, 'El mensaje debería contener entre 10 y 500 caracteres.');
            isValid = false;
        }


        if (isValid) {
            alert('Tu consulta fue enviada con satisfactoriamente.');
            // Vacía todos los inputs al "enviar" los datos
            allInputs.forEach(input => input.value = ''); 
        }
    });



}

function validateText(input, minLength, maxLength) {
    const value = input.value.trim();
    const pattern = /^[A-Za-z\s]+$/;
    return value.length >= minLength && value.length <= maxLength && pattern.test(value);
}

function validateMessage(input, minLength, maxLength) {
    const value = input.value.trim();
    return value.length >= minLength && value.length <= maxLength;
}


function validateEmail(input) {
    const value = input.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
}

// Mostrar error con clases de bootstrap
function showError(input, message) {
    // Esto solo agrega mensaje de error solo si no hay uno. Es decir, es para que no se acumulen
    if (!input.parentElement.querySelector('.text-danger')) {
        const errorElement = document.createElement('div');
        errorElement.className = 'text-danger';
        errorElement.innerText = message;
        input.parentElement.appendChild(errorElement);
        input.classList.add('is-invalid');
    }
}

function clearError(input) {
    const errorElement = input.parentElement.querySelector('.text-danger');
    if (errorElement) {
        errorElement.remove();
        input.classList.remove('is-invalid');
    }
}

function clearAllErrors() {
    const errors = document.querySelectorAll('.text-danger');
    errors.forEach(error => error.remove());
    const inputs = document.querySelectorAll('.is-invalid');
    inputs.forEach(input => input.classList.remove('is-invalid'));
}