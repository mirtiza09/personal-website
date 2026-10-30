import React from "react"
import { Link } from "gatsby"
import FeaturedImage from "./featured-image"

const PostCard = ({ data }) => (
  <article className="post-card">
    {data.frontmatter.featuredImage ? (
      <Link to={data.frontmatter.slug} tabIndex={-1} aria-hidden="true">
        <FeaturedImage file={data.frontmatter.featuredImage} alt="" />
      </Link>
    ) : (
      ""
    )}
    <div className="post-content">
      <p className="meta">
        <time className="badge">{data.frontmatter.date}</time>
      </p>
      <h3 className="title">
        <Link to={data.frontmatter.slug}>{data.frontmatter.title}</Link>
      </h3>
    </div>
  </article>
)

export default PostCard
