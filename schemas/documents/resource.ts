export default {
  name: "resource",
  type: "document",
  title: "Resource",
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
    },
    {
      name: "combinations",
      title: "Combinations",
      type: "array",
      of: [
        {
          type: "combination",
        },
      ],
    },
    {
      name: "refinements",
      title: "Refinements",
      type: "array",
      of: [{ type: "refinement" }],
    },
  ],
};
