export default {
  title: "Nav item",
  name: "link",
  type: "object",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      name: "navLink",
      type: "linkReference"
    }
  ],
  preview: {
    select: {
      title: "name"
    }
  }
};
