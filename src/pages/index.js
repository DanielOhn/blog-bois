import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Catsby's Site"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home Page"
          keywords={[`blog`, `dota`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hey there buddy{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to my personal site.</p>
        <p>
          Currently it only contains my personal blog, 
          but I plan on expanding it to include my resume and projects.
        </p>
        <p>
          Hosted on <a href="https://www.netlify.com/" rel="noopener noreferrer" target="_blank">Netlify</a>.
        </p>

        <p>Enjoy your stay.</p>
        <div className="btn-list">
          <Link to="/blog/">
            <Button>Blog</Button>
          </Link>
          <Link to="/projects/">
            <Button>Projects</Button>
          </Link>
          <Link to="/resume/">
            <Button>Resume</Button>
          </Link>
        </div>
      </Layout>
       
    )
  }
}

export default IndexPage
