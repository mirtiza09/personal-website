import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation"

import "../assets/scss/style.scss"
import Footer from "./footer"
import Theme from "../components/theme"
import Search from "../components/search"

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
        description
      }
    }
    searchPages: allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "blog-post" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
        }
      }
    }
  }
`

const Layout = ({ children, className }) => {
  const { site, searchPages } = useStaticQuery(query)
  const { siteTitle, description } = site.siteMetadata

  return (
    <div className="primary-container">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header>
        <Logo title={siteTitle} />
        <Navigation />
        <div className="header-actions">
          <Search pages={searchPages.nodes} />
          <Theme />
        </div>
      </Header>
      <main id="main" className={className}>
        {children}
      </main>
      <Footer siteTitle={siteTitle} description={description} />
    </div>
  )
}

export default Layout
