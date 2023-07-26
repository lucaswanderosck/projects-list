import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

export const Paragrafo = ({
  children,
  tipo = 'principal',
  fontSize
}: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)
