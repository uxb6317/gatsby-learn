import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <div>
      <Link to="/products">Products</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/examples">examples</Link>
      <Link to="/images">images</Link>
    </div>
  )
}

export default Nav
