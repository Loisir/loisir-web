import React from 'react';
import { DEV_ENV } from '../../../../utils';
import {
  IAvatarProps,
  IAvatarImageProps,
  IUseImageProps
} from './Avatar.types';

type Status = 'loading' | 'failed' | 'pending' | 'loaded';

export function useImage({
  src,
  srcSet,
  sizes,
  fallbackSrc
}: IUseImageProps) : Status {
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

  }, [src, srcSet, sizes]);

  return status;
};

export const Avatar = React.forwardRef(
  function Avatar(
    props: IAvatarProps,
    ref: React.Ref<HTMLDivElement>) {
  const {
    alt,
    src,
    srcSet
  } = props;

  let children = null;

  const status = useImage({src, srcSet});
  const hasImg = src || srcSet;
  const hasImgNotFailing = hasImg && status !== 'failed';

  if (hasImgNotFailing) {
    children = (
      <AvatarImage
        alt={alt}
        src={src}
      />
    );
  } else if (hasImg && alt) {
    children = alt[0];
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