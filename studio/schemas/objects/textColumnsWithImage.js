export default {
  name: "textColumnsWithImage",
  title: "Text columns with image",
  type: "document",
  fields: [
    { title: "Heading", name: "heading", type: "heading" },
    {
      title: "Section columns",
      name: "sectionColumns",
      type: "string",
      options: {
        list: [
          { title: "1 Columns", value: "1" },
          { title: "2 Columns", value: "2" },
          { title: "3 Columns", value: "3" },
          { title: "4 Columns", value: "4" }
        ]
      }
    },
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
