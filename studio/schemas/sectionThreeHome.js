export default {
  name: "sectionThreeHome",
  title: "Items",
  type: "document",
  fields: [
    { title: "Heading", name: "heading", type: "heading" },
    {
      title: "List items",
      name: "items",
      type: "array",
      of: [
        {
          title: "Item",
          type: "textColumnsWithImageItem"
        }
      ]
    }
  ]
};
