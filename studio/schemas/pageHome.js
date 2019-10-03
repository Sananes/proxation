export default {
  name: "pageHome",
  title: "Homepage",
  type: "document",
  liveEdit: false,
  __experimental_actions: ["update", "publish" /* 'create', 'delete' */],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    },
    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }],
      validation: Rule => Rule.required().min(2)
    },
    {
      name: "features",
      title: "Features",
      type: "featuresHome"
    }
  ]
};
