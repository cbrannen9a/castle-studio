import { defineField, defineType } from "sanity";

export default defineType({
  name: "ability",
  type: "document",
  title: "Ability",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "attribute",
      title: "Attribute",
      type: "reference",
      to: [{ type: "attribute" }],
      options: {
        collapsed: false,
      },
    }),
    defineField({
      name: "value",
      title: "Value",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "title",
      theme: "theme.title",
      value: "value",
    },
    prepare({ title, value, theme }: { title: string; value: string; theme: string }) {
      return {
        title,
        subtitle: theme,
        media: <div>{value}</div>,
      };
    },
  },
});
