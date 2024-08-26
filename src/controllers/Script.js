document.getElementById('encrypt-button').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    if (validateText(inputText)) {
        document.getElementById('output-text').value = encryptText(inputText);
    }
});

document.getElementById('decrypt-button').addEventListener('click', function() {
    let inputText = document.getElementById('input-text').value;
    if (validateText(inputText)) {
        document.getElementById('output-text').value = decryptText(inputText);
    }
});

document.getElementById('copy-button').addEventListener('click', function() {
    let outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
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