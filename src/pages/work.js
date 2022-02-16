// src/pages/work.js

import React from "react"
import { graphql } from "gatsby"
import Seo from "gatsby-plugin-wpgraphql-seo"
import Layout from "../components/Layout.js"
import PageTitle from "../components/PageTitle.js"
import PageIntro from "../components/PageIntro.js"
import WorkThumbnails from "../components/WorkThumbnails.js"
import TagList from "../components/TagList.js"
import parse from "html-react-parser"

const WorkPageTemplate = ({ data }) => (
  <Layout>
    <Seo post={data.wpPage} />

    <PageTitle link="/" breadcrumb="Home" title={data.wpPage.title} />
    <PageIntro intro={data.wpPage.page.intro} />

    {!!data.wpPage.content && <>{parse(data.wpPage.page.content)}</>}

    <TagList tags={data.allWpTag.edges} />

    <WorkThumbnails thumbnails={data.allWpWork.edges} classes="my-8" />
  </Layout>
)

export default WorkPageTemplate

export const query = graphql`
  query {
    wpPage(slug: { eq: "work" }) {
      id
      title
      uri
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
    }
    allWpTag(sort: { fields: name, order: ASC }) {
      edges {
        node {
          name
          count
          uri
        }
      }
    }
    allWpWork(sort: { fields: title, order: ASC }) {
      edges {
        node {
          title
          uri
          work {
            thumbnail {
              sourceUrl
            }
          }
        }
      }
    }
  }
`
