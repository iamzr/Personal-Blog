import React from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import Navbar from "./navbar"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {/* <header>{header}</header> */}
          <Navbar location={location} title={title}></Navbar>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()} Zia Rehman | Hosted on{" "}
          <a href="https://www.netlify.com">Netlify</a> | Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
