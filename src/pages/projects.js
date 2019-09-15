import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
						projects
					</h2>
					<Project
						site="https://poke-site.netlify.com/"
						title="Poké App"
						date="June 21, 2016"
						desc="Web application that utilizes the PokeAPI to list out every pokémon and allows users to see their base stats."
					/>
				</div>
			</Layout>
		)
	}
}

const Project = ({ site, title, date, desc }) => {
	return (
		<div>
			<h3>
				<a target="noopener noreferrer" href={site}>
					{title}
				</a>
			</h3>
			<small>{date}</small>
			<p style={{ marginBottom: rhythm(0.25) }}>{desc}</p>
		</div>
	)
}

export default Projects
