import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { rhythm } from "../utils/typography"
import Button from "../components/button"

class Resume extends React.Component {
	render() {

		return (
				<Layout location={this.props.location} title="Resume">
					<SEO
						title="Resume"
						keyword={[`resume`, `gatsby`, `javascript`, `react`]}
					/>
					<h2 style={{ 
						marginBottom: rhythm(1/4),
						marginTop: rhythm(1/4),
					}}>Education</h2>
					<hr />
					<div>
						<h3
							style={{
								marginBottom: rhythm(1 / 4),
								marginTop: rhythm(1 / 4),
							}}
						>
							Nothern Arizona University
						</h3>
						<small>Flagstaff, AZ | December 2017</small>
						<div className="resume-content">
							<p><i>Bachelor of Science, Computer Science</i></p>
							<p><i>College of Engineering, Forestry, and Natural Sciences</i></p>
						</div>
					</div>
					<h2 style={{ 
						marginBottom: rhythm(1/4),
					}}>Work Experience</h2>
					<hr />

					<div className="resume-content">
						<h3>Instructor</h3>
						<small>Caledonian, Inc. | June 2019 - Present</small>
						<p><i>Teach students with one-on-one sessions where we cover various material on Windows 10, The Internet, and Mavis Beacon.</i></p>
						<h3>FYLI Peer TA, CS110</h3>
						<small>Northern Arizona University, Flagstaff, AZ | August 2016 - December 2017</small>
						<p><i>Structured lectures in the course and redisigned Python and Java projects for future students, graded exams, and in-class assignments.</i></p>
					</div>
					<h2 style={{ 
						marginBottom: rhythm(1/4),
					}}>Skills</h2>
					<hr />
					<div className="resume-content">
						<h3>Languages</h3>
						<p>Javascript, Python, Java, C, HTML, CSS</p>
						<h3>Frameworks</h3>
						<p>React, Gatsby, Bulma, Bootstrap</p>
						<h3>Databases</h3>
						<p>MongoDB, MySQL, Postgres</p>
					</div>
					<Link to="/">
						<Button marginTop="85px">Return</Button>
					</Link>
				</Layout>
			)
	}
}

export default Resume

// export const pageQuery = graphql`
// 	query {
// 		site {
// 			siteMetaData {
// 				title
// 			}
// 		}
// 	}

// `