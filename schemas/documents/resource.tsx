import { FaSquareFull, FaCoins, FaProductHunt, FaRegUser } from "react-icons/fa";
import { defineField, defineType } from "sanity";

const typeOptions = ["base", "product", "person", "currency"] as const;

export default defineType({
  name: "resource",
  type: "document",
  title: "Resource",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "theme",
      title: "Theme",
      type: "reference",
      to: [{ type: "theme" }],
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: { list: typeOptions },
      initialValue: "base",
    }),
    defineField({
      name: "abilities",
      title: "Abilities",
      type: "array",
      of: [
        {
          type: "ability",
        },
      ],
      hidden: ({ parent }: { parent: { type?: TypeOpts } }) => {
        return parent?.type !== "person";
      },
    }),
    defineField({
      name: "combinations",
      title: "Combinations",
      type: "array",
      of: [
        {
          type: "combination",
        },
      ],
    }),
    defineField({
      name: "refinements",
      title: "Refinements",
      type: "array",
      of: [{ type: "refinement" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      theme: "theme.title",
      type: "type",
    },
    prepare({ title, type, theme }: { title: string; type: TypeOpts; theme: string }) {
      return {
        title,
        subtitle: theme,
        media: <TypeIcon type={type} />,
      };
    },
  },
});

type TypeOpts = typeof typeOptions[number];

function TypeIcon({ type }: { type: TypeOpts }) {
  switch (type) {
    case "base":
      return <FaSquareFull />;
    case "currency":
      return <FaCoins />;
    case "product":
      return <FaProductHunt />;
    case "person":
      return <FaRegUser />;
    default:
      return <div>{type}</div>;
  }
}
