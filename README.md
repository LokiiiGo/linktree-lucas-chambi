# Linktree do Lucas Chambi

> Uma página pessoal de redes sociais desenvolvida do zero.

---

## 1. Visão geral
Este projeto é uma **landing page estilo Linktree** para reunir links de redes sociais em um único layout. A página é totalmente estática (HTML/CSS/JS), com:

- **HTML**: estrutura da página e botões/links
- **Tailwind CSS via CDN**: estilização com classes utilitárias
- **CSS local (`css/linktree.css`)**: background animado e tipografia
- **JavaScript (`js/copiarTexto.js`)**: cópia de texto para a área de transferência

---

## 2. Estrutura do repositório

- `teste.html` — página principal
- `css/linktree.css` — estilos customizados (gradiente animado e fonte)
- `js/copiarTexto.js` — lógica do botão que copia texto
- `image/photo-willow.png` — imagem do avatar
- `README.md` — descrição curta do projeto

---

## 3. Como a página é montada (teste.html)

### 3.1 Head (dependências)
A página carrega:
- **Bootstrap Icons** (ícones)
- **Google Fonts** (família **Figtree**)
- **Tailwind CSS via CDN**
- `./css/linktree.css` (CSS local)
- `js/copiarTexto.js` (script local)

### 3.2 Corpo (layout)
A página é centralizada e responsiva, com:
- Avatar (imagem em `./image/photo-willow.png`)
- Título e subtítulo (nome e descrição)
- Um bloco com botões/links (estilo “card”)
- Um botão que copia um texto específico (`lokiii.chr`)
- Um bloco final com links adicionais
- Footer com ano automático via script embutido

---

## 4. CSS customizado (css/linktree.css)

Principais regras:

- `.figtree` define a fonte **Figtree** para a página.
- `.bg-animated` cria um **background em gradiente** com animação contínua.

(Existe uma animação de partículas comentada no arquivo, mas não está ativa.)

---

## 5. JavaScript (js/copiarTexto.js)

A função `copiarTexto`:
1. Localiza o elemento com `id="lokiiiChr"`
2. Lê o texto exibido (`innerText`)
3. Copia para a área de transferência com `navigator.clipboard.writeText(texto)`
4. Mostra um `alert()` confirmando o conteúdo copiado
5. Registra erros no console caso a cópia falhe