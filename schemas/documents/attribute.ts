import { defineField, defineType } from "sanity";

export default defineType({
  name: "attribute",
  type: "document",
  title: "Attribute",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "theme",
      title: "Theme",
      type: "reference",
      to: [{ type: "theme" }],
      options: {
        collapsed: false,
      },
    }),
  ],
});
