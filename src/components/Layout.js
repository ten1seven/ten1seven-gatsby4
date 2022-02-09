// src/components/Layout.js

import React from "react"
import { Link } from "gatsby"
import favicon from "../images/icon.png"
import Helmet from "react-helmet"
import WordMark from "../components/Wordmark.js"
import NavLink from "../components/NavLink.js"
import "what-input"
import "@fontsource/khula/300.css"
import "@fontsource/khula/400.css"
import "@fontsource/khula/700.css"

const Layout = ({ isFrontPage, children }) => {
  return (
    <div className="max-w-900 m-auto" data-is-root-path={isFrontPage}>
      <Helmet>
        <link rel="icon" href={favicon} />
        <title>Ten 1 Seven Studio</title>
      </Helmet>

      <header className="flex flex-col sm:flex-row">
        {isFrontPage ? (
          <h1 className="wordmark">
            <WordMark />
          </h1>
        ) : (
          <Link className="wordmark" to="/">
            <WordMark />
          </Link>
        )}

        <nav className="
          flex
          justify-center sm:justify-between
          sm:flex-grow
          mb-4 sm:mb-0">
          <NavLink link="/work/" title="Work" />
          <NavLink link="/services/" title="Services" />
          <NavLink link="/about/" title="About" />
        </nav>
      </header>

      <main className="
        bg-white
        p-6 sm:p-8 md:p-10">{children}</main>

      <footer className="
        footer
        font-sans
        pt-4
        px-6 sm:px-0
        text-gray-medium
        text-xs">
        <p className="
          border-t-2 sm:border-t-0
          border-gray-light
          pt-4 sm:pt-0
          md:flex">
          <Link className="pr-4" to="/">Home</Link>
          <Link className="pr-4" to="/work/">Work</Link>
          <Link className="pr-4" to="/services/">Services</Link>
          <Link className="pr-4" to="/about/">About</Link>
        </p>

        <p className="mt-4 md:mt-0 md:text-right">
          <Link className="font-bold" to="/">Ten 1 Seven Studio</Link> is located in{" "}
          <a className="font-bold" href="https://en.wikipedia.org/wiki/Longmont,_CO">
            Longmont, Colorado
          </a>
          .
          <br />
          Copyright &copy; 2002 - {new Date().getFullYear()}. All rights
          reserved.
        </p>
      </footer>
    </div>
  )
}

export default Layout
