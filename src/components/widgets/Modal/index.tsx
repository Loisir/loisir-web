import React from 'react';
import './index.scss';

export const DEFAULT_MODAL_BACKGROUND_OPACITY = 60; // 60%

export interface ModalProps {
  /** CSS opacity in percentage */
  backgroundOpacity?: number,

  /** Modal content */
  children: any
}

/** Opens a modal windows */
export default class Modal extends React.Component<ModalProps> {
  render() {
    return (
        <div className="modal-background"
          style={{ opacity: `${ this.props.backgroundOpacity || DEFAULT_MODAL_BACKGROUND_OPACITY }%` }}>
          <div className="container">
            { this.props.children }
          </div>
        </div>
    );
  }
}