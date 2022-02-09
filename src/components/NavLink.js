// src/components/NavLink.js

import React from "react"
import { Link } from "gatsby"

class NavLink extends React.Component {
  render() {
    return (
      <Link
        className="
          navigation-link
          sm:flex-grow
          font-normal
          sm:grid
          px-6 sm:px-0
          sm:place-items-center
          sm:rounded-t-sm
          text-lg
          text-gray-medium"
        to={this.props.link}
        activeClassName="active"
        partiallyActive={true}>
          {this.props.title}
        </Link>
    )
  }
}

export default NavLink
