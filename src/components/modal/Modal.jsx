import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import './Modal.css';

export default function Modal({ children, open }) {
  const dialog = useRef(null);

  useEffect(() => {
    if (!dialog.current) return;

    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog}>{children}</dialog>,
    document.getElementById('modal')
  );
}
