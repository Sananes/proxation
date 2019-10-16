import project from "../project";

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
      preview: {
        select: {
          title: "project.title",
          media: "project.mainImage"
        }
      },
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
      type: "textColumnsWithImage"
    },
    {
      name: "support",
      title: "Section: We support you",
      type: "textWithImage"
    },
    {
      name: "sectionThree",
      title: "Section: What we offer",
      type: "sectionThreeHome"
    },
    {
      title: "Section: Contact",
      name: "sectionContact",
      type: "sectionContact"
    }
  ]
};
