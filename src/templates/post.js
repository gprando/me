import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container } from './styles'

const IndexPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  const { title, date } = frontmatter

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <h1>{title}</h1>
        <p>{date}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <Link to="/blog">Voltar</Link>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostPage($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`

export default IndexPage