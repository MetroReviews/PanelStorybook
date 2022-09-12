import React from "react";
import { AvatarComponent } from "./Avatar";

export default {
  title: "Metro Reviews/Components",
  component: AvatarComponent,
};

const Template = (args) => <AvatarComponent {...args} />;

export const Avatar = Template.bind({});

Avatar.args = {
  size: "md",
  name: "Dillon Veit",
  image: "",
};
