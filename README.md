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

- `index.html` — página principal
- `css/linktree.css` — estilos customizados (gradiente animado, tipografia e toast)
- `js/copiarTexto.js` — lógica do botão que copia texto
- `image/info-chan.png` — imagem do avatar
- `README.md` — descrição curta do projeto

---

## 3. Como a página é montada (index.html)

### 3.1 Head (dependências)
A página carrega:
- **Bootstrap Icons** (ícones)
- **Google Fonts** (família **google sans**)
- **Tailwind CSS via CDN**
- `./css/linktree.css` (CSS local)
- `./js/copiarTexto.js` (script local)

### 3.2 Corpo (layout)
A página é centralizada e responsiva, com:
- Avatar (`./image/info-chan.png`)
- Título e subtítulo
- Bloco de links estilo “card”
- Botão que copia `lokiii.chr` para a área de transferência (toast de feedback)
- Bloco final com links adicionais
- Footer com ano automático

---

## 4. CSS customizado (css/linktree.css)

Principais regras:
- `.google-sans` define a fonte **google sans** para a página.
- `.bg-animated` cria um **background em gradiente** com animação contínua.
- Toast visual para feedback do botão de copiar.

---

## 5. JavaScript (js/copiarTexto.js)

A função `copiarTexto`:
1. Localiza o elemento com `id="lokiiiChr"`
2. Obtém o texto a ser copiado via `data-copy` (em vez de ler `innerText`)
3. Copia para a área de transferência com `navigator.clipboard.writeText(texto)`
4. Mostra um **toast** confirmando o conteúdo copiado
5. Registra erros no console caso a cópia falhe
