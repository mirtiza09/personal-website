import React from "react"
import { graphql } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PageBand from "../components/page-band"

export const pageQuery = graphql`
  query ContactQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Contact = ({ data }) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout className="contact-page">
      <Seo
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      <PageBand label="03 — Contact" title={frontmatter.title} tone="green">
        <div
          className="section-intro"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </PageBand>
      <section className="section">
        <div className="container">
          <form
            className="contact-form"
            action="/thanks"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="nb-field">
              <label className="nb-label" htmlFor="contact-name">
                Name
              </label>
              <input
                className="nb-input"
                id="contact-name"
                type="text"
                name="name"
                required
              />
            </p>
            <p className="nb-field">
              <label className="nb-label" htmlFor="contact-email">
                Email
              </label>
              <input
                className="nb-input"
                id="contact-email"
                type="email"
                name="email"
                required
              />
            </p>
            <p className="nb-field">
              <label className="nb-label" htmlFor="contact-subject">
                Subject
              </label>
              <input
                className="nb-input"
                id="contact-subject"
                type="text"
                name="subject"
                required
              />
            </p>
            <p className="nb-field">
              <label className="nb-label" htmlFor="contact-message">
                Message
              </label>
              <textarea
                className="nb-input nb-textarea"
                id="contact-message"
                name="message"
                required
              ></textarea>
            </p>
            <p className="text-align-right">
              <button className="btn btn-primary" type="submit">
                Send Message{" "}
                <span className="icon -right">
                  <RiSendPlane2Line />
                </span>
              </button>
            </p>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
