import { defineType } from "sanity";

export default defineType({
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
      title: "Base Resources",
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
});
