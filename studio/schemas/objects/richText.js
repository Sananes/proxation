import heading from "./heading";
export default {
  name: "richText",
  title: "Rich Text",
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
      title: "Title size",
      name: "textSize",
      type: "string",
      options: {
        list: [
          { title: "Medium", value: "medium" },
          { title: "Small", value: "small" },
          { title: "Large", value: "large" }
        ],
        layout: "radio" // <-- defaults to 'dropdown'
      }
    },
    {
      title: "Body",
      name: "body",
      type: "blockContent"
    },
    {
      title: "Text alignment",
      name: "textAlign",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
          { title: "Center", value: "center" }
        ],
        layout: "radio" // <-- defaults to 'dropdown'
      }
    },
    { name: "sectionColor", type: "sectionColor" }
  ],
  options: {
    editModal: "dialog"
  }
};
