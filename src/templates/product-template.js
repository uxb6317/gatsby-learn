import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/Layout"

const ComponentName = ({ data }) => {
  const {
    product: {
      price,
      title,
      image: { fixed },
      info: { info },
    },
  } = data

  return (
    <Layout>
      <div className="text-center">
        <Link to="/products">Back to products</Link>
      </div>
      <section className="flex mt-10">
        <Image className="flex-shrink-0 mr-6" fixed={fixed} alt={title} />
        <div>
          <h3 className="text-xl mb-4">
            {title} <span>${price}</span>
          </h3>
          <p>{info}</p>
          <button className="mt-6">Add to Cart</button>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      price
      title
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ComponentName
