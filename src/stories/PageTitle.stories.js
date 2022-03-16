import React from "react"
import PageTitle from "../components/PageTitle.js"

export default {
  component: PageTitle,
  title: "Page Title",
}
const Template = args => <PageTitle {...args} />

export const Default = Template.bind({})
Default.args = {
  link: '#',
  breadcrumb: 'Home',
  title: 'About'
}
