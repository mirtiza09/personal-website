import React from "react"
import { graphql, Link } from "gatsby"
import { RiArrowRightLine, RiArrowRightUpLine } from "react-icons/ri"

import settings from "../util/site.json"
import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import Seo from "../components/seo"
import SocialIcons from "../components/social-icons"
import FeaturedImage from "../components/featured-image"

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 585, height: 439)
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
    posts: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 6
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featuredImage {
              publicURL
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.6)
              }
            }
          }
        }
      }
    }
  }
`

const topics = [
  "Product Management",
  "Full-Stack",
  "Web Development",
  "Blockchain",
  "SQL",
  "Industry 4.0",
  "Digital Products",
]

const Marquee = () => (
  <div className="marquee" aria-hidden="true">
    <div className="marquee-track">
      {[0, 1].map(copy => (
        <div className="marquee-content" key={copy}>
          {topics.map(topic => (
            <React.Fragment key={topic}>
              <span>{topic}</span>
              <span className="marquee-dot" />
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  </div>
)

const HomePage = ({ data }) => {
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout className="home">
      <Seo />
      <header className="hero">
        <div className="pattern-dots" />
        <div className="container">
          <p className="badge badge-pink hero-badge">{frontmatter.tagline}</p>
          <h1 className="hero-title">
            {frontmatter.title.split(" ").map((word, i) => (
              <React.Fragment key={word + i}>
                {i > 0 && <br />}
                {word}
              </React.Fragment>
            ))}
          </h1>
          <div className="hero-grid">
            <div className="hero-content">
              <div
                className="hero-description"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <div className="hero-cta">
                <Link to={frontmatter.cta.ctaLink} className="btn btn-primary">
                  {frontmatter.cta.ctaText}
                  <span className="icon -right">
                    <RiArrowRightLine />
                  </span>
                </Link>
                <a href={settings.playbookUrl} className="btn btn-pink">
                  Explore playbook
                  <span className="icon -right">
                    <RiArrowRightUpLine />
                  </span>
                </a>
                <Link to="/blog" className="btn">
                  Read the blog
                </Link>
              </div>
              <SocialIcons />
            </div>
            {frontmatter.featuredImage && (
              <div className="hero-figure">
                <FeaturedImage
                  file={frontmatter.featuredImage}
                  alt={frontmatter.title + " - Featured image"}
                />
              </div>
            )}
          </div>
        </div>
      </header>
      <Marquee />
      <BlogListHome data={posts} />
    </Layout>
  )
}

export default HomePage
