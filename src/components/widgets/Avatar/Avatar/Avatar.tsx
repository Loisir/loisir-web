import React from 'react';
import { DEV_ENV } from '../../../../utils';
import {
  IAvatarProps,
  IAvatarImageProps,
} from './Avatar.types';


type Status = 'loading' | 'failed' | 'pending' | 'loaded';

export function useLoaded(source?: string): Status {
  const [status, setStatus] = React.useState<Status>('pending');

  React.useEffect(() => {
    if (!source) {
      return undefined;
    }
    
    setStatus('loading');

    let active = true;
    const image = new Image();
    image.src = source;

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

  }, [source]);

  return status;
};


export const DefaultAvatar = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 128 128"
      width="100%"
      height="100%"
      {...props}
    >
      <path
        fill="currentColor"
        d=""
      />
    </svg>
  );
};


export const Avatar = React.forwardRef<HTMLDivElement, IAvatarProps>((props, ref) => {
  const {
    label,
    image,
    fallbackIcon = <DefaultAvatar />,
    ...rest
  } = props;

  let content = null;

  const status = useLoaded(image);
  const hasImg = image;
  const hasImgNotFailing = hasImg && status !== 'failed';

  if (hasImgNotFailing) {
    content = (
      <AvatarImage alt={label} src={image}/>
    );
  } else if (hasImg && label) {
    content = label;
  } else {
    content = fallbackIcon;
  }

  return (
    <div
      ref={ref}
      {...rest}
    >
      {content}
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
    />
  );
};

if (DEV_ENV) {
  Avatar.displayName = 'AvatarImage';
}