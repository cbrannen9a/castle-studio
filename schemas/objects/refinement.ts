export default {
  name: "refinement",
  type: "object",
  title: "Refinement",
  fields: [
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
    },
    {
      name: "result",
      title: "Result",
      type: "asset",
      options: {
        collapsed: false,
      },
    },
  ],
  preview: {
    select: {
      quantity: "quantity",
      result: "result.resource.title",
      amount: "result.quantity",
    },
    prepare({ result, quantity, amount }: { result: string; amount: string; quantity: string }) {
      return {
        title: quantity,
        subtitle: `${result} - ${amount}`,
      };
    },
  },
};
