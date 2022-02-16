import React from "react"
// import { Link } from "gatsby"

class Results extends React.Component {
  render() {
    const data = this.props.data

    console.log(data)

    return (
      <>
        {!data.code && (
          <ul>
            {Object.keys(data).map((innerAttr, index) => {
              return (
                <li key={index} className="mt-4">
                  <span className="block text-sm uppercase">
                    {data[innerAttr].post_type}
                  </span>
                  <strong className="text-2xl">{data[innerAttr].title}</strong>
                </li>
              )
            })}
          </ul>
        )}
      </>
    )
  }
}

export default Results
