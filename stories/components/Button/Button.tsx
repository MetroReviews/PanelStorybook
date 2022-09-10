import * as React from "react";
import { Button } from "@chakra-ui/react";

export function ButtonComponent(props) {
  const { colorScheme, size, variant, label, ...rest } = props;
  const customSize = size || "md";
  const customVariant = variant || "solid";
  return (
    <Button
      colorScheme={colorScheme}
      size={customSize}
      variant={customVariant}
      {...rest}
    >
      {label}
    </Button>
  );
}
