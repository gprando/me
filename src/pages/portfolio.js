import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"

import axios from 'axios'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container } from '../styles/blog'


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
                <span>{repositorio.description}</span>
                <span>Última atualização em : {repositorio.updated_at}</span>
              </div>
            </a>
          )
        })}


      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            path
          }
        }
      }
    }
  }
`

export default PortfolioPage

