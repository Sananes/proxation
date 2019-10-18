export default {
  name: "pageBuilder",
  title: "Page Builder",
  type: "array",
  of: [
    { type: "hero", name: "hero", title: "Hero" },
    { type: "textColumnsWithImage" },
    { type: "post" },
    { type: "imageWithText" }
  ],
  options: {
    editModal: "dialog"
  }
};
