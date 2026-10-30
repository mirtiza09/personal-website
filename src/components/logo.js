import React from "react"
import { Link } from "gatsby"

const Logo = props => (
  <div className="site-logo">
    <Link to="/">
      {props.title}
      <span className="dot">.</span>
    </Link>
  </div>
)

export default Logo
