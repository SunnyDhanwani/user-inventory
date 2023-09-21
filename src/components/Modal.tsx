import React, { useEffect, useRef, useState } from "react";
import { ModalProps } from "../interfaces/interfaces";

const Modal = ({ isModalOpen, handleModalClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isModalOpen) modalRef.current?.showModal();
    else modalRef.current?.close();
  }, [isModalOpen]);

  return (
    <dialog
      draggable={false}
      ref={modalRef}
      onCancel={(e) => {
        handleModalClose(e);
      }}
      style={{
        // top: "50%",
        // left: "50%",
        // translate: "-50% -50%",
        position: "fixed",
      }}
      className="modal"
    >
      {children}
    </dialog>
  );
};

export default Modal;
