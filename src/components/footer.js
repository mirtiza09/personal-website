import React from "react"
import { Link } from "gatsby"

import SocialIcons from "./social-icons"

const Footer = ({ siteTitle, description }) => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <Link to="/" className="footer-logo">
            {siteTitle}
            <span className="dot">.</span>
          </Link>
          <p className="footer-tagline">{description}</p>
        </div>
        <div>
          <h2 className="footer-heading">Pages</h2>
          <ul className="footer-links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="footer-heading">Elsewhere</h2>
          <SocialIcons className="social-icons -footer" />
        </div>
      </div>
      <p className="footer-bottom">
        © {new Date().getFullYear()} {siteTitle}
      </p>
    </div>
  </footer>
)

export default Footer
