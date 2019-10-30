export default {
  name: "social",
  title: "Social",
  type: "document",
  fields: [
    { name: "title", title: "Name", type: "string" },
    {
      name: "image",
      title: "Image",
      type: "figure"
    },
    { name: "link", title: "Link", type: "url" }
  ],
  preview: {
    select: {
      title: "title",
      media: "image"
    }
  }
};
