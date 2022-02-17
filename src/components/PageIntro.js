// src/components/PageIntro.js

import React from "react"
import nl2br from "react-nl2br"

class PageIntro extends React.Component {
  render() {
    return (
      <p
        className="
        border-b
        border-gray-light
        italic
        my-8
        pb-8
        text-xl"
      >
        {nl2br(this.props.intro)}
      </p>
    )
  }
}

export default PageIntro
