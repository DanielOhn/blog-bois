import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class Resume extends React.Component {
	render() {
		return (
			<Layout location={this.props.location} title="Resume">
				<SEO
					title="Resume"
					keyword={[`resume`, `gatsby`, `javascript`, `react`]}
				/>

				<div className="content">
					<h2
						style={{
							marginBottom: rhythm(0.5),
						}}
					>
						my resume and skills
					</h2>
					<div style={{ marginBottom: rhythm(0.2) }}>
						<h3>Eduction</h3>
						<p>
							<b>Northern Arizona University</b>
						</p>
						<small>Flagstaff, AZ | December 2017</small>

						<p>
							<i>Bachelor of Science, Computer Science</i>
						</p>
						<p>
							<i>College of Engineering, Forestry, and Natural Sciences</i>
						</p>
					</div>
					<div style={{ marginBottom: rhythm(0.2) }}>
						<h3>Work Experience</h3>
						<div style={{ marginBottom: rhythm(0.15) }}>
							<p>
								<b>Instructor</b>
							</p>
							<small>Caledonian, Inc. | June 2019 - Present</small>
							<p>
								<i>
									Teach students with one-on-one sessions where we cover various
									material on Windows 10, The Internet, and Mavis Beacon.
								</i>
							</p>
						</div>
						<div>
							<p>
								<b>FYLI Peer TA, CS110</b>
							</p>
							<small>
								Northern Arizona University, Flagstaff, AZ | August 2016 -
								December 2017
							</small>
							<p>
								<i>
									Structured lectures in the course and redisigned Python and
									Java projects for future students, graded exams, and in-class
									assignments.
								</i>
							</p>
						</div>
					</div>
					<div>
						<h3>Skills</h3>
						<p>
							<b>Languages</b>
						</p>
						<p>Javascript, Python, Java, C, HTML, CSS</p>
						<p>
							<b>Frameworks</b>
						</p>
						<p>React, Gatsby, Flask, Django, PixiJS</p>
						<p>
							<b>Databases</b>
						</p>
						<p>Postgres, MySQL, MongoDB</p>
					</div>
				</div>
			</Layout>
		)
	}
}

export default Resume
