export default {
  name: "linkReference",
  title: "Link",
  type: "object",
  fields: [
    {
      name: "reference",
      type: "reference",
      weak: true,
      title: "Link",
      to: [{ type: "project" }, { type: "landingPage" }, { type: "post" }, { type: "page" }]
    }
  ],
  preview: {
    select: {
      title: "title"
    }
  }
};
