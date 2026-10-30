import React from "react"

// Full-bleed page header: tinted band, mono section label, heading
const PageBand = ({ label, title, tone = "yellow", children }) => (
  <header className={"page-band bg-" + tone + "-light"}>
    <div className="container">
      {label && <span className="section-label">{label}</span>}
      <h1>{title}</h1>
      {children}
    </div>
  </header>
)

export default PageBand
