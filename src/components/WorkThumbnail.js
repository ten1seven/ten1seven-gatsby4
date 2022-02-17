// src/components/WorkThumbnail.js

import React from "react"
import { Link } from "gatsby"
import { ImgixGatsbyImage } from "@imgix/gatsby"

let imageBase =
  process.env.NODE_ENV === "development"
    ? "http://ten1seven-gatsby.test"
    : "https://cms.ten1seven.com"

class WorkThumbnail extends React.Component {
  render() {
    let thumb = this.props.thumbnail
    let imagePath = thumb.work.thumbnail.sourceUrl.replace(
      `${imageBase}/wp-content/uploads/`,
      ""
    )

    return (
      <li key={this.props.index}>
        <Link className="group block relative no-underline" to={thumb.uri}>
          <ImgixGatsbyImage
            alt=""
            className=""
            aspectRatio={4 / 3}
            src={`https://ten1seven.imgix.net/${imagePath}`}
            imgixParams={{
              auto: "format,compress",
              fit: "crop",
              crop: "top,center",
            }}
            layout="constrained"
          />
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
