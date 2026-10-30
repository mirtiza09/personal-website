import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

// Raster images go through gatsby-plugin-image; SVG illustrations have no
// childImageSharp, so they render as a plain <img> from their public URL.
const FeaturedImage = ({ file, alt, className = "featured-image" }) => {
  if (!file) return null
  if (file.childImageSharp) {
    return (
      <GatsbyImage
        image={file.childImageSharp.gatsbyImageData}
        alt={alt}
        className={className}
      />
    )
  }
  return (
    <img
      src={file.publicURL}
      alt={alt}
      className={className + " is-svg"}
      loading="lazy"
    />
  )
}

export default FeaturedImage
