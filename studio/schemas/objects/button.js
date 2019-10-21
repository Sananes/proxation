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
      description: "Make sure to provide a / for relative URLs",
      uri: {
        allowRelative: true
      }
    },
    { title: "Text", name: "text", type: "string" }
  ]
};
