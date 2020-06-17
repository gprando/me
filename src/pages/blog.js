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

      <ul className="items-grid">
        {edges.map(item => {
          const { node } = item
          const { frontmatter } = node

          return (
            <AniLink cover hex="#555" bg="#555" to={`/${frontmatter.path}`} key={frontmatter.path}>
              <li className="post" key={item.path}>
                <div >
                  <img src={frontmatter.url} alt={frontmatter.title} />
                  <span>{frontmatter.title}</span>
                </div>
              </li>
              <span>publicado em : {frontmatter.date}</span>
            </AniLink>
          )
        })}
      </ul>

    </Container>
  )
}

export const pageQuery = graphql`
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          path
          url
          title
          date(formatString: "DD/MM/YYYY")
        }
      }
    }
  }
}

`

export default BlogPage

