import { FaPlus } from "react-icons/fa";
import { defineType } from "sanity";

export default defineType({
  name: "combination",
  type: "object",
  title: "Combination",
  fields: [
    {
      name: "input",
      title: "Input",
      type: "array",
      of: [{ type: "asset" }],
      options: {
        collapsed: false,
      },
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
      input0Title: "input.0.resource.title",
      input1Title: "input.1.resource.title",
      input2Title: "input.2.resource.title",
      input3Title: "input.3.resource.title",
      input4Title: "input.4.resource.title",
      input0Quantity: "input.0.quantity",
      input1Quantity: "input.1.quantity",
      input2Quantity: "input.2.quantity",
      input3Quantity: "input.3.quantity",
      input4Quantity: "input.4.quantity",
      resultTitle: "result.resource.title",
      resultQuantity: "result.quantity",
    },
    prepare({
      input0Title,
      input1Title,
      input2Title,
      input3Title,
      input4Title,
      input0Quantity,
      input1Quantity,
      input2Quantity,
      input3Quantity,
      input4Quantity,
      resultTitle,
      resultQuantity,
    }: {
      input0Title: string;
      input1Title: string;
      input2Title: string;
      input3Title: string;
      input4Title: string;
      input0Quantity: string;
      input1Quantity: string;
      input2Quantity: string;
      input3Quantity: string;
      input4Quantity: string;
      resultTitle: string;
      resultQuantity: string;
    }) {
      function displayItem(title: string, quantity: string) {
        if (!title) {
          return ``;
        }
        return `${title} - ${quantity},`;
      }
      const subtitle = `
        ${displayItem(input0Title, input0Quantity)}  
        ${displayItem(input1Title, input1Quantity)}
        ${displayItem(input2Title, input2Quantity)}
        ${displayItem(input3Title, input3Quantity)}
        ${displayItem(input4Title, input4Quantity)}
        `;
      return {
        title: `${resultTitle} - ${resultQuantity}`,
        subtitle,
        media: <FaPlus />,
      };
    },
  },
});
