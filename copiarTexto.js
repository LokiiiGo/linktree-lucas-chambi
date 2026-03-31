document.querySelector('footer').innerHTML = `&copy; ${new Date().getFullYear()} - Lucas Chambi`;

function copiarTexto() {
    // captura o elemento pelo ID
    const elemento = document.getElementById("lokiiiGo");

    // pega o texto de dentro do elemento
    const texto = elemento.innerText;

    // API para copiar um texto para a área de transferência
    navigator.clipboard.writeText(texto).then(() => {
        alert("Copiado para área de transferência: " + texto);
    }).catch(err => {
        console.error("Erro ao copiar: ", err);
    });
}