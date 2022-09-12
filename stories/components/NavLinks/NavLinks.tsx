import React from "react";
import { Button, Flex } from "@chakra-ui/react";

export const NavLinksComponent = (props: any) => {
  var options = {
    colorScheme: "",
    size: "",
    variant: "",
    link1label: "",
    link1href: "",
    link2label: "",
    link2href: "",
    link3label: "",
    link3href: "",
    link4label: "",
    link4href: "",
    link5label: "",
    link5href: "",
  };

  options = props;
  return (
    <Flex flexDirection="row" gap="3">
      <a href={options.link1href}>
        <Button
          variant={options.variant}
          colorScheme={options.colorScheme}
          size={options.size ?? "md"}
        >
          {options.link1label}
        </Button>
      </a>
      <a href={options.link2href}>
        <Button
          variant={options.variant}
          colorScheme={options.colorScheme}
          size={options.size ?? "md"}
        >
          {options.link2label}
        </Button>
      </a>
      <a href={options.link3href}>
        <Button
          variant={options.variant}
          colorScheme={options.colorScheme}
          size={options.size || "md"}
        >
          {options.link3label}
        </Button>
      </a>
      <a href={options.link4href}>
        <Button
          variant={options.variant}
          colorScheme={options.colorScheme}
          size={options.size || "md"}
        >
          {options.link4label}
        </Button>
      </a>
      <a href={options.link5href}>
        <Button
          variant={options.variant}
          colorScheme={options.colorScheme}
          size={options.size || "md"}
        >
          {options.link5label}
        </Button>
      </a>
    </Flex>
  );
};
