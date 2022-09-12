import React from "react";
import { NavLinksComponent } from "./NavLinks";
import { options } from "./arguments";

export default {
  title: "Metro Reviews/Components",
  component: NavLinksComponent,
  argTypes: options,
};

const Template = (args) => <NavLinksComponent {...args} />;

export const NavLinks = Template.bind({});

NavLinks.args = {
  colorScheme: "orange",
  size: "md",
  variant: "ghost",
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
};
