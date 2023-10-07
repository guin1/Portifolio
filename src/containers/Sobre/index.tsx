import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles"

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre Mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Alias ad aperiam ea pariatur, omnis aliquid optio?
      Quod nesciunt dolor odio tempora quo quaerat hic!
      Consequuntur, eligendi molestias. Esse, ipsam sed.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=guin1&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?guin1=USUARIO&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>
  </section>

)

export default Sobre
