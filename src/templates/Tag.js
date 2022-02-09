// src/templates/Tag.js

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout.js"
import Seo from "../components/Seo.js"
import PageTitle from "../components/PageTitle.js"
import TagList from "../components/TagList.js"
import WorkThumbnails from "../components/WorkThumbnails.js"
import nl2br from "react-nl2br"

const PageTemplate = ({ data }) => (
  <Layout>
    <Seo title={data.wpTag.name} />

    <PageTitle link="/work/" breadcrumb="Work" title={data.wpTag.name} />

    {!!data.wpTag.description && <p className="my-8">{nl2br(data.wpTag.description)}</p>}

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
