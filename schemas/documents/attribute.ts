export default {
  name: "attribute",
  type: "document",
  title: "Attribute",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "theme",
      title: "Theme",
      type: "reference",
      to: [{ type: "theme" }],
      options: {
        collapsed: false,
      },
    },
  ],
};
