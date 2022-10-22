export default {
  name: "ability",
  type: "document",
  title: "Ability",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "attribute",
      title: "Attribute",
      type: "reference",
      to: [{ type: "attribute" }],
      options: {
        collapsed: false,
      },
    },
    {
      name: "value",
      title: "Value",
      type: "number",
    },
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
};
