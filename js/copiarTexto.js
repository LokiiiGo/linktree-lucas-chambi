const copiarTexto = () => {
    const elemento = document.getElementById("lokiiiChr");
    const texto = elemento?.innerText ?? "";

    if (!texto) {
        console.error("lokiiiChr não encontrado ou está vazio.");
        return;
    }

    navigator.clipboard.writeText(texto)
        .then(() => {
            alert("Copiado para área de transferência: " + texto);
        })
        .catch(err => {
            console.error("Erro ao copiar: ", err);
        });
};