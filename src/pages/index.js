// src/pages/index.js

import React from "react"
import { graphql } from "gatsby"
import Seo from "gatsby-plugin-wpgraphql-seo"
import Layout from "../components/Layout.js"
import WorkThumbnails from "../components/WorkThumbnails.js"
import parse from "html-react-parser"

const HomePageTemplate = ({ data }) => (
  <Layout>
    <Seo post={data.wpPage} />

    <WorkThumbnails
      classes="
      homepage-work
      border-b
      border-gray-light
      my-8
      pb-8"
      thumbnails={data.allWpWork.edges}
    />

    {!!data.wpPage.page.content && (
      <div className="wysiwyg">{parse(data.wpPage.page.content)}</div>
    )}
  </Layout>
)

export default HomePageTemplate

export const query = graphql`
  query {
    wpPage(isFrontPage: { eq: true }) {
      id
      title
      uri
      page {
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
    }
    allWpWork(sort: { fields: title, order: ASC }, limit: 4) {
      edges {
        node {
          title
          uri
          work {
            thumbnail {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    height: 430
                    width: 520
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP]
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`
