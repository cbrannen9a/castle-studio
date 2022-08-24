import { createConfig, isDev } from "sanity";
import { schemaTypes } from "./schemas";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

const devOnlyPlugins = [visionTool()];

export default createConfig({
  name: "default",
  title: "castle",

  projectId: "ay6hp67o",
  dataset: "production",

  plugins: [deskTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
});
