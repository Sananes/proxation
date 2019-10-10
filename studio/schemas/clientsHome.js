export default {
  name: "clientsHome",
  title: "Clients",
  type: "document",
  fields: [
    { title: "Heading", name: "heading", type: "heading" },
    {
      name: "clientsList",
      title: "Client List",
      type: "array",
      of: [
        {
          name: "client",
          title: "Client",
          type: "figure"
        }
      ],
      preview: {
        select: {
          title: "client.title",
          media: "client.image"
        }
      }
    }
  ]
};
