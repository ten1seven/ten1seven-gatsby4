// src/pages/services.js

import React from "react"
import { graphql } from "gatsby"
import Seo from "gatsby-plugin-wpgraphql-seo"
import Layout from "../components/Layout.js"
import PageTitle from "../components/PageTitle.js"
import PageIntro from "../components/PageIntro.js"
import parse from "html-react-parser"

const ServicesPageTemplate = ({ data }) => (
  <Layout>
    <Seo post={data.wpPage} />

    <PageTitle link="/" breadcrumb="Home" title={data.wpPage.title} />
    <PageIntro intro={data.wpPage.page.intro} />

    {!!data.wpPage.page.content && <>{parse(data.wpPage.page.content)}</>}

    <ul className="my-8">
      {data.wpPage.services.servicesList.map((service, index) => {
        return (
          <li
            key={index}
            className="service-grid border-b border-gray-light grid py-8"
          >
            <h2 className="mb-4 text-2xl md:pr-8">{service.serviceTitle}</h2>
            <div className="service-description">
              {parse(service.description)}
            </div>
          </li>
        )
      })}
    </ul>
  </Layout>
)

export default ServicesPageTemplate

export const query = graphql`
  query {
    wpPage(slug: { eq: "services" }) {
      id
      title
      page {
        intro
        content
      }
      seo {
        title
        metaDesc
        focuskw
        metaKeywords
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphTitle
        opengraphDescription
        opengraphImage {
          altText
          sourceUrl
          srcSet
        }
        twitterTitle
        twitterDescription
        twitterImage {
          altText
          sourceUrl
          srcSet
        }
        canonical
        cornerstone
        schema {
          articleType
          pageType
          raw
        }
      }
      services {
        servicesList {
          serviceTitle
          description
        }
      }
    }
  }
`
