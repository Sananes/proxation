export default {
  name: "pageHome",
  title: "Homepage",
  type: "document",
  liveEdit: false,
  __experimental_actions: ["update", "publish" /* 'create', 'delete' */],
  fields: [
    {
      name: "seo",
      type: "seo"
    },
    { name: "title", title: "Title", type: "string" },
    {
      name: "hero",
      title: "Hero",
      type: "heroHome"
    },
    {
      name: "projects",
      title: "Section: Showcase Projects",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }],
      validation: Rule => Rule.required().min(2)
    },
    {
      name: "clients",
      title: "Section: Clients",
      type: "clientsHome"
    },
    {
      name: "features",
      title: "Section: What main features you offer",
      type: "featuresHome"
    },
    {
      name: "support",
      title: "Section: We support you",
      type: "textImageBlock"
    },
    {
      name: "sectionThree",
      title: "Section: What we offer",
      type: "sectionThreeHome"
    }
  ]
};
