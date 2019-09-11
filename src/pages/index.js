import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    const siteTitle = "Catsby's Site"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home Page"
          keywords={[`blog`, `dota`, `gatsby`, `javascript`, `react`]}
        />
        <div className="header">
          <h2>
            daniel.ohn
          </h2>
          <Bio />
          <Link to={`/resume`}>will code for food.</Link>
        
          <div className="list">
            <div className="blog">
              <h3><Link to={`/blog`}>blog</Link></h3>
              <ul>
                {posts.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  return (
                    <li key={node.fields.slug}>
                      <Link
                        to={`/blog${node.fields.slug}`}
                      >
                      {title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div>
              <h3><Link to={`/projects`}>projects</Link></h3>
              <ul>
                <li><a href="https://poke-site.netlify.com/">Poké App</a></li>
              </ul>
            </div>
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
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
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