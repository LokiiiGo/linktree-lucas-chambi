// Mostra um toast (notificação flutuante) em vez de usar alert()
function mostrarToast(mensagem) {
    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        toast.className = "toast";
        document.body.appendChild(toast);
    }

    toast.textContent = mensagem;
    toast.classList.add("show");

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}

// Copia o usuário do Discord (definido em data-copy) para a área de transferência
function copiarTexto() {
    const elemento = document.getElementById("lokiiiChr");
    const texto = elemento?.dataset.copy?.trim() ?? "";

    if (!texto) {
        console.error("lokiiiChr não encontrado ou está vazio.");
        return;
    }

    navigator.clipboard
        .writeText(texto)
        .then(() => mostrarToast("Copiado: " + texto))
        .catch((err) => {
            console.error("Erro ao copiar: ", err);
            mostrarToast("Não foi possível copiar :(");
        });
}
