import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { PageError } from "./PageError";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
	title: "widgets/PageError",
	component: PageError,
	tags: ["autodocs"],
	argTypes: {
	
	},
} satisfies Meta<typeof PageError>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
};

export const Dark: Story = {
	decorators: [
		ThemeDecorator(Theme.DARK)
	]
};
