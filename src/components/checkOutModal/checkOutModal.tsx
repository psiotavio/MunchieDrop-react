import { useEffect, useState } from "react";
import { Modal } from "../modalComponent/modalComponent";
import React from "react";
import './checkOutModal.scss'

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  foodOptions: any[]; // Adicionse a tipagem correta para a prop foodOptions
}

const CheckOut: React.FC<Props> = ({ isOpen, onClose, children, foodOptions }) => {
  const [modalTitle, setModalTitle] = useState("");

  useEffect(() => {
    if (typeof children === "string") {
      setModalTitle(children);
    }
  }, [children]);

  return (
    <div>
      <Modal open={isOpen} onClose={onClose} title={modalTitle}>
        <h1>CARRINHO</h1>
      </Modal>
    </div>
  );
};

export default CheckOut;
