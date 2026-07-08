// Inicializa o particles.js com uma configuração leve para não travar a página.
// Reduz a quantidade de partículas em telas pequenas e respeita "prefers-reduced-motion".
(function initParticles() {
    if (typeof particlesJS === "undefined") {
        console.error("particles.js não carregou.");
        return;
    }

    const prefereMenosMovimento = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    // Menos partículas no mobile = melhor performance
    const ehMobile = window.innerWidth < 768;
    const quantidade = prefereMenosMovimento ? 0 : ehMobile ? 35 : 70;

    particlesJS("particles-js", {
        particles: {
            number: {
                value: quantidade,
                density: { enable: true, value_area: 900 },
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: {
                value: 0.4,
                random: true,
                anim: { enable: true, speed: 0.6, opacity_min: 0.1 },
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: false },
            },
            line_linked: {
                enable: true,
                distance: 140,
                color: "#ffffff",
                opacity: 0.25,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1.2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
            },
        },
        interactivity: {
            detect_on: "window",
            events: {
                onhover: { enable: !ehMobile, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true,
            },
            modes: {
                grab: { distance: 160, line_linked: { opacity: 0.5 } },
                push: { particles_nb: 3 },
            },
        },
        retina_detect: true,
    });
})();
