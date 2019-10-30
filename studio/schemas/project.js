export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    { name: "seo", type: "seo", title: "Seo" },
    {
      name: "title",
      title: "Title",
      type: "string" // used to be 'string'
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Some frontend will require a slug to be set to be able to show the project",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "projectLink",
      title: "Project Link",
      type: "url"
    },
    {
      name: "publishedAt",
      title: "Published at",
      description: "You can use this field to schedule projects where you show them",
      type: "datetime"
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text"
    },
    {
      name: "members",
      title: "Team Members",
      type: "array",
      of: [{ type: "projectMember" }]
    },
    {
      name: "startedAt",
      title: "Started at",
      type: "datetime"
    },
    {
      name: "endedAt",
      title: "Ended at",
      type: "datetime"
    },
    {
      name: "cardImage",
      title: "Card Image",
      type: "image"
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "mainImage"
    },
    {
      name: "type",
      title: "Type",
      type: "string"
    },
    {
      name: "services",
      title: "Services",
      description: "List of services that was required for this project",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags"
      }
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }]
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    },
    {
      name: "relatedProjects",
      title: "Related projects",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }]
    }
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      image: "mainImage"
    },
    prepare({ title = "No title", publishedAt, image }) {
      return {
        title,
        subtitle: publishedAt
          ? new Date(publishedAt).toLocaleDateString()
          : "Missing publishing date",
        media: image
      };
    }
  }
};
