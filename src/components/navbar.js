import { Link } from "gatsby"
import React from "react"
import { rhythm } from "../utils/typography"

function Item({ to, name }) {
  return (
    <Link style={{ boxShadow: `none`, marginRight: "1em" }} to={to}>
      {name}
    </Link>
  )
}

function Navbar() {
  return (
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
      <Item to="/tags/dev" name={`dev.`}></Item>
      <Item to="/tags/uni" name={`uni`}></Item>
    </nav>
  )
}

export default Navbar
