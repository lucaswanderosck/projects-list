import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Sidebar } from './containers/Sidebar'
import { Projetos } from './containers/Projetos'
import { Sobre } from './containers/Sobre'
import { Container, EstiloGlobal } from './styles'
import { temaLight } from './themes/light'
import { temaDark } from './themes/dark'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  const trocaTema = () => {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
