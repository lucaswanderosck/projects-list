import { Avatar } from '../../components/Avatar'
import { Paragrafo } from '../../components/Paragrafo'
import { Titulo } from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

export const Sidebar = (props: Props) => (
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
      <BotaoTema onClick={props.trocaTema}>Troca tema</BotaoTema>
    </SidebarContainer>
  </aside>
)
