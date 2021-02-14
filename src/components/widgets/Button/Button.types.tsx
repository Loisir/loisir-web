export interface IButtonProps
  extends React.HTMLAttributes<HTMLElement> {
  /**
   * Contents of the button
   */
  content: React.ReactNode;

  /**
   * If `true`, the component is disabled.
   * 
   * @default false
   */
  disabled: boolean;
  
  /**
   * Icon placed after the children.
   */
  endIcon: React.ReactNode;

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: string;

  /**
   * Icon placed before the children
   */
  startIcon: React.ReactNode;
};