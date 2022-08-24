export default {
  name: "game",
  type: "document",
  title: "Game",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "players",
      title: "Players",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
