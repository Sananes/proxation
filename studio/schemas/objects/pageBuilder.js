export default {
  name: "pageBuilder",
  title: "Page Builder",
  type: "array",
  of: [{ type: "textColumnsWithImage" }, { type: "post" }, { type: "textImageBlock" }],
  options: {
    editModal: "fullscreen"
  }
};
