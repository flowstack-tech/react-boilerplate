import React from "react";

import { Container as LibContainer, ContainerProps as LibContainerProps } from "@material-ui/core";

export type ContainerProps = LibContainerProps;

const Container: React.FC<ContainerProps> = ({ maxWidth = "lg", children, ...rest }) => {
  return (
    <LibContainer maxWidth={maxWidth} {...rest}>
      {children}
    </LibContainer>
  );
};

export default Container;
