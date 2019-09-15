import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"

import Theme from "./theme"

const Layout = props => {
  const { children, location } = props
  const rootPath = `${__PATH_PREFIX__}/`
  //const blogPath = `${__PATH_PREFIX__}/blog/`
  // const projectPath = `${__PATH_PREFIX__}/projects/`
  // const resumePath = `${__PATH_PREFIX__}/resume/`
  let header

  if (location.pathname !== rootPath) {
    header = (
      <div className="header">
        <h3
          style={{
            marginBottom: rhythm(0.5),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
            }}
            to={`/`}
          >
            daniel.ohn
          </Link>
        </h3>
        <Theme />
      </div>
    )
  }
  return (
    <Wrapper>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main className="main">{children}</main>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled("div")`
  min-height: 75vh;
  margin-top: 15%;
`

export default Layout
