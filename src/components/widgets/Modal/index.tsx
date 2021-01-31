import React from 'react';
import './index.scss';

export const DEFAULT_MODAL_BACKGROUND_ALPHA = .6; // 60%
export const MODAL_ZINDEX = 1000;

interface IModalProps {
  /**
   * CSS alpha opacity.
   * Default value is DEFAULT_MODAL_BACKGROUND_ALPHA.
   */
  backgroundAlpha: number,

  /**
   * Modal content
   */
  children: any,

  /**
   * Whether or not this modal is visible.
   * Default value is false.
   */
  isVisible?: boolean,
};

interface IModalState {}

/** Opens a modal windows */
export default class Modal extends React.Component<IModalProps, IModalState> {
  public static defaultProps = {
    backgroundAlpha: DEFAULT_MODAL_BACKGROUND_ALPHA,
    isVisible: false
  }
  
  render() {
    // prevent scrolling when modal is visible
    if (this.props.isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return (
      <div className="modal"
        style={{
          backgroundColor: `rgba(0,0,0, ${ this.props.backgroundAlpha })`,
          display: this.props.isVisible ? "block" : "none",
          zIndex: MODAL_ZINDEX
        }}>
        <div className="container">
          <div className="children">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
};