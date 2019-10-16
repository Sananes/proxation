export default {
  name: "textColumnsWithImage",
  title: "Text columns with image",
  type: "document",
  fields: [
    { title: "Heading", name: "heading", type: "heading" },
    {
      title: "Items",
      name: "items",
      type: "array",
      of: [
        {
          title: "Items",
          type: "textColumnsWithImageItem"
        }
      ]
    },
    {
      title: "Section colour",
      name: "sectionColor",
      type: "string",
      options: {
        list: [
          { title: "None", value: "none" },
          { title: "Dark", value: "dark" },
          { title: "Off-White", value: "highlight" }
        ]
      }
    }
  ],
  preview: {
    select: {
      title: "heading.title"
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: "Text columns with image",
        subtitle: title
      };
    }
  }
};
