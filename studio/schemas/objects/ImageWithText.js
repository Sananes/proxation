export default {
  name: "imageWithText",
  title: "Text with Image",
  type: "document",
  fields: [
    { title: "Image", name: "image", type: "figure" },
    { title: "Image alignment", name: "imageAlignment", type: "imageAlignment" },
    { title: "Heading", name: "heading", type: "heading" },
    { title: "Button", name: "button", type: "button" },
    { name: "sectionColor", type: "sectionColor" }
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
