import React from "react";
const Spin = require("react-spinkit");

export const Spinner = props => {
  if (props.loading) {
    return <Spin name="ball-clip-rotate-multiple" />;
  } else return null;
};
