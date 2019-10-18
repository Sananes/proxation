export default {
  name: "opacityOverlay",
  title: "Overlay",
  type: "object",
  fields: [
    {
      title: "Enable overlay",
      name: "overlay",
      type: "boolean",
      options: {
        layout: "checkbox"
      }
    },
    {
      name: "overlayColor",
      type: "color",
      default: "#000",
      title: "Overlay color"
    },
    {
      name: "overlayOpacity",
      title: "Opacity",
      type: "number",
      options: {
        range: { min: 0, max: 100, step: 10 }
      }
    }
  ]
};
