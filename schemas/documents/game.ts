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
      name: "host",
      title: "Host",
      type: "string",
    },
    {
      name: "players",
      title: "Players",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "maxPlayers",
      title: "Max Players",
      type: "number",
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: ["pending", "inProgress", "error", "completed"],
      },
    },
  ],
  initialValue: {
    maxPlayers: 8,
    status: "pending",
  },
};
