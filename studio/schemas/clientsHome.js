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
      of: [{ name: "client", title: "Client", type: "figure" }],
      validation: Rule => Rule.required().min(3)
    }
  ]
};
