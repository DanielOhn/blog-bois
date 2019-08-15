import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { rhythm } from "../utils/typography"
import Button from "../components/button"


class Projects extends React.Component {
	render() {

		return (
			<Layout location={this.props.location} title="Projects">
				<SEO
					title="Projects"
					keyword={[`projects`, `gatsby`, `javascript`, `react`]}
				/>
				<div>
					<h3
						style={{
							marginBottom: rhythm(1 / 4),
						}}
					>
						<Link 
							style={{ boxShadow: `none`}}
							to={``}
						>
							Coming soon...
						</Link>
					</h3>
				</div>
				<Link to="/">
					<Button marginTop="85px">Return</Button>
				</Link>
			</Layout>
		)
	}
}

export default Projects

// export const pageQuery = graphql`
// 	query {
// 		site {
// 			siteMetadata {
// 				title
// 			}
// 		}
// 	}
// `