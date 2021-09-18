import React from "react";

import { Avatar as LibAvatar, AvatarProps as LibAvatarProps } from "@material-ui/core";

export type AvatarProps = LibAvatarProps;

const Avatar: React.FC<AvatarProps> = ({ ...rest }) => {
  return <LibAvatar {...rest} />;
};

export default Avatar;
