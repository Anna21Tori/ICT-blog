import React from "react"
import Nav from "./nav"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <Header>
        <Nav></Nav>
      </Header>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
