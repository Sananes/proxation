import project from "../project";

export default {
  name: "kontakt",
  title: "Kontakt",
  type: "document",
  liveEdit: false,
  __experimental_actions: ["update", "publish" /* 'create', 'delete' */],
  fields: [
    {
      name: "seo",
      type: "seo"
    },
    { name: "title", title: "Title", type: "string" },
    { name: "subheading", title: "Body", type: "text" },
    {
      name: "projects",
      title: "Recent projects",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }],
      preview: {
        select: {
          title: "project.title",
          media: "project.mainImage"
        }
      },
      validation: Rule => Rule.required().min(1)
    },
    {
      name: "availability",
      title: "Availability",
      type: "string",
      options: {
        list: [
          { title: "Available", value: "available" },
          { title: "Busy", value: "busy" },
          { title: "Not available", value: "not-available" }
        ], // <-- predefined values
        layout: "radio" // <-- defaults to 'dropdown'
      }
    },
    { name: "notice", title: "Notice", type: "string" }
  ]
};
