const rodape = document.querySelector('footer');
if (rodape) {
    rodape.innerHTML = `
    &copy; ${new Date().getFullYear()} Linktree do Lucas Chambi.
    `;
}