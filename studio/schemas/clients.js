export default {
  name: "client",
  title: "Client",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "image",
      title: "Image",
      type: "figure"
    }
  ],
  preview: {
    select: {
      title: "title",
      media: "image"
    }
  }
};
