import imageSection from "./imageSection";
import richText from "./richText";

export default {
  name: "pageBuilder",
  title: "Page Builder",
  type: "array",
  of: [
    { type: "hero", name: "hero", title: "Hero" },
    { type: "textColumnsWithImage" },
    { type: "imageWithText" },
    { ...richText },
    { ...imageSection }
  ],
  options: {
    editModal: "dialog"
  }
};
