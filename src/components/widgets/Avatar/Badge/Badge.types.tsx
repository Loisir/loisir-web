import React from "react";

export interface IBadgeProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Size of this badge
   */
  size?: 'small' | 'medium' | 'large';

  icon?: React.ReactNode;
  state?: 'success' | 'info' | 'warning' | 'error' | 'unknown';

  /**
   * Style options
   */
  options?: BadgeOptions;
}

/**
 * Style options for badge.
 */
export type BadgeOptions = {
  size?: string | number;
  borderRadius?: string | number;
  borderWidth?: string | number;
  borderStyle?: string;
  borderColor?: string;
  color?: string;
  iconColor?: string;
}