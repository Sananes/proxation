import link from "./urlReference";

export default {
  title: "Button",
  name: "button",
  type: "object",
  options: {
    collapsible: true
  },
  fields: [
    {
      title: "Button URL",
      name: "url",
      type: "url",
      description: "URL that allows relative URLs",
      validation: Rule => Rule.uri({ allowRelative: true })
    },
    { title: "Text", name: "text", type: "string" }
  ]
};
