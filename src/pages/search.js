// src/pages/search.js

import React from "react"

import Layout from "../components/Layout.js"
import PageTitle from "../components/PageTitle.js"
import Results from "../components/SearchResults.js"

let fetchBase =
  process.env.NODE_ENV === "development"
    ? "http://ten1seven-gatsby.test"
    : "https://cms.ten1seven.com"

export default class Search extends React.Component {
  state = {
    query: "",
    results: {},
    loading: false,
  }

  handleInputChange = value => {
    this.setState({
      query: value,
      loading: true,
    })

    if (value.length >= 3) {
      let fetchUrl = `${fetchBase}/wp-json/ten1seven/v1/search?s=${value}`

      fetch(fetchUrl)
        .then(response => response.json()) // parse JSON from request
        .then(resultData => {
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
            autoComplete="off"
            className="w-full leading-none rounded-sm border border-gray-light p-4 pb-2 text-4xl font-khula font-light"
            type="text"
            name="query"
            value={this.state.query}
            onChange={event => this.handleInputChange(event.target.value)}
          />
        </label>

        <p>There are {this.state.results.length || "no"} results.</p>

        <p>Loading {this.state.loading ? "yes" : "no"}</p>

        <Results data={this.state.results} />
      </Layout>
    )
  }
}

// export default Search
