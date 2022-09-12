import React from "react";
import { Avatar, AvatarBadge } from "@chakra-ui/react";

export function AvatarComponent(props) {
  const { name, image, size, ...rest } = props;

  return (
    <Avatar
      name={name || null}
      src={image || null}
      size={size || "md"}
      {...rest}
    ></Avatar>
  );
}
