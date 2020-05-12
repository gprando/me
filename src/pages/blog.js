import React from "react"
import { graphql } from "gatsby"

import AniLink from "gatsby-plugin-transition-link/AniLink";

import SEO from "../components/seo"

import { Container } from '../styles/blog'


const BlogPage = ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
    <Container>
      <SEO title="Blog" />

      <h1>Últimas Publicações</h1>
      {edges.map(item => {
        const { node } = item
        const { frontmatter } = node


        return (
          <AniLink cover hex="#555" bg="#555" to={`/${frontmatter.path}`} key={frontmatter.path}>
            <div className="post">
              <span>{frontmatter.title}</span>
              <span>publicado em : {frontmatter.date}</span>
            </div>
          </AniLink>
        )
      })}


    </Container>
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

export default BlogPage

