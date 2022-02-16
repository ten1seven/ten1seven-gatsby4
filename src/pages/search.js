// src/pages/search.js

import React from "react"
// import { Link } from "gatsby"

import Seo from "../components/Seo.js"
import Layout from "../components/Layout.js"
import PageTitle from "../components/PageTitle.js"

export default class Search extends React.Component {
  state = {
    query: "",
    results: {},
  }

  handleInputChange = event => {
    const value = event.target.value

    this.setState({
      query: value,
    })

    if (value.length >= 3) {
      fetch(
        `https://cms.ten1seven.com/wp-json/ten1seven/v1/search?s=${this.state.query}`
      )
        .then(response => response.json()) // parse JSON from request
        .then(resultData => {
          console.log(resultData)

          this.setState({
            results: resultData,
          })
        })
    } else {
      this.setState({
        results: {},
      })
    }
  }

  render() {
    return (
      <Layout>
        <Seo title="Search" />

        <PageTitle link="/" breadcrumb="Home" title="Search" />

        <label className="search-label" htmlFor="search-input">
          <input
            className="w-full rounded-sm border border-gray-light p-4 pb-3 text-4xl font-khula font-light"
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </label>

        <p>There are {this.state.results.length || "no"} results.</p>
      </Layout>
    )
  }
}

// export default Search
