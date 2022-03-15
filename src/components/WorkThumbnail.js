// src/components/WorkThumbnail.js

import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

class WorkThumbnail extends React.Component {
  render() {
    const thumb = this.props.thumbnail
    const image = getImage(thumb.work.thumbnail.localFile)

    return (
      <li key={this.props.index}>
        <Link className="group block relative no-underline" to={thumb.uri}>
          <GatsbyImage image={image} alt={thumb.work.thumbnail.altText} />

          <span
            className="
            absolute
            bottom-0
            left-0
            w-full
            text-white
            text-sm
            bg-black
            bg-opacity-70
            block
            leading-none
            p-4
            pb-3
            group-hover:bg-opacity-90
            group-hover:pb-6
            whitespace-nowrap
            overflow-ellipsis
            overflow-hidden
            transition-all
            duration-300
            ease-in-out
            z-20"
          >
            {thumb.title}
          </span>
          <i
            className="
            absolute
            shadow-inner
            bg-white
            bg-opacity-20
            group-hover:bg-opacity-0
            inset-0
            transition-all
            duration-300
            ease-in-out
            z-10"
          ></i>
        </Link>
      </li>
    )
  }
}

export default WorkThumbnail
