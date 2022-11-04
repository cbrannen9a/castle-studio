import { defineType } from "sanity";

export default defineType({
  name: "site",
  type: "document",
  title: "Site",
  fields: [
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: ["pending", "active", "paused", "error", "completed"],
      },
      initialValue: "pending",
    },
  ],
});
