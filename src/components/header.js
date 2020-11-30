import React from "react"
import { Link } from "gatsby"
import HeaderStyles from "./header.module.scss"
//imports the hook that retrieves the metaData from the GraphQL query
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Header = () => {
  // destructures the variables from the returned queries from then hook
  const { title } = useSiteMetadata()

  return (
    <header className={HeaderStyles.header}>
      <h1>
        <Link className={HeaderStyles.title} to="/">
          {title}
        </Link>
      </h1>
      <nav>
        <ul className={HeaderStyles.navList}>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
