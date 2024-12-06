import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faUserCircle } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  onClose: () => void;
  onConfirm: () => void;
  onGoToProfile: () => void;
  email: string;
  phone: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, onConfirm, onGoToProfile, email, phone }) => {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50"
      style={{ background: "rgba(0, 0, 0, 0.54)" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-lg w-80 p-6 relative"
      >
        <div className="flex justify-between items-center bg-blue-600 text-white p-4 rounded-t-lg">
          <h2 className="text-lg font-bold">Confirme as informações</h2>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="p-4 text-center">
          <FontAwesomeIcon
            icon={faUserCircle}
            className="text-5xl text-blue-500 mb-4"
          />
          <p className="text-sm text-gray-700 mb-2">
            Revise suas informações de contato. Caso necessário, atualize
            através do seu perfil.
          </p>
          <div className="text-left space-y-2">
            <div>
              <span className="font-bold text-gray-800">E-mail:</span> {email}
            </div>
            <div>
              <span className="font-bold text-gray-800">Celular:</span> {phone}
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4 mt-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 me-2 mb-2 text-sm font-medium rounded-full hover:bg-blue-600"
            onClick={onConfirm}
          >
            Confirmar e continuar
          </button>
          <button
            onClick={onGoToProfile}
            type="button"
            className="py-2 px-4 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            Ir para o meu perfil
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
