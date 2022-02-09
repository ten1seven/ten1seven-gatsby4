// src/components/Seo.js

import React from "react"
import Helmet from "react-helmet"

class Seo extends React.Component {
  render() {
    return (
      <Helmet>
        <title>{!!this.props.title && this.props.title} | Ten 1 Seven Studio</title>
      </Helmet>
    )
  }
}

export default Seo