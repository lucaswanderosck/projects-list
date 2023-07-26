import { Sidebar } from './containers/Sidebar'
import { Projetos } from './containers/Sidebar/Projetos'
import { Sobre } from './containers/Sidebar/Sobre'
import { Container, EstiloGlobal } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
