import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import projectsData from "../data/projectsData"

import { rhythm } from "../utils/typography"

class Projects extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title="Projects">
        <SEO
          title="Projects"
          keyword={[`projects`, `gatsby`, `javascript`, `react`]}
        />
        <div>
          <h2
            style={{
              marginBottom: rhythm(0.5),
            }}
          >
            projects i made
          </h2>
          {projectsData.map(val => {
            return (
                <Project
                  key={val.id}
                  site={val.site}
                  title={val.title}
                  date={val.date}
                  desc={val.desc}
                />
            )
          })}
        </div>
      </Layout>
    )
  }
}

const Project = ({ site, title, date, desc }) => {
  return (
    <div>
      <h3>
        <a target="_blank" rel="noopener noreferrer" href={site}>
          {title}
        </a>
      </h3>
      <small>{date}</small>
      <p style={{ marginBottom: rhythm(0.25) }}>{desc}</p>
    </div>
  )
}

export default Projects
