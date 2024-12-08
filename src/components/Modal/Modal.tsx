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

const Modal = ({
  onClose,
  onConfirm,
  onGoToProfile,
  email,
  phone,
}: ModalProps): JSX.Element => {
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
        className="bg-white rounded-lg shadow-lg w-80 pb-6 relative"
      >
        <div className="flex justify-between items-center bg-primary text-white p-4 rounded-t-lg">
          <h2 className="text-lg font-bold">Confirme as informações</h2>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="p-4 text-center">
          <FontAwesomeIcon
            icon={faUserCircle}
            className="text-5xl text-primary mb-4"
          />
          <p className="text-sm text-text-dark mb-2 leading-6">
            Revise suas informações de contato. Caso necessário, atualize
            através do seu perfil.
          </p>
          <div className="text-center space-y-2 ">
            <span className="font-bold text-text-dark opacity-40"></span>
            Henrique Barros S Neto
            <div>
              <span className="font-bold text-text-dark">Celular:</span> {phone}
            </div>
            <div>
              <span className="font-bold text-text-dark">E-mail:</span> {email}
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="flex flex-col mt-4 px-4">
          <button
            className="bg-primary text-white py-2 px-4 me-2 mb-2 text-sm font-medium rounded-full hover:bg-primary"
            onClick={onConfirm}
          >
            Confirmar e continuar
          </button>
          <button
            onClick={onGoToProfile}
            type="button"
            className="py-2 px-4 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            Ir para o meu perfil
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
