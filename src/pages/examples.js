import React from "react"
import Header from "../examples/Header"
import Layout from "../components/Layout"
import HeaderStatic from "../examples/HeaderStatic"
import { graphql } from "gatsby"

const examples = prop => {
  console.log(prop)

  return (
    <Layout>
      <Header />
      <HeaderStatic />
    </Layout>
  )
}

export const query = graphql`
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
export default examples
