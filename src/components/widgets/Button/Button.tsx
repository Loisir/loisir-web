import React from 'react';
import {
  IButtonProps
} from "./Button.types";

export const ButtonStartIcon = ((props, ref) => {
  return (
    <span></span>
  )
});

export const ButtonEndIcon = ((props, ref) => {
  return (
    <span></span>
  )
});

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const {
    content,
    disabled = false,
    endIcon: endIconProp,
    startIcon: startIconProp,
    ...rest
  } = props;

  const startIcon = startIconProp && (
    <ButtonStartIcon>
      {startIconProp}
    </ButtonStartIcon>
  );

  const endIcon = endIconProp && (
    <ButtonEndIcon>
      {endIconProp}
    </ButtonEndIcon>
  );

  return (
    <button
      disabled={disabled}
      ref={ref}
      {...rest}
    >
      {startIcon}
      {content}
      {endIcon}
    </button>
  )
});