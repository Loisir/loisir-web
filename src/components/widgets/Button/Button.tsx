import React from 'react';
import { IButtonProps } from "./Button.types";

const ButtonIcon = ((props: React.HTMLProps<HTMLSpanElement>) => {
  const {
    children,
    ...rest
  } = props;
  
  return (
    <span {...rest}>
      {children}
    </span>
  );
});

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const {
    children,
    disabled = false,
    leftIcon: leftIconProp,
    rightIcon: rightIconProp,
    ...rest
  } = props;

  const leftIcon = leftIconProp && (
    <ButtonIcon>
      {leftIconProp}
    </ButtonIcon>
  );

  const rightIcon = rightIconProp && (
    <ButtonIcon>
      {rightIconProp}
    </ButtonIcon>
  );

  return (
    <button
      disabled={disabled}
      ref={ref}
      {...rest}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
});