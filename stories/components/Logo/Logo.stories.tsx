import React from "react";
import { LogoComponent } from "./Logo";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Metro Reviews/Components",
  component: LogoComponent,
  argTypes: {
    logo: {
      control: { type: "text" },
    },
    width: {
      options: ["32px", "64px", "128px", "256px"],
      control: { type: "select" },
    },
    altText: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof LogoComponent>;

const Template: ComponentStory<typeof LogoComponent> = (args) => (
  <LogoComponent {...args} />
);

export const Logo = Template.bind({});

Logo.args = {
  logo: "https://via.placeholder/128",
  width: "128px",
  altText: "Metro Reviews",
};
