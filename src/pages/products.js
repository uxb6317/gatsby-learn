import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const products = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  console.log(products)

  return (
    <Layout>
      <section className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <article className="flex flex-col" key={product.id}>
            <Image
              className="h-56"
              fluid={product.image.fluid}
              alt={product.title}
            />
            <h3 className="text-xl capitalize mt-1 mb-3">
              {product.title} <span>${product.price}</span>
            </h3>
            <Link
              className="self-start bg-green-600 text-white px-2 py-1"
              to={`/products/${product.slug}`}
            >
              More detail
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        price
        slug
        title
        id
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default products
