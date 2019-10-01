const supportedLanguages = [
  { id: "de", title: "German", isDefault: true },
  { id: "en", title: "English" }
];

export default {
  name: "localeString",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true }
    }
  ],
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: "string"
  }))
};
