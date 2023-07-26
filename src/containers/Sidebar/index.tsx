import { Avatar } from '../../components/Avatar'
import { Paragrafo } from '../../components/Paragrafo'
import { Titulo } from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

export const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Lucas Wanderosck</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        lucaswanderosck
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Full Stack
      </Descricao>
      <BotaoTema>Troca tema</BotaoTema>
    </SidebarContainer>
  </aside>
)
