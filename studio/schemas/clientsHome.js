export default {
  name: "clientsHome",
  title: "Clients",
  type: "document",
  fields: [
    { title: "Title", name: "title", type: "string" },
    {
      title: "Clients",
      name: "clients",
      type: "array",
      of: [
        {
          title: "Client",
          type: "client"
        }
      ]
    }
  ]
};
