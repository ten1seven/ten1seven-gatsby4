import React from "react"
import TagList from "../components/TagList.js"

export default {
  component: TagList,
  title: "Tag List",
}
const Template = args => <TagList {...args} />

export const Default = Template.bind({})
Default.args = {
  tags: [
    {
      "node": {
        "name": "ASP.NET",
        "count": 2,
        "uri": "/tag/asp/"
      }
    },
    {
      "node": {
        "name": "CSS",
        "count": 24,
        "uri": "/tag/css/"
      }
    },
    {
      "node": {
        "name": "Custom CMS",
        "count": 10,
        "uri": "/tag/custom-cms/"
      }
    },
    {
      "node": {
        "name": "Design",
        "count": 24,
        "uri": "/tag/design/"
      }
    },
    {
      "node": {
        "name": "HTML",
        "count": 24,
        "uri": "/tag/html/"
      }
    },
    {
      "node": {
        "name": "JavaScript",
        "count": 9,
        "uri": "/tag/javascript/"
      }
    },
    {
      "node": {
        "name": "PHP",
        "count": 12,
        "uri": "/tag/php/"
      }
    },
    {
      "node": {
        "name": "WordPress",
        "count": 4,
        "uri": "/tag/wordpress/"
      }
    }
  ]
};
