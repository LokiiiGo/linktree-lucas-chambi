import linksSt from '../data/linksSt.json';

function LinksSt() {
    return (
        <>
            <p className="font-bold text-white text-lg mb-4 italic mt-10">Strawberry Tea - Organização de Brawlhalla</p>

            <hr className="border-t border-white w-1/2 mx-auto mb-6" />

            <div className="flex flex-col items-center space-y-4">
                {linksSt.map(link => (
                    <a key={link.titulo}
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
            </div>
        </>
    )
}

export default LinksSt