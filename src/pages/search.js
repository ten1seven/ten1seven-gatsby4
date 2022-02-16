// src/pages/search.js

import React from "react"
// import { Link } from "gatsby"

// import Seo from "gatsby-plugin-wpgraphql-seo"
import Layout from "../components/Layout.js"
import PageTitle from "../components/PageTitle.js"

export default class Search extends React.Component {
  state = {
    query: "",
    results: {},
    loading: false,
  }

  handleInputChange = event => {
    const value = event.target.value

    this.setState({
      query: value,
      loading: true,
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
            loading: false,
          })
        })
    } else {
      this.setState({
        results: {},
        loading: false,
      })
    }
  }

  render() {
    return (
      <Layout>
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

        <p>Loading {this.state.loading ? "yes" : "no"}</p>
      </Layout>
    )
  }
}

// export default Search
