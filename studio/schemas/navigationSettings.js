export default {
  name: "navigationSettings",
  title: "Navigation",
  type: "document",
  fields: [
    {
      title: "Header",
      name: "headerNav",
      type: "array",
      of: [
        {
          title: "Nav item",
          name: "navItem",
          type: "document",
          fields: [
            {
              title: "Name",
              name: "name",
              type: "string"
            },
            {
              title: "Submenu",
              name: "submenu",
              type: "array",
              of: [
                {
                  title: "Submenu",
                  name: "subMenu",
                  type: "object",
                  fields: [
                    {
                      title: "Name",
                      name: "name",
                      type: "string"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Footer",
      name: "footerNav",
      description: "To set footer links, they are all set as groups of footers",
      type: "array",
      of: [
        {
          title: "Footer Group",
          name: "navItem",
          type: "object",
          fields: [
            {
              title: "Title",
              name: "title",
              type: "string"
            },
            {
              title: "Navigation",
              name: "group",
              type: "array",
              of: [
                {
                  title: "Nav Item",
                  name: "nav",
                  type: "object",
                  fields: [
                    {
                      title: "Name",
                      name: "footer",
                      type: "string"
                    }
                  ]
                }
              ]
            }
          ],
          prepare: {
            select: {
              title: "navItem.title"
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "title",
      media: "image"
    }
  }
};
