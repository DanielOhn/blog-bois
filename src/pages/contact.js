import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'


import { rhythm } from '../utils/typography'
import Send from '../img/send'

class Contact extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title='Contact'>
        <SEO
          title='Contact Me'
          keyword={['contact', 'gatsby', 'javascript', 'react']}
        />
        <div>
          <h2 style={{ marginBottom: rhythm(0.5)}}>
            contact
          </h2>
          <div className='content'>
            <p>
              Need someone to code a website or project for you?
            </p>
            <p>
              Wanna leave feedback for any of my projects or blogs?
            </p>
            <p>
              Interested in collaborating on a project?
            </p>
            <p style={{ paddingTop: rhythm(.4) }}>
              Feel free to drop me a message, or contact me on twitter.
            </p>
          </div>
          <div className='contact'>
            <form name='contact' method='POST' data-netlify='true'>
              <p>
                <input type='text' name='name' placeholder="Daniel Ohn" />
              </p>
              <p>
                <input type='email' name='email' placeholder='ohndaniel@gmail.com' />
              </p>
              <p>
                <textarea name='message' placeholder='Very cool site for a cool cat 8)'></textarea>
              </p>
              <Send type='submit' />
            </form>
          </div>
        </div>
        
      </Layout>
    )
  }
}

export default Contact