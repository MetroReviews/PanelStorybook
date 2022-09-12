import React from "react";

export const LogoComponent = (props) => {
  const { logo, width, altText, ...rest } = props;
  return (
    <>
      <img
        src={props.logo}
        width={props.width}
        alt={props.altText}
        style={{ borderRadius: "360px" }}
      ></img>
    </>
  );
};
