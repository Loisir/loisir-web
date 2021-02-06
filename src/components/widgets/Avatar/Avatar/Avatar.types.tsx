import React, { ImgHTMLAttributes } from "react";
import { IBadgeProps } from "../Badge";

export interface IAvatarProps
  extends React.HTMLAttributes<HTMLElement> {
  /**
   * Alternate attrib for rendering img element
   */
  label?: string;

  /**
   * Image source of avatar
   */
  image?: string;

  /**
   * Size of the Avatar.
   * Default value is DEFAULT_AVATAR_SIZE.
   */
  size?: AvatarSizeValue;
  
  /**
   * Whether or not this avatar is active.
   */
  active?: boolean;

  /**
   * Avatar Badge
   */
  badge?: React.ReactElement<IBadgeProps>;

  /**
   * Avatar style options
   */
  options?: AvatarOptions;
};

/**
 * Restricted set of avatar sizes.
 */
export const avatarSizeValues = [20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128] as const;
export type AvatarSizeValue = typeof avatarSizeValues[number];

/**
 * Default Avatar size if not specified.
 */
export const DEFAULT_AVATAR_SIZE: AvatarSizeValue = 32;

export type AvatarOptions = {
  /**
   * Width of this avatar
   */
  width?: string | number;
  
  /**
   * Height of this avatar
   */
  height?: string | number;

  /**
   * Border radius
   */
  borderRadius?: string | number;

  /**
   * Opacity of this icon when `active={false}`
   */
  inactiveOpacity?: string | number;
};

export interface IUseImageProps {
  src?: string;
  srcSet?: string;
  sizes?: string;
  crossOrigin?: ImgHTMLAttributes<any>['crossOrigin'];
};

export interface IAvatarImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {};