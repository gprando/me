import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container } from '../styles/curriculo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Currículo" />
    <Container>
      <h1>Formação Acadêmica</h1>
      <ul>
        <li>Cursando graduação de Engenharia de Computação.</li>
      </ul>

      <h1>Experiências</h1>
      <ul>
        <li>Acessor de projetos OCCAM Engenharia, empresa júnior de Engenharia de Computação  (2018/2-2019/2)</li>
        <li>Diretor de projetos OCCAM Engenharia, empresa júnior de Engenharia de Computação  (2020/1-Atualmente)</li>
      </ul>


      <h1>Certificações / Eventos</h1>
      <ul>
        <li>Ministrou curso de git para membros da OCCAM Engenharia </li>
        <li>Hackathons </li>
        <li>Hackathons </li>
      </ul>

      <h1>Habilidades</h1>
      <ul>
        <li>C</li>
      </ul>

      <h1>Interesses</h1>
      <span>
        Além de ser um desenvolvedor Backend, frontend e mobile, gosto muito estar sempre buscando novos conhecimentos.
        Gosto da área de gerência de projetos e tecnologias
     </span>
    </Container>
  </Layout>
)

export default NotFoundPage
