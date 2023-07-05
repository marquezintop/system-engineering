import engineer from "../../assets/engineer.png"
import { Container, EngineerImage, EngineerIntroduction, EngineerTopics } from "./style"

export default function Introduction() {
    return (
        <>
        <Container>
            <EngineerIntroduction>
                <h1>
                    O que é Engenharia?
                </h1>
                <h2>
                A engenharia é uma disciplina que envolve a aplicação de conhecimentos científicos e matemáticos para projetar, construir e melhorar estruturas, máquinas, sistemas e processos.
                </h2>
            </EngineerIntroduction>
            <EngineerImage src={engineer}/>
            <EngineerTopics>
                <h1>Tópicos da Engenharia de Sistemas:</h1>
                <ul>
                    <li>◉ <span>Objetivo do curso:</span> O objetivo principal do curso é formar profissionais capacitados para projetar, implementar e gerenciar sistemas complexos, levando em consideração os requisitos técnicos, funcionais, econômicos e sociais.</li>
                    <li>◉ <span>Grade curricular:</span> A grade curricular do curso de Engenharia de Sistemas geralmente abrange uma combinação de disciplinas técnicas e teóricas. Alguns dos tópicos comuns incluem matemática, física, programação, análise de sistemas, engenharia de software, banco de dados, redes de computadores, inteligência artificial, gerenciamento de projetos e ética profissional.</li>
                    <li>◉ <span>Enfoque interdisciplinar:</span> A Engenharia de Sistemas adota uma abordagem interdisciplinar, combinando conhecimentos de diferentes áreas, como engenharia, ciência da computação, gestão e comunicação. Isso permite que os alunos desenvolvam habilidades para resolver problemas complexos, trabalhar em equipe e comunicar-se efetivamente com profissionais de diversas áreas.</li>
                    <li>◉ <span>Desenvolvimento de competências:</span> Durante o curso, os estudantes são incentivados a desenvolver habilidades técnicas e práticas essenciais para a Engenharia de Sistemas. Isso inclui o aprendizado de linguagens de programação, a utilização de ferramentas de modelagem e simulação, a compreensão dos princípios de arquitetura de sistemas, a análise de requisitos e a aplicação de metodologias de desenvolvimento de software.</li>
                    <li>◉ <span>Estágios e projetos práticos:</span> Muitos cursos de Engenharia de Sistemas oferecem oportunidades de estágio em empresas e instituições, permitindo que os alunos apliquem seus conhecimentos em um ambiente real de trabalho. Além disso, projetos práticos são comuns, onde os estudantes desenvolvem soluções para problemas reais ou simulados, trabalhando em equipe para implementar e testar sistemas.</li>
                    <li>◉ <span>Perspectivas de carreira:</span> A formação em Engenharia de Sistemas oferece uma ampla gama de oportunidades profissionais. Os engenheiros de sistemas podem atuar em diversos setores, como tecnologia da informação, telecomunicações, indústria automotiva, aviação, saúde, energia e consultoria. Eles podem trabalhar em projetos de desenvolvimento de software, gestão de sistemas empresariais, segurança cibernética, análise de dados, entre outras áreas.</li>
                    <li>◉ <span>Tecnologias emergentes:</span> Com o avanço da tecnologia, os engenheiros de sistemas estão cada vez mais envolvidos com tecnologias emergentes, como inteligência artificial, aprendizado de máquina, Internet das Coisas (IoT) e computação em nuvem. O curso de Engenharia de Sistemas busca preparar os alunos para acompanhar e aplicar essas tecnologias em suas futuras carre</li>
                </ul>
            </EngineerTopics>
        </Container>
        </>
    )
}