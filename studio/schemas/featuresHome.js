export default {
  name: "featuresHome",
  title: "Features",
  type: "document",
  fields: [
    { title: "Heading", name: "heading", type: "heading" },
    {
      title: "Features",
      name: "features",
      type: "array",
      of: [
        {
          title: "Feature",
          type: "feature"
        }
      ]
    }
  ]
};
