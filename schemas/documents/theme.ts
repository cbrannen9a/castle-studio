export default {
  name: "theme",
  type: "document",
  title: "Theme",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "resources",
      title: "Resources",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "resource" }],
        },
      ],
    },
    {
      name: "actions",
      title: "Actions",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "action" }],
        },
      ],
    },
  ],
};
