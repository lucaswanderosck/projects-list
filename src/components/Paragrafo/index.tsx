import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
}

export const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)
