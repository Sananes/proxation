export default {
  name: "clientsHome",
  title: "Clients",
  type: "object",
  fields: [
    { title: "Heading", name: "heading", type: "heading" },
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
