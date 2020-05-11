import React from "react"



import { FaUniversity, FaGripfire } from 'react-icons/fa'
import { MdWork, MdHttp } from 'react-icons/md'
import { AiOutlineSafetyCertificate } from 'react-icons/ai'
import { GiBrain } from 'react-icons/gi'
import {
  DiLinux,
  DiJavascript1,
  DiGit,
  DiNodejs,
  DiReact,
  DiNetbeans,
  DiMongodb,
  DiPostgresql,
  DiDatabase,
  DiTerminal,
  DiHtml5,
  DiJava,
  DiCss3,
  DiCreativecommons

} from 'react-icons/di'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container } from '../styles/curriculo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Currículo" />
    <Container>


      <h1>Formação Acadêmica <FaUniversity color="#080" /></h1>
      <span>Cursando graduação de Engenharia de Computação.</span>

      <h1>Experiências <MdWork color="#080" /></h1>
      <ul>
        <li>Diretor de projetos OCCAM Engenharia, empresa júnior de Engenharia de Computação  (2020/1-Atualmente)</li>
        <li>Acessor de projetos OCCAM Engenharia, empresa júnior de Engenharia de Computação  (2018/2-2019/2)</li>
      </ul>


      <h1>Certificados / Eventos <AiOutlineSafetyCertificate color="#080" /></h1>
      <ul>
        <li>Semana Omnistack 11 da Rocketseat</li>
        <li>Ministrou treinamentos com foco em desenvolvimento web para membros da OCCAM Engenharia (2020/1);</li>
        <li>Hackathon da OAB (23/11/2019 - 24/11/2019) | 2º lugar;</li>
        <li>Hackathon educação (09/11/2019 - 10/11/2019) | 2 lugar; </li>
        <li>Semana Omnistack 10 da Rocketseat</li>
        <li>Inventum 2019; </li>
        <li>Transcender (25-26-27/10/2019);</li>
        <li>Semana Omnistack 09 da Rocketseat</li>
        <li>Ministrou curso de git para membros da OCCAM Engenharia (2019/2); </li>
        <li>Semana Acadêmica de Engenharia de Computação (2018/2); </li>
      </ul>

      <h1>Habilidades <GiBrain color="#080" /></h1>
      <ul>
        <li>JavaScript ES6+ <DiJavascript1 color="#074" />;</li>
        <li>Linux <DiLinux color="#074" />;</li>
        <li>Git <DiGit color="#074" />;</li>
        <li>NodeJs <DiNodejs color="#074" />;</li>
        <li>ReactJS <DiReact color="#074" />;</li>
        <li>Reac Native <DiReact color="#074" />;</li>
        <li>RESTFul <MdHttp color="#074" />;</li>
        <li>MVC <DiNetbeans color="#074" />;</li>
        <li>NoSQL <DiMongodb color="#074" />;</li>
        <li>SQL <DiPostgresql color="#074" />;</li>
        <li>ORM <DiDatabase color="#074" />;</li>
        <li>Shell Script <DiTerminal color="#074" />;</li>
        <li>HTML5 <DiHtml5 color="#074" />;</li>
        <li>CSS3 <DiCss3 color="#074" /></li>
        <li>Java <DiJava color="#074" />;</li>
        <li>Estrutura de dados <DiCreativecommons color="#074" />;</li>
        <li>C <DiCreativecommons color="#074" />;</li>
      </ul>

      <h1>Interesses <FaGripfire color="#080" /></h1>
      <span>
        Além de ser um desenvolvedor Backend, frontend e mobile, sempre buscando novos conhecimentos.
        Gosto da área de gerência de projetos e tecnologias. Aficionado em novas tecnologias e em todo o ecossistema por volta do JavaScript.
     </span>
    </Container>
  </Layout >
)

export default NotFoundPage
