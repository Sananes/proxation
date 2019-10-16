import { MdSettings } from "react-icons/md";

export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  liveEdit: false,
  __experimental_actions: ["update", "publish" /* 'create', 'delete' */],
  icon: MdSettings,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags"
      }
    },
    {
      name: "author",
      title: "Author",
      type: "string"
    }
    // {
    //   title: "Header",
    //   name: "header",
    //   type: "document",
    //   fields: [
    //     {
    //       title: "Navigation",
    //       name: "headerNav",
    //       type: "array",
    //       of: [
    //         {
    //           title: "Nav item",
    //           name: "navItem",
    //           type: "document",
    //           fields: [
    //             {
    //               title: "Name",
    //               name: "name",
    //               type: "string"
    //             },
    //             {
    //               title: "Submenu",
    //               name: "submenu",
    //               type: "array",
    //               of: [
    //                 {
    //                   title: "Submenu",
    //                   name: "subMenu",
    //                   type: "object",
    //                   fields: [
    //                     {
    //                       title: "Name",
    //                       name: "name",
    //                       type: "string"
    //                     }
    //                   ]
    //                 }
    //               ]
    //             }
    //           ]
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   title: "Footer",
    //   name: "footer",
    //   type: "document",
    //   fields: [
    //     {
    //       title: "Groups",
    //       name: "footerGroups",
    //       type: "array",
    //       of: [
    //         {
    //           title: "Footer Group",
    //           name: "navItem",
    //           type: "object",
    //           fields: [
    //             {
    //               title: "Title",
    //               name: "title",
    //               type: "string"
    //             },
    //             {
    //               title: "Navigation",
    //               name: "group",
    //               type: "array",
    //               of: [
    //                 {
    //                   title: "Nav Item",
    //                   name: "nav",
    //                   type: "object",
    //                   fields: [
    //                     {
    //                       title: "Name",
    //                       name: "footer",
    //                       type: "string"
    //                     }
    //                   ]
    //                 }
    //               ]
    //             }
    //           ],
    //           prepare: {
    //             select: {
    //               title: "navItem.title"
    //             }
    //           }
    //         }
    //       ]
    //     }
    //   ]
    // }
  ]
};
