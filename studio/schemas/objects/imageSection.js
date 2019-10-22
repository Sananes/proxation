export default {
  name: "imageSection",
  title: "Image",
  type: "object",
  fields: [
    {
      title: "Image",
      name: "imageSection",
      type: "figure"
    },
    {
      title: "Contained",
      name: "contained",
      type: "boolean"
    }
  ],
  preview: {
    select: {
      title: "title"
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: "Full width Image",
        subtitle: title
      };
    }
  }
};
