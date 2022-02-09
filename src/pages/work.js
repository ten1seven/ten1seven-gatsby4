// src/pages/work.js

import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo.js"
import Layout from "../components/Layout.js"
import PageTitle from "../components/PageTitle.js"
import PageIntro from "../components/PageIntro.js"
import WorkThumbnails from "../components/WorkThumbnails.js"
import TagList from "../components/TagList.js"
import parse from "html-react-parser"

const WorkPageTemplate = ({ data }) => (
  <Layout>
    <Seo title={data.wpPage.title} />

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
    }
    allWpTag(sort: {fields: name, order: ASC}) {
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
