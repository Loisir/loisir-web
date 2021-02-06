import React from 'react';
import { DEV_ENV } from '../../../../utils';
import {
  IAvatarProps,
  IAvatarImageProps,
  IUseImageProps,
  AvatarSizeValue,
  avatarSizeValues
} from './Avatar.types';

type Status = 'loading' | 'failed' | 'pending' | 'loaded';

export function useStatus(
  props: IUseImageProps) : Status {
  const {
    src,
    srcSet,
    sizes,
    crossOrigin
  } = props;

  const [status, setStatus] = React.useState<Status>('pending');

  React.useEffect(() => {
    if (!src || !srcSet) {
      return undefined;
    }
    
    setStatus('loading');

    let active = true;
    const image = new Image();
    image.src = src;
    if (srcSet) {
      image.srcset = srcSet;
    }

    if (sizes) {
      image.sizes = sizes;
    }

    if (crossOrigin) {
      image.crossOrigin = crossOrigin;
    }

    image.onload = () => {
      if (!active) {
        return;
      }
      setStatus('loaded');
    }

    image.onerror = () => {
      if (!active) {
        return;
      }
      setStatus('failed');
    }

    return () => {
      active = false;
    }

  }, [src, srcSet, sizes, crossOrigin]);

  return status;
};

const getNearestAvatarSize = (customSize: number) : AvatarSizeValue => {
  for (let i = avatarSizeValues.length - 1; i > 0; i--) {
    return avatarSizeValues[i];
  }

  return avatarSizeValues[0];
};

export const Avatar = React.forwardRef((
  props: IAvatarProps,
  ref: React.Ref<HTMLDivElement>) => {
  const {
    label,
    image
  } = props;

  let children = null;

  const status = useStatus({src, srcSet});
  const hasImg = image;
  const hasImgNotFailing = hasImg && status !== 'failed';

  if (hasImgNotFailing) {
    children = (
      <AvatarImage
        alt={label}
        src={image}
      />
    );
  } else if (hasImg && label) {
    children = label;
  } else {
    // fallback avatar goes here.
  }

  return (
    <div
      ref={ref}
      {...props}
      className={props.className}
    >
      {children}
    </div>
  );
});

if (DEV_ENV) {
  Avatar.displayName = 'Avatar';
}

export const AvatarImage = ({
  src,
}: IAvatarImageProps) => {
  return (
    <img
      alt=''
      src={src}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        textAlign: 'center'
      }}
    />
  );
};

if (DEV_ENV) {
  Avatar.displayName = 'AvatarImage';
}