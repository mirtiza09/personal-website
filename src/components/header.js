import React, { useEffect, useState } from "react"

const Header = ({ children }) => {
  const [scrolled, setScrolled] = useState(false)

  // Hard bottom shadow once the page scrolls under the sticky nav
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
      <div className="container container-wide">{children}</div>
    </header>
  )
}

export default Header
