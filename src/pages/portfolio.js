import React, { useEffect, useState } from "react"

import axios from 'axios'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container } from '../styles/portfolio'

import formatHour from '../services/formatHour'

const PortfolioPage = ({ data }) => {

  const [repositorios, setRepositorios] = useState([]);

  useEffect(() => {
    async function loadRepositorios() {
      const response = await axios.get(`https://api.github.com/users/gprando/repos`);
      setRepositorios(response.data);
    }
    loadRepositorios();
  }, []);

  return (
    <Layout >
      <Container>
        <SEO title="Portfólio" />
        <h1>Projetos</h1>
        {repositorios.map(repositorio => {

          return (
            <a href={`${repositorio.html_url}`} key={repositorio.id}>
              <div className="post">
                <span>{repositorio.name}</span>
                <span>Última atualização em : {formatHour(repositorio.updated_at)}</span>
                <span>{repositorio.description}</span>
              </div>
            </a>
          )
        })}


      </Container>
    </Layout>
  )
}

export default PortfolioPage

