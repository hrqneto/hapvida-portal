import { useState } from "react";

export const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const confirmAndContinue = () => {
    alert("Confirmação enviada com sucesso!");
    closeModal();
  };

  return { showModal, openModal, closeModal, confirmAndContinue };
};
