import React, { useState } from "react"
import { Link } from "gatsby"
import { RiSearchLine, RiCloseLine } from "react-icons/ri"

const Search = ({ pages }) => {
  const [showSearch, setShowSearch] = useState(false)
  const [query, setQuery] = useState("")

  const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
  const results = terms.length
    ? pages.filter(page =>
        terms.every(term =>
          page.frontmatter.title.toLowerCase().includes(term),
        ),
      )
    : []

  return (
    <div className="search">
      <button
        type="button"
        className="icon-btn"
        aria-label={showSearch ? "Close search" : "Search"}
        aria-expanded={showSearch}
        onClick={() => setShowSearch(!showSearch)}
      >
        {showSearch ? <RiCloseLine /> : <RiSearchLine />}
      </button>
      {showSearch && (
        <div className="search-container">
          <input
            type="search"
            placeholder="Search posts"
            aria-label="Search posts"
            value={query}
            onChange={evt => setQuery(evt.target.value)}
            className="nb-input"
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          />
          {terms.length > 0 && (
            <ul className="search-results">
              {results.length ? (
                results.map(page => (
                  <li key={page.id}>
                    <Link to={page.frontmatter.slug}>
                      {page.frontmatter.title}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="search-empty">No posts match “{query}”</li>
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default Search
