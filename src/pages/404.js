import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftLine, RiBugLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"
import PageBand from "../components/page-band"

const NotFound = () => (
  <Layout className="not-found-page">
    <Seo title="Page not found" />
    <PageBand
      label="404 — Not found"
      title="Oops we did not expect that to happen"
      tone="pink"
    >
      <p className="section-intro">
        Have you wondered into the unknow. Let us help you, Please take a look
        at below options
      </p>
      <div className="hero-cta">
        <Link to="/" className="btn btn-primary">
          <span className="icon -left">
            <RiArrowLeftLine />
          </span>
          Back to Homepage
        </Link>
        <Link to="/contact" className="btn">
          Report this
          <span className="icon -right">
            <RiBugLine />
          </span>
        </Link>
      </div>
    </PageBand>
  </Layout>
)

export default NotFound
