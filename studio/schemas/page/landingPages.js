import pageBuilder from "../objects/pageBuilder";

export default {
  name: "landingPage",
  title: "Landing Page",
  type: "document",
  fields: [
    { name: "seo", title: "SEO", type: "seo" },
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
        source: "title",
        maxLength: 96
      }
    },
    {
      title: "Page Builder",
      name: "pageBuilder",
      ...pageBuilder
    }
  ],
  preview: {
    select: {
      title: "title",
      media: "image"
    }
  }
};
