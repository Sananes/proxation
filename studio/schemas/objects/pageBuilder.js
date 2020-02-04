import imageSection from "./imageSection";
import youtube from "./youtube";
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
    { ...imageSection },
    { ...youtube }
  ],
  options: {
    editModal: "dialog"
  }
};
