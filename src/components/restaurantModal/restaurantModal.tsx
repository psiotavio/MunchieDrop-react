import { useEffect, useState } from "react";
import { Modal } from "../modalComponent/modalComponent";
import React from "react";
import './restaurantModal.scss'

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const RestaurantModal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  const [modalTitle, setModalTitle] = useState("");

  useEffect(() => {
    if (typeof children === "string") {
      setModalTitle(children);
    }
  }, [children]);

  return (
    <div>
      <Modal open={isOpen} onClose={onClose} title={modalTitle}>
      {children}
      </Modal>
    </div>
  );
};

export default RestaurantModal;
