export default {
  name: "imageWithText",
  title: "Text with Image",
  type: "document",
  fields: [
    { title: "Image", name: "image", type: "figure" },
    { title: "Desktop image alignment", name: "imageAlignment", type: "imageAlignment" },
    {
      name: "mobileImageAlignment",
      type: "string",
      title: "Mobile image alignment",
      options: {
        list: [{ title: "Above", value: "above" }, { title: "Below", value: "below" }]
      }
    },
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
