document.getElementById('encrypt-button').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value.trim();
    
    if (inputText === "") {
        Swal.fire({
            icon: 'warning',
            title: 'No hay texto para encriptar',
            html: '<span style="color: #FF5733; font-size: 1rem; letter-spacing: 1px;">Por favor, ingrese un mensaje antes de encriptar.</span>',
            confirmButtonText: 'Entendido',
            background: '#333',
            color: '#fff',
            confirmButtonColor: '#FF0000'
        });
        return;
    }

    if (/[A-Z]/.test(inputText)) {
        Swal.fire({
            icon: 'warning',
            title: 'Usa solo letras minúsculas',
            html: '<span style="color: #FF5733; font-size: 1rem; letter-spacing: 1px;">Las letras mayúsculas no están permitidas. Por favor, use solo letras minúsculas.</span>',
            confirmButtonText: 'Entendido',
            background: '#333',
            color: '#fff',
            confirmButtonColor: '#FF0000'
        });
        return;
    }

    if (validateText(inputText)) {
        document.getElementById('output-text').value = encryptText(inputText);
        document.getElementById('output-placeholder').style.display = 'none';
    }
});

document.getElementById('decrypt-button').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value.trim();
    
    if (inputText === "") {
        Swal.fire({
            icon: 'warning',
            title: 'No hay texto para desencriptar',
            html: '<span style="color: #FF5733; font-size: 1rem; letter-spacing: 1px;">Por favor, ingrese un mensaje antes de desencriptar.</span>',
            confirmButtonText: 'Entendido',
            background: '#333',
            color: '#fff',
            confirmButtonColor: '#FF0000'
        });
        return;
    }

    if (/[A-Z]/.test(inputText)) {
        Swal.fire({
            icon: 'warning',
            title: 'Usa solo letras minúsculas',
            html: '<span style="color: #FF5733; font-size: 1rem; letter-spacing: 1px;">Las letras mayúsculas no están permitidas. Por favor, use solo letras minúsculas.</span>',
            confirmButtonText: 'Entendido',
            background: '#333',
            color: '#fff',
            confirmButtonColor: '#FF0000'
        });
        return;
    }

    if (validateText(inputText)) {
        document.getElementById('output-text').value = decryptText(inputText);
        document.getElementById('output-placeholder').style.display = 'none';
    }
});

document.getElementById('copy-button').addEventListener('click', function() {
    let outputText = document.getElementById('output-text').value.trim();
    if (outputText === "") {
        Swal.fire({
            icon: 'warning',
            title: 'No hay texto para copiar',
            html: '<span style="color: #FF5733; font-size: 1rem; letter-spacing: 1px;">Por favor, encripte o desencripte un mensaje antes de copiar.</span>',
            confirmButtonText: 'Entendido',
            background: '#333',
            color: '#fff',
            confirmButtonColor: '#FF0000'
        });
    } else {
        document.getElementById('output-text').select();
        document.execCommand('copy');
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            html: '<span style="color: #FF5733; font-size: 1rem; letter-spacing: 1px;">Texto copiado al portapapeles</span>',
            showConfirmButton: false,
            timer: 1500,
            background: '#333',
            color: '#fff',
            width: '30rem',
            height: '5rem'
        });
    }
});

document.getElementById('clear-button').addEventListener('click', function() {
    let outputText = document.getElementById('output-text').value.trim();
    if (outputText === "") {
        Swal.fire({
            icon: 'warning',
            title: 'No hay texto para limpiar',
            html: '<span style="color: #FF5733; font-size: 1rem; letter-spacing: 1px;">El área de texto ya está vacía.</span>',
            confirmButtonText: 'Entendido',
            background: '#333',
            color: '#fff',
            confirmButtonColor: '#FF0000'
        });
    } else {
        document.getElementById('output-text').value = '';
        document.getElementById('output-placeholder').style.display = 'block';
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            html: '<span style="color: #FF5733; font-size: 1rem; letter-spacing: 1px;">Texto borrado con éxito</span>',
            showConfirmButton: false,
            timer: 1500,
            background: '#333',
            color: '#fff',
            width: '30rem',
            height: '5rem'
        });
    }
});

function validateText(text) {
    const validationMessage = document.getElementById('validation-message');
    if (/[^a-z\s]/.test(text)) {
        validationMessage.textContent = 'Solo se permiten letras minúsculas y espacios.';
        return false;
    } else {
        validationMessage.textContent = '';
        return true;
    }
}

function restartTypingAnimation() {
    const title = document.getElementById('typewriter-title');
    title.style.animation = 'none';
    title.offsetHeight;
    title.style.animation = 'typing 1.5s steps(40, end) forwards, blink-caret 0.20s step-end infinite';
}

setInterval(restartTypingAnimation, 15000);
