import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container } from '../styles/blog'


const BlogPage = ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
    <Layout >
      <Container>
        <SEO title="Blog" />
        <h1>Últimas Publicações</h1>
        {edges.map(item => {
          const { node } = item
          const { frontmatter } = node


          return (
            <Link to={`/${frontmatter.path}`} key={frontmatter.path}>
              <div className="post">
                <span>{frontmatter.title}</span>
                <span>publidado em : {frontmatter.date}</span>
              </div>
            </Link>
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

export default BlogPage

