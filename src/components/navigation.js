import React, { useState } from "react"
import { Link } from "gatsby"

const MenuItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/contact",
    title: "Contact",
  },
]

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="site-navigation" aria-label="Main navigation">
      <button
        type="button"
        className={"menu-trigger" + (showMenu ? " is-active" : "")}
        aria-expanded={showMenu}
        aria-controls="nav-links"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? "Close" : "Menu"}
      </button>
      <ul id="nav-links">
        {MenuItems.map(menuItem => (
          <li key={menuItem.path}>
            <Link
              to={menuItem.path}
              partiallyActive={menuItem.path !== "/"}
              onClick={() => setShowMenu(false)}
            >
              {menuItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
