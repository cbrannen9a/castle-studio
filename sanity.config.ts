import { defineConfig, isDev } from "sanity";
import { schemaTypes } from "./schemas";
import { deskTool } from "sanity/desk";
// import { visionTool } from "@sanity/vision";
import structure from "./structure";

const devOnlyPlugins = [];

export default defineConfig({
  name: "default",
  title: "castle",

  projectId: "ay6hp67o",
  dataset: "production",

  plugins: [deskTool({ structure }), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
});
