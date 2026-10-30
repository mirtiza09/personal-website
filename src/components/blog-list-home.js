import React from "react"
import { Link } from "gatsby"
import { RiArrowRightLine } from "react-icons/ri"

import PostCard from "./post-card"

export default function BlogListHome(props) {
  const data = props.data
  const posts = data.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostCard key={edge.node.id} data={edge.node} />)
  return <PostMaker data={posts} />
}

const PostMaker = ({ data }) => (
  <section className="home-posts section bg-blue-light">
    <div className="container">
      <span className="section-label">01 — Writing</span>
      <h2>Latest in blog</h2>
      <div className="grids col-1 sm-2 lg-3">{data}</div>
      <div className="section-cta">
        <Link className="btn btn-yellow" to="/blog">
          See all posts
          <span className="icon -right">
            <RiArrowRightLine />
          </span>
        </Link>
      </div>
    </div>
  </section>
)
