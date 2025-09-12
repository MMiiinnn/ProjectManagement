import { useRef, useImperativeHandle, forwardRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="p-4 rounded border-stone-600 border-2 text-right"
    >
      {children}
    </dialog>,
    document.querySelector("#modal-root")
  );
});

export default Modal;
