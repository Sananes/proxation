export default {
  title: "Item",
  name: "textColumnsWithImageItem",
  type: "document",
  fields: [
    {
      title: "Image",
      name: "image",
      type: "figure"
    },
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Content",
      name: "content",
      type: "blockContent"
    },
    {
      title: "Button",
      name: "button",
      type: "button"
    }
  ],
  preview: {
    select: {
      title: "title",
      media: "image"
    }
  }
};
