// src/components/PageTitle.js

import React from "react"
import { Link } from "gatsby"

class PageTitle extends React.Component {
  render() {
    return (
      <h1
        className="
        border-b-2
        border-gray-light
        leading-none
        mb-8
        pb-4
        text-2xl md:text-4xl
        text-red
        hover:text-gray-medium"
      >
        <Link
          className="
          text-gray-medium
          no-underline
          hover:underline"
          to={this.props.link}
        >
          {this.props.breadcrumb}
        </Link>{" "}
        <span className="text-gray-medium">/</span> {this.props.title}
      </h1>
    )
  }
}

export default PageTitle
