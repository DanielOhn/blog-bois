import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { rhythm } from "../utils/typography"
import Send from "../img/send"
import { navigate } from "gatsby"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function Contact(props) {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <Layout location={props.location} title="Contact">
      <SEO
        title="Contact Me"
        keyword={["contact", "gatsby", "javascript", "react"]}
      />
      <div>
        <h2 style={{ marginBottom: rhythm(0.5) }}>contact</h2>
        <div className="content">
          <p>Need someone to code a website or project for you?</p>
          <p>Wanna leave feedback for any of my projects or blogs?</p>
          <p>Interested in collaborating on a project?</p>
          <p style={{ paddingTop: rhythm(0.4) }}>
            Feel free to drop me a message, or contact me on twitter.
          </p>
        </div>
        <div className="contact">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <input name="bot-field" onChange={handleChange} />
            </p>
            <p>
              <input
                type="text"
                name="name"
                placeholder="Daniel Ohn"
                onChange={handleChange}
              />
            </p>
            <p>
              <input
                type="email"
                name="email"
                placeholder="ohndaniel@gmail.com"
                onChange={handleChange}
              />
            </p>
            <p>
              <textarea
                name="message"
                placeholder="Very cool site for a cool cat 8)"
                onChange={handleChange}
              ></textarea>
            </p>
            <Send type="submit" />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contact