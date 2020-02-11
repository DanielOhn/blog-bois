import React from "react"
import { graphql, Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Theme from "../components/theme"

import Twitter from "../img/twitter"
import Github from "../img/github"

import projectsData from "../data/projectsData"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    const { social } = data.site.siteMetadata

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Home Page"
          keywords={[`blog`, `dota`, `gatsby`, `javascript`, `react`]}
        />
        <div className="content">
          <div className="head">
            <h2>daniel.ohn</h2>
            <Theme />
          </div>
          <Bio />
          <p>
            <Link to={`/resume`}>will code for food.</Link>
          </p>
          <p>
            <Link to={`/contact`}>contact me.</Link>
          </p>
          <div className="list">
            <div className="blog-list">
              <h3>
                <Link to={`/blog`}>blog</Link>
              </h3>
              <ul>
                {posts.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  return (
                    <li key={node.fields.slug}>
                      <Link to={`/blog${node.fields.slug}`}>{title}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div>
              <h3>
                <Link to={`/projects`}>projects</Link>
              </h3>
              <ul>
                {projectsData.map(val => {
                  return (
                    <li key={val.id}>
                      <a href={val.site}>{val.title}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          <div className="social">
            <a href={social.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
            <a href={social.github} target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
          github
          email
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
