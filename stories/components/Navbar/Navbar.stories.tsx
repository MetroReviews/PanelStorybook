import React from "react";
import { NavLinksComponent } from "../NavLinks/NavLinks";
import { AvatarComponent } from "../Avatar/Avatar";
import { LogoComponent } from "../Logo/Logo";
import { NavbarComponent } from "./Navbar";

import { ComponentMeta, ComponentStory } from "@storybook/react";

// STORIES
import NavLinksStories, { NavLinks } from "../NavLinks/NavLinks.stories";
import { Avatar } from "../Avatar/Avatar.stories";
import { Logo } from "../Logo/Logo.stories";
import { Box, Flex, HStack, Spacer } from "@chakra-ui/react";

export default {
  title: "Metro Reviews/Components",
  component: NavbarComponent,
} as ComponentMeta<typeof NavbarComponent>;

const Template: ComponentStory<typeof NavbarComponent> = (args) => (
  <NavbarComponent {...args}>
    <Logo {...args.Logo} />
    <Spacer />
    <NavLinks {...args.NavLinks} />
    <Spacer />
    <Avatar {...args.Avatar} />
  </NavbarComponent>
);

export const Navbar = Template.bind({});

Navbar.args = {
  Logo: {
    logo: "https://via.placeholder.com/128",
    width: "128px",
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
};
