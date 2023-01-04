import { useCallback, useState } from "react";
import { CloseButton, Layer } from './style';

const Modal = ({ show, children }) => {
  const [ isOpen, setIsOpen ] = useState(show);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  if(!isOpen) {
    return null;
  }

  return (
    <Layer
      onEsc={onClose}
      onClickOutside={onClose}
    >
      <CloseButton
        label="close"
        onClick={onClose}
      />
      {children}
    </Layer>
  );
}


export default Modal;