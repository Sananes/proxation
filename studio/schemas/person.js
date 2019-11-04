import { MdPerson } from "react-icons/md";

export default {
  name: "person",
  title: "Person",
  type: "document",
  icon: MdPerson,
  liveEdit: false,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Some frontend will require a slug to be set to be able to show the person",
      options: {
        source: "name",
        maxLength: 96
      }
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Role in the company. E.g. Developer"
    },
    {
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: []
        }
      ]
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      options: {
        layout: "radio",
        list: [
          { title: "Designer", value: "designer" },
          { title: "Developer", value: "developer" },
          { title: "Project Manager", value: "projectManager" },
          { title: "Founder", value: "founder" },
          { title: "Co-Founder", value: "co-founder" },
          { title: "Marketing", value: "marketing" }
        ]
      }
    }
  ],
  preview: {
    select: {
      title: "name",
      media: "image"
    }
  }
};
