import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"
import PageBand from "../components/page-band"

const Thanks = () => (
  <Layout className="thanks-page">
    <Seo title="Thank you" />
    <PageBand label="✓ — Sent" title="Got your message" tone="yellow">
      <p className="section-intro">
        Thank you for getting in touch us. We will get back to you shortly.
      </p>
      <div className="hero-cta">
        <Link to="/" className="btn btn-primary">
          <span className="icon -left">
            <RiArrowLeftLine />
          </span>
          Lets go back to Homepage
        </Link>
      </div>
    </PageBand>
  </Layout>
)

export default Thanks
