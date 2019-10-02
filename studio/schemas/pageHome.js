export default {
  name: "pageHome",
  title: "Homepage",
  type: "document",
  liveEdit: false,
  __experimental_actions: ["update", "publish" /* 'create', 'delete' */],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    },
    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }],
      validation: Rule => Rule.required().min(2)
    }
    // {
    //   title: "Features",
    //   name: "features",
    //   type: "array",
    //   of: [
    //     {
    //       title: "Feature",
    //       type: "document",
    //       fields: [
    //         {
    //           title: "Icon",
    //           name: "icon",
    //           type: "image"
    //         },
    //         {
    //           title: "Title",
    //           name: "value",
    //           type: "string"
    //         },
    //         {
    //           title: "Content",
    //           name: "content",
    //           type: "string"
    //         }
    //       ]
    //     }
    //   ]
    // }
  ]
};
