import link from "../objects/link";

export default {
  title: "Nav item",
  name: "headerNav",
  type: "object",
  fields: [
    {
      name: "link",
      type: "link"
    },
    {
      title: "Submenu",
      name: "submenu",
      type: "array",
      of: [{ ...link }]
    }
  ],
  preview: {
    select: {
      title: "link.name"
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title
      };
    }
  }
};
