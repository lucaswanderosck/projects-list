import { Paragrafo } from '../Paragrafo'
import { Titulo } from '../Titulo'
import { Card, LinkBotao } from './styles'

export const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">lista de tarefas feita com vueJs</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)
