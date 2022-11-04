import { defineField, defineType } from "sanity";

export default defineType({
  name: "action",
  type: "document",
  title: "Action",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "input",
      title: "Input",
      type: "array",
      of: [
        {
          type: "asset",
        },
      ],
    }),
    defineField({
      name: "result",
      title: "Result",
      type: "asset",
    }),
  ],
});
