import type { Tool } from "../types";

export const textToImageTool: Tool = {
	name: "textToImage",
	description:
		"Generate an image from a text prompt. This is needed when the user asks to draw something, to generate an image, or to render a picture. Keywords: Draw, Generate, Render",
	examples: [
		{
			prompt: "Generate an image of a cat wearing a top hat",
			code: '{"tool" : "textToImage", "input" : "a cat wearing a top hat"}',
			tools: ["textToImage"],
		},
		{
			prompt: "Draw a brown dog on a beach",
			code: '{"tool" : "textToImage", "input" : "drawing of a brown dog on a beach"}',
			tools: ["textToImage"],
		},
	],
	call: async (input, inference) => {
		const data = await input;
		if (typeof data !== "string") throw "Input must be a string.";

		return await inference.textToImage(
			{
				inputs: data,
			},
			{ wait_for_model: true }
		);
	},
};