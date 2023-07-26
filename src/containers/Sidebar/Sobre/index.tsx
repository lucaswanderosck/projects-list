import { Titulo } from '../../../components/Titulo'
import { Paragrafo } from '../../../components/Paragrafo'
import { GithubSecao } from './styles'

export const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre Mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, ratione
      quia ipsa quod eligendi placeat numquam aut, eaque, rerum voluptate soluta
      iste repudiandae expedita laboriosam accusantium tenetur! Iusto,
      exercitationem aspernatur.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=lucaswanderosck&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=lucaswanderosck&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)
