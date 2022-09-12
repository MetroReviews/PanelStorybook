import React from "react";
import { LinkComponent } from "./Link";

export default {
  title: "Metro Reviews/Components",
  component: LinkComponent,
};

const Template = (args) => <LinkComponent {...args} />;

export const Link = Template.bind({});

Link.args = {
  colorScheme: "blue",
  label: "Button",
  size: "md",
  href: "#",
};
