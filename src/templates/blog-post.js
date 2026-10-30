import React from "react"
import { Link, graphql } from "gatsby"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FeaturedImage from "../components/featured-image"

const Pagination = props => (
  <nav className="post-pagination" aria-label="More posts">
    {props.previous && props.previous.frontmatter.template === "blog-post" && (
      <Link to={props.previous.frontmatter.slug} rel="prev" className="card">
        <span className="meta-label">
          <RiArrowLeftLine aria-hidden="true" /> Previous
        </span>
        <span className="page-title">{props.previous.frontmatter.title}</span>
      </Link>
    )}
    {props.next && props.next.frontmatter.template === "blog-post" && (
      <Link to={props.next.frontmatter.slug} rel="next" className="card -next">
        <span className="meta-label">
          Next <RiArrowRightLine aria-hidden="true" />
        </span>
        <span className="page-title">{props.next.frontmatter.title}</span>
      </Link>
    )}
  </nav>
)

const Post = ({ data, pageContext }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  const { previous, next } = pageContext

  let props = {
    previous,
    next,
  }

  return (
    <Layout className="post-page">
      <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
        article={true}
      />
      <article className="blog-post">
        <header className="page-band article-header bg-blue-light">
          <div className="container">
            <time className="section-label">{frontmatter.date}</time>
            <h1>{frontmatter.title}</h1>
          </div>
        </header>
        <div className="container article-body">
          <FeaturedImage
            file={frontmatter.featuredImage}
            alt={frontmatter.title + " - Featured image"}
          />
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {(previous || next) && <Pagination {...props} />}
        </div>
      </article>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
