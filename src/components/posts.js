import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const Posts = ({ posts }) => (
  <div style={{ margin: "20px 0 40px" }}>
    {posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      const tags = node.frontmatter.tags ? node.frontmatter.tags : []
      return (
        <div key={node.fields.slug}>
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link style={{ boxShadow: `none` }} to={`/blog${node.fields.slug}`}>
              {title}
            </Link>
          </h3>
          <small>
            {tags.map(tag => {
              return (
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    marginRight: `0.4em`,
                  }}
                  to={`/tags/${tag}`}
                >
                  #{tag}
                </Link>
              )
            })}
          </small>
          {tags.length !== 0 ? "-  " : ""}
          <small>{node.frontmatter.date}</small>
          <p
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
        </div>
      )
    })}
  </div>
)

export default Posts
