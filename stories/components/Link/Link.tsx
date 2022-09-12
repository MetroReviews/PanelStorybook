import React from "react";
import { Button } from "@chakra-ui/react";

export function LinkComponent(props) {
  const { href, colorScheme, size, label, ...rest } = props;
  return (
    <a href={href}>
      <Button variant="ghost" colorScheme={colorScheme} size={size || "md"}>
        {label}
      </Button>
    </a>
  );
}
