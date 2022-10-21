export default {
  name: "action",
  type: "document",
  title: "Action",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "input",
      title: "Input",
      type: "array",
      of: [
        {
          type: "asset",
        },
      ],
    },
    {
      name: "result",
      title: "Result",
      type: "asset",
    },
  ],
};
