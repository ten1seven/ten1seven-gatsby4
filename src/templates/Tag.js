// src/templates/Tag.js

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout.js"
import Seo from "gatsby-plugin-wpgraphql-seo"
import PageTitle from "../components/PageTitle.js"
import TagList from "../components/TagList.js"
import WorkThumbnails from "../components/WorkThumbnails.js"
import nl2br from "react-nl2br"

const PageTemplate = ({ data }) => (
  <Layout>
    <Seo post={data.wpTag} />

    <PageTitle link="/work/" breadcrumb="Work" title={data.wpTag.name} />

    {!!data.wpTag.description && (
      <p className="my-8">{nl2br(data.wpTag.description)}</p>
    )}

    <TagList tags={data.allWpTag.edges} />

    <WorkThumbnails thumbnails={data.allWpWork.edges} classes="my-8" />
  </Layout>
)

export default PageTemplate

export const query = graphql`
  query ($id: String!) {
    wpTag(id: { eq: $id }) {
      name
      description
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
    allWpWork(
      filter: { tags: { nodes: { elemMatch: { id: { eq: $id } } } } }
      sort: { fields: title, order: ASC }
    ) {
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
