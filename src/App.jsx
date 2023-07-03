import { useState } from 'react'
import "./style.css"

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <header>
          <h1>Engenharia de Sistemas</h1>
          <p>Construa o futuro com soluções inovadoras</p>
          <a href="#overview" className="cta-button">Saiba mais</a>
        </header>
  
        <section id="overview">
          <h2>Visão Geral do Curso</h2>
          <p>A Engenharia de Sistemas é uma área multidisciplinar que combina conhecimentos de engenharia, ciência da computação e gerenciamento de projetos.</p>
          <p>O curso abrange uma variedade de tópicos, incluindo desenvolvimento de software, engenharia de dados, análise de sistemas e gerenciamento de projetos complexos.</p>
          <p>Os estudantes irão adquirir habilidades práticas através de projetos e trabalhos em equipe, desenvolvendo soluções inovadoras para desafios reais.</p>
        </section>
  
        <section id="career-opportunities">
          <h2>Oportunidades de Carreira</h2>
          <p>Ao concluir o curso de Engenharia de Sistemas, você estará preparado para diversas oportunidades de carreira em um mercado em constante crescimento.</p>
          <p>Alguns possíveis empregadores incluem empresas de tecnologia, consultorias, indústrias automotivas e aeroespaciais, instituições financeiras e empresas de telecomunicações.</p>
          <p>Você poderá trabalhar como engenheiro de sistemas, analista de negócios, arquiteto de soluções, gerente de projetos, desenvolvedor de software e muito mais.</p>
        </section>
  
        <section id="institution-info">
          <h2>Instituição</h2>
          <p>A Universidade XYZ é reconhecida por sua excelência acadêmica e compromisso com o ensino de qualidade na área de Engenharia de Sistemas.</p>
          <p>Nossa instituição oferece uma infraestrutura moderna, laboratórios equipados com tecnologia de ponta e corpo docente altamente qualificado, composto por profissionais experientes do setor.</p>
          <p>Estamos comprometidos em proporcionar aos nossos estudantes uma educação de ponta, preparando-os para os desafios do mercado de trabalho e incentivando a inovação e o empreendedorismo.</p>
        </section>
  
        <footer>
          <p>Entre em contato conosco para mais informações:</p>
          <p>Email: contato@universidadexyz.edu</p>
          <p>Telefone: +55 123 456 7890</p>
          <ul className="social-media">
            <li><a href="https://www.facebook.com/universidadexyz"><img src="facebook.png" alt="Facebook" /></a></li>
            <li><a href="https://www.twitter.com/universidadexyz"><img src="twitter.png" alt="Twitter" /></a></li>
            <li><a href="https://www.instagram.com/universidadexyz"><img src="instagram.png" alt="Instagram" /></a></li>
          </ul>
        </footer>
        </div>
    )
}

export default App
