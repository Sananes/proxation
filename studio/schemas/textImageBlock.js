export default {
  name: "textImageBlock",
  title: "Text with Image",
  type: "document",
  fields: [
    { title: "Heading", name: "heading", type: "heading" },
    { title: "Image", name: "image", type: "figure" },
    { title: "Button", name: "button", type: "button" }
  ],
  preview: {
    select: {
      title: "heading.title"
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: "Text with Image",
        subtitle: title
      };
    }
  }
};
