import './App.css'
import Perfil from './components/Perfil'
import Sobre from './components/Sobre'
import Links from './components/Links'
import LinksSt from './components/LinksSt'
import Rodape from './components/Rodape'

function App() {
  return (
    <>
      <main class="w-full max-w-sm md:max-w-md lg:max-w-lg z-10">
        
        {/* Foto de perfil */}
        <Perfil />

        {/* quem sou eu */}
        <Sobre />

        <hr class="border-t border-white w-1/2 mx-auto mb-6"></hr>

        {/* Links */}
        <Links />

        {/* Links da organização Strawbery Tea */}
        <LinksSt />

        {/* Rodapé */}
        <Rodape />

      </main>
    </>
  )
}

export default App
