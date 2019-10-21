import headerNav from "../objects/headerNav";

export default {
  name: "navigationSettings",
  title: "Navigation",
  type: "document",
  fields: [
    {
      name: "headerNav",
      title: "Header Nav",
      type: "array",
      of: [{ ...headerNav }]
    }
  ],
  preview: {
    select: {
      title: "headerNav.link.name",
      media: "image"
    }
  }
};
