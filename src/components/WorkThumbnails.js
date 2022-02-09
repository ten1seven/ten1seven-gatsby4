// src/components/WorkThumbnails.js

import React from "react"
import WorkThumbnail from "../components/WorkThumbnail.js"

class WorkThumbnails extends React.Component {
  render() {
    return (
      <ul className={"work-grid " + this.props.classes}>
        {this.props.thumbnails.map((work, index) => {
          return <WorkThumbnail thumbnail={work.node} index={index} />
        })}
      </ul>
    )
  }
}

export default WorkThumbnails
