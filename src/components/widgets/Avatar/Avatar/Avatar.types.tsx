export interface IAvatarProps
  extends Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "sizes"> {
  /**
   * Image source of avatar
   */
  src?: string;

  /**
   * List of sources of different resolutions
   */
  srcSet?: string;
  
  /**
   * Size of the Avatar in CSS units.
   * Default value is DEFAULT_AVATAR_SIZE.
   */
  size?: string | number;

  /**
   * Avatar Badge
   */
  badge?: React.ReactNode;
  
  active?: boolean;

  /**
   * Whether or not this avatar is circular.
   * Default value is true.
   */
  isCircular?: boolean;

  /**
   * Fallback avatar source.
   * 
   * This source is selected in case the main
   * avatar source is not available.
   */
  fallback?: React.ReactElement;
}

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
   * Opacity of this icon when `active=false`
   */
  inactiveOpacity?: string | number;
};