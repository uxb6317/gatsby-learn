import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const fetchData = graphql`
  {
    site {
      info: siteMetadata {
        title
        books
        person {
          name
          age
        }
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(fetchData)

  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default Header
