import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"

import { Container } from './styles'

const IndexPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  const { date } = frontmatter

  return (
    <>
      <SEO title="Home" />
      <Container>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <p>{date}</p>
        <Link to="/blog">
          Voltar
        </Link>
      </Container>
    </>
  )
}

export const pageQuery = graphql`
  query PostPage($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        path
        title
        url
      }
    }
  }
`

export default IndexPage