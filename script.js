function encryptText() {
    let text = document.getElementById('inputText').value;
    let encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('resultText').value = encryptedText;
}

function decryptText() {
    let text = document.getElementById('resultText').value;
    let decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('resultText').value = decryptedText;
}

function copyToClipboard() {
    let resultText = document.getElementById('resultText');
    resultText.select();
    resultText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert("Texto copiado: " + resultText.value);
}