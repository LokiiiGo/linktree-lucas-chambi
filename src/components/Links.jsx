import { links } from '../data/links.json';

function Links() {

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

    return (
        <>
            <div className="flex flex-col items-center space-y-4">
                {links.map(link => (
                    <a
                        key={link.titulo}
                        href={link.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-full max-w-xs flex items-center justify-between bg-white/10 backdrop-blur-md text-white font-bold py-4 px-6 rounded-xl border border-white/20 shadow-xl transition-all duration-300 hover:bg-white hover:text-neutral-950 hover:scale-105 active:scale-95"
                    >
                        <i className={`${link.icon} text-2xl`}></i>
                        <span className="grow">{link.titulo}</span>
                        <i className="bi bi-arrow-right opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    </a>
                ))}

                <button
                    id="lokiiiChr"
                    onClick={copiarTexto}
                    className="group w-full max-w-xs flex items-center justify-between bg-white/10 backdrop-blur-md text-white cursor-pointer font-bold py-4 px-6 rounded-xl border border-white/20 shadow-xl transition-all duration-300 hover:bg-white hover:text-neutral-950 hover:scale-105 active:scale-95"
                >
                    <i className="bi bi-discord text-2xl"></i>
                    <span className="grow">lokiii.chr</span>
                    <i className="bi bi-clipboard opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </button>
            </div>
        </>
    )
}

export default Links;