import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className="max-w-screen-lg mx-auto mt-20">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
