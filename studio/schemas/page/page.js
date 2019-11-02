export default {
  name: "page",
  title: "Page",
  type: "document",
  liveEdit: false,
  __experimental_actions: ["update", "publish", "create", "delete"],
  fields: [
    { name: "seo", title: "Seo", type: "seo" },
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Some frontend will require a slug to be set to be able to show the post",
      options: {
        source: "title"
      }
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    }
  ]
};
