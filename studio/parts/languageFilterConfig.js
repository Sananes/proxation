export default {
  supportedLanguages: [
    // If your localized fields are set up using the
    { id: "de", title: "German", default: true },
    { id: "en", title: "English" }
    //...
  ],
  filterField: (enclosingType, field, selectedLanguageIds) =>
    !enclosingType.name.startsWith("locale") || selectedLanguageIds.includes(field.name)
};
