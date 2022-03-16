import React from "react"
import PageIntro from "../components/PageIntro.js"

export default {
  component: PageIntro,
  title: "Page Intro",
}
const Template = args => <PageIntro {...args} />

export const Default = Template.bind({})
Default.args = {
  intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}
