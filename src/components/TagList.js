// src/components/TagList.js

import React from "react"
import { Link } from "gatsby"

class TagList extends React.Component {
  render() {
    return (
      <>
        <h2 className="sr-only">Tags</h2>
        <ul className="flex flex-wrap">
          {this.props.tags.map((tag, index) => {
            return (
              <li className="pr-3" key={index}>
                <Link
                  to={"/work" + tag.node.uri}
                  activeClassName="no-underline text-gray-medium pointer-events-none font-normal"
                >
                  {tag.node.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default TagList
