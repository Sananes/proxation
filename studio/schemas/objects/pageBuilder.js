import imageSection from "./imageSection";

export default {
  name: "pageBuilder",
  title: "Page Builder",
  type: "array",
  of: [
    { type: "hero", name: "hero", title: "Hero" },
    { type: "textColumnsWithImage" },
    { type: "imageWithText" },
    { ...imageSection }
  ],
  options: {
    editModal: "dialog"
  }
};
