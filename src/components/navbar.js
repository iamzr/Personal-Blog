import { Link } from "gatsby"
import React from "react"
import { scale, rhythm } from "../utils/typography"

function Item({ to, name }) {
  return (
    <Link style={{ boxShadow: `none`, marginRight: "1em" }} to={to}>
      {name}
    </Link>
  )
}

function Navbar({ location, title }) {
  const rootPath = `${__PATH_PREFIX__}/`
  const blogPath = `${__PATH_PREFIX__}/blog/`
  let navbar

  if (location.pathname === rootPath || location.pathname === blogPath) {
    navbar = (
      <React.Fragment>
        <header>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(0.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={location.pathname === blogPath ? `/blog/` : `/`}
            >
              {title}
            </Link>
          </h1>
        </header>

        <nav
          style={{
            display: `flex`,
            flex: 1,
            justifyContent: `center`,
            marginBottom: rhythm(1),
          }}
        >
          <Item to="/blog/" name={`home`}></Item>
          <Item to="/tags/fitness" name={`fitness`}></Item>
          <Item to="/tags/dev" name={`dev`}></Item>
          <Item to="/tags/uni" name={`uni`}></Item>
        </nav>
      </React.Fragment>
    )
  } else {
    navbar = (
      <div style={{ display: `flex`, justifyContent: `space-between` }}>
        <header>
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/blog/`}
            >
              {title}
            </Link>
          </h3>
        </header>

        <nav
        //   style={{
        //     display: `flex`,
        //     flex: 1,
        //     justifyContent: `center`,
        //     marginBottom: rhythm(1),
        //   }}
        >
          <Item to="/blog/" name={`home`}></Item>
          <Item to="/tags/fitness" name={`fitness`}></Item>
          <Item to="/tags/dev" name={`dev`}></Item>
          <Item to="/tags/uni" name={`uni`}></Item>
        </nav>
      </div>
    )
  }

  return <div>{navbar}</div>
}

export default Navbar
