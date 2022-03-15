// src/templates/Work.js

import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "gatsby-plugin-wpgraphql-seo"
import Layout from "../components/Layout.js"
import PageTitle from "../components/PageTitle.js"
import parse from "html-react-parser"

const WorkTemplate = ({ data }) => (
  <Layout>
    <Seo post={data.wpWork} />

    <PageTitle link="/work/" breadcrumb="Work" title={data.wpWork.title} />

    <div className="work-detail">
      {!!data.wpWork.work.description && (
        <div className="work-detail__desc wysiwyg">
          {parse(data.wpWork.work.description)}
        </div>
      )}

      <div className="work-detail__client pr-4 text-base">
        <h2 className="font-bold text-gray-medium">Client</h2>
        <p>{data.wpWork.work.client}</p>

        {data.wpWork.work.website && data.wpWork.work.displayUrl && (
          <>
            <h2 className="font-bold mt-4 text-gray-medium">Website</h2>
            <p>
              <a
                className="block overflow-ellipsis overflow-hidden whitespace-nowrap"
                href={data.wpWork.work.website}
              >
                {data.wpWork.work.displayUrl}
              </a>
            </p>
          </>
        )}
      </div>

      <div className="work-detail__tags pr-4 text-base">
        <h2 className="font-bold text-gray-medium">Tags</h2>
        <ul>
          {data.wpWork.tags.nodes.map(tag => {
            return (
              <li key={tag.uri}>
                <Link to={"/work" + tag.uri}>
                  <span>{parse(tag.name)}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>

    <h2 className="sr-only">Images</h2>
    <ul className="work-screenshots">
      {data.wpWork.work.images.map((screenshot, index) => {
        const image = getImage(screenshot.image.localFile)

        return (
          <li className="border-t-2 border-gray-light my-8 pt-8" key={index}>
            <GatsbyImage className="w-full" image={image} alt={screenshot.image.altText} />
          </li>
        )
      })}
    </ul>
  </Layout>
)

export default WorkTemplate

export const query = graphql`
  query ($id: String!) {
    wpWork(id: { eq: $id }) {
      title
      work {
        client
        description
        displayUrl
        website
        images {
          image {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  width: 820
                )
              }
            }
          }
        }
      }
      tags {
        nodes {
          name
          uri
        }
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
  }
`
