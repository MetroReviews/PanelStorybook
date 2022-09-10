import React from "react";
import { ButtonComponent } from "./Button";

export default {
  title: "Metro Reviews/Components",
  component: ButtonComponent,
};

const Template = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});

Button.args = {
  variant: "solid",
  colorScheme: "blue",
  label: "Button",
  size: "md",
};
