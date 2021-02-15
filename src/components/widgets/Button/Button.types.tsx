export interface IButtonProps {
  /**
   * If `true`, the component is disabled.
   * 
   * @default false
   */
  disabled: boolean;
  
  /**
   * Icon placed before the children.
   */
  leftIcon: React.ReactNode;

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: string;

  /**
   * Icon placed after the children.
   */
  rightIcon: React.ReactNode;
};