export default {
  name: "asset",
  type: "object",
  title: "Asset",
  fields: [
    {
      name: "resource",
      title: "Resource",
      type: "reference",
      to: [{ type: "resource" }],
      options: {
        collapsed: false,
      },
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "resource.title",
      quantity: "quantity",
    },
    prepare({ title, quantity }: { title: string; quantity: string }) {
      return {
        title,
        subtitle: quantity,
      };
    },
  },
};
