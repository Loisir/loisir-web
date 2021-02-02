import { render } from '@testing-library/react';
import React from 'react';
import { DEFAULT_AVATAR_SIZE, IAvatarProps } from './Avatar.types';

// export class Avatar
//   extends React.Component<IAvatarProps> { 
//   public static defaultProps = {
//     size: DEFAULT_AVATAR_SIZE
//   };

//   render() {
//     return(
//       <img
//         alt=""
//         style={{
//           width: this.props.size,
//           height: this.props.size,
//           borderRadius: this.props.options?.borderRadius,
//           ...this.props.style
//         }}
//         src={this.props.src}
//         {...this.props}
//       />
//     );
//   }
// }

export const Avatar = React.forwardRef((props: IAvatarProps, ref: React.Ref<HTMLDivElement>) => {
  const state = {
    
  };

  return (
    <div ref={ref}
      {...props}
      className={props.className}
    />
  );
});

Avatar.displayName = 'Avatar';