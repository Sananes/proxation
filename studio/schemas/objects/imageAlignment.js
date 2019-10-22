export default {
  name: "imageAlignment",
  type: "string",
  title: "Image alignment",
  options: {
    list: [{ title: "Right", value: "right" }, { title: "Left", value: "left" }]
  },
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
