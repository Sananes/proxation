export default {
  title: "Nav item",
  name: "link",
  type: "object",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      name: "navLink",
      type: "linkReference"
    },
    {
      title: "External",
      name: "external",
      type: "url",
      description: "URL that allows relative URLs",
      validation: Rule => Rule.uri({ allowRelative: true })
    }
  ],
  preview: {
    select: {
      title: "name"
    }
  }
};
