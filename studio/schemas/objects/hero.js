export default {
  name: "hero",
  title: "Hero Settings",
  type: "object",
  fields: [
    {
      title: "Caption",
      name: "caption",
      type: "string"
    },
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Subheading",
      name: "subheading",
      type: "text"
    },
    {
      title: "Text color",
      type: "string",
      name: "textColor",
      validation: Rule => Rule.required(),
      options: {
        list: [{ title: "Dark", value: "dark" }, { title: "Light", value: "light", default: true }]
      }
    },
    {
      title: "Text position",
      type: "string",
      name: "position",
      options: {
        list: [
          {
            title: "Top left",
            value: "topLeft"
          },
          {
            title: "Top center",
            value: "topCenter"
          },
          {
            title: "Top right",
            value: "topRight"
          },
          {
            title: "Center left",
            value: "centerLeft"
          },
          {
            title: "Center middle",
            value: "centerMiddle"
          },
          {
            title: "Center right",
            value: "centerRight"
          },
          {
            title: "Bottom left",
            value: "bottomLeft"
          },
          {
            title: "Bottom middle",
            value: "bottomMiddle"
          },
          {
            title: "Bottom right",
            value: "bottomRight"
          }
        ]
      }
    },
    {
      title: "Image",
      name: "image",
      type: "figure"
    },
    { title: "Image overlay", name: "overlay", type: "opacityOverlay" },
    {
      title: "Button",
      name: "button",
      type: "button"
    },
    {
      name: "sectionColor",
      type: "sectionColor"
    }
  ],
  preview: {
    select: {
      title: "title"
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: "Hero",
        subtitle: title
      };
    }
  }
};
