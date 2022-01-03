import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    // const siteTitle = "Gatsby Starter Personal Website"
    const { data, location } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hi, I'm Zia! Welcome to my blog!{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>
          This is my place to collate all the interesting things I want to talk
          about. I am a :
        </p>
        <ul>
          <li>
            Developer currently working at ScanmarQED in the City of London
          </li>
          <li>
            Calisthenics athlete working towards skills such as the front lever
            and planche
          </li>
          <li>
            Student of Maths with a Masters in Mathametics from the University
            of Nottingham. I studied a lot of pure and mathematical physics. I'd
            like to say I spend my free time reading up on topics like Category
            Theory, but that just wouldn't be entirely true
          </li>
        </ul>
        <p>
          I like to write about all these things and more. Giving insights and
          advice where I can to help people to where they want to be faster!
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
