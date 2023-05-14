import React, { ReactNode, useEffect, useState } from 'react';
import './modalComponent.scss';

export interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  title?: string;
  children?: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
}) => {
  const [showElement, setShowElement] = useState(open);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => {
        setTimeout(() => setShowElement(true));
      });
    } else {
      setTimeout(() => {
        setShowElement(false);
      }, 200);
    }
  }, [open]);

  if (open || showElement) {
    return (
      <div
        className={`modal-container ${
          open && showElement ? 'modal-container-open' : 'modal-container-close'
        }`}
      >
        <div className="modal">
          <div className="header">
            <h1>{title}</h1>
            <span className="close-icon" onClick={onClose}>
              X
            </span>
          </div>
          <div className="content">{children}</div>
        </div>
      </div>
    );
  }
  return null;
};
