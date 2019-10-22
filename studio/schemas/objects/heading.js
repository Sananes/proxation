export default {
  name: "heading",
  type: "object",
  fields: [
    {
      title: "Caption",
      name: "caption",
      type: "string"
    },
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Subheading",
      name: "subHeading",
      type: "blockContent"
    }
  ],
  options: { collapsible: true, collapsed: false }
};
