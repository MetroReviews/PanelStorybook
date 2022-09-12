import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Home } from "./Home";

export default {
  title: "Metro Reviews/Pages",
  component: Home,
  argTypes: {
    headingLabel: {
      name: "Heading Label",
      control: { type: "text" },
    },
    headingSize: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      name: "Heading Size",
    },
    Navbar: {
      name: "Navigation Bar",
    },
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const HomePage = Template.bind({});

HomePage.args = {
  Navbar: {
    Logo: {
      logo: "https://via.placeholder.com/64",
      width: "64px",
      altText: "Metro Reviews",
    },
    NavLinks: {
      colorScheme: "orange",
      size: "md",
      link1label: "Link",
      link1href: "#",
      link2label: "Link",
      link2href: "#",
      link3label: "Link",
      link3href: "#",
      link4label: "Link",
      link4href: "#",
      link5label: "Link",
      link5href: "#",
    },
    Avatar: {
      size: "md",
      name: "Dillon Veit",
      image: "",
    },
  },
  headingSize: "md",
  headingLabel: "Welcome back",
};
