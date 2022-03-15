import React from "react"
import { graphql } from "gatsby"

import Wordmark from "../components/Wordmark.js"

export default {
  component: Wordmark,
  title: "Wordmark",
}
const Template = args => <a href="#" className="wordmark"><Wordmark /></a>

export const Default = Template.bind({})
