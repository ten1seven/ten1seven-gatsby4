// src/pages/about.js

import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo.js"
import Layout from "../components/Layout.js"
import PageTitle from "../components/PageTitle.js"
import PageIntro from "../components/PageIntro.js"
import parse from "html-react-parser"

const AboutPageTemplate = ({ data }) => (
  <Layout>
    <Seo title={data.wpPage.title} />

    <PageTitle link="/" breadcrumb="Home" title={data.wpPage.title} />
    <PageIntro intro={data.wpPage.page.intro} />

    {!!data.wpPage.page.content && <div className="wysiwyg">{parse(data.wpPage.page.content)}</div>}
  </Layout>
)

export default AboutPageTemplate

export const query = graphql`
  query {
    wpPage(slug: { eq: "about" }) {
      id
      title
      page {
        intro
        content
      }
    }
  }
`
