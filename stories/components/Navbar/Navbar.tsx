import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import { LogoComponent } from "../Logo/Logo";
import { NavLinksComponent } from "../NavLinks/NavLinks";
import { AvatarComponent } from "../Avatar/Avatar";

export const NavbarComponent = (props: any) => {
  return (
    <Flex w="auto" px="6" py="6" align="center" justify="space-around">
      <LogoComponent {...props.Logo} />
      <Spacer />
      <NavLinksComponent {...props.NavLinks} />
      <Spacer />
      <AvatarComponent {...props.Avatar} />
    </Flex>
  );
};
