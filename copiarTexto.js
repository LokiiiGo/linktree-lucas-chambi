function copiarTexto() {
    const elemento = document.getElementById("lokiiiChr");

    // pega o texto de dentro do elemento
    const texto = elemento.innerText;

    // API para copiar um texto para a área de transferência
    navigator.clipboard.writeText(texto).then(() => {
        alert("Copiado para área de transferência: " + texto);
    }).catch(err => {
        console.error("Erro ao copiar: ", err);
    });
}