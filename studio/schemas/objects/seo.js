export default {
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    { title: "Title Tag", name: "title", type: "string" },
    { name: "description", title: "Meta Description", type: "text" },
    { name: "image", title: "Meta Image", type: "image" }
  ],
  options: { collapsible: true, collapsed: true }
};
