document.getElementById('criptografar').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const areaSaida = document.getElementById('area-de-saida');
    const textoUm = document.querySelector('.text-one');
    const textoDois = document.querySelector('.text-two');
    const imagemSaida = document.querySelector('.image-saida');

    if (inputText) {
        const encryptedText = btoa(inputText);
        textoUm.style.display = 'none';
        textoDois.style.display = 'block';
        textoDois.textContent = encryptedText;
        imagemSaida.style.display = 'none';
    } else {
        textoUm.style.display = 'block';
        textoDois.style.display = 'none';
        imagemSaida.style.display = 'block';
    }
});


document.getElementById('descriptografar').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const areaSaida = document.getElementById('area-de-saida');
    const textoUm = document.querySelector('.text-one');
    const textoDois = document.querySelector('.text-two');
    const imagemSaida = document.querySelector('.image-saida');

    if (inputText) {
        try {
            const decryptedText = atob(inputText);
            textoUm.style.display = 'none';
            textoDois.style.display = 'block';
            textoDois.textContent = decryptedText;
            imagemSaida.style.display = 'none';
        } catch(error) {
            alert('Texto inválido para descriptografar.');
        }
    } else {
        textoUm.style.display = 'block';
        textoDois.style.display = 'none';
        imagemSaida.style.display = 'block';
    }
});