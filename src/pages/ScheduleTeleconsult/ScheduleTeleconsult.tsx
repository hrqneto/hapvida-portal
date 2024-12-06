import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
import { useProfileData } from "../../hooks/useProfileData";

const ScheduleTeleconsult: React.FC = () => {
  const navigate = useNavigate();
  const { showModal, openModal, closeModal, confirmAndContinue } = useModal();
  const { contactInfo, profileInfo, updateContactInfo, updateProfileInfo } = useProfileData();

  const [isEditing, setIsEditing] = useState(false);

  const handleGoToProfile = () => {
    navigate("/portal");
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
  };

  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full bg-gray-100 z-40 flex flex-col"
      >
        <header className="bg-blue-600 text-white p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Agendar Teleconsulta</h1>
          <button
            onClick={() => navigate("/portal")}
            className="text-white text-lg hover:text-gray-200"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </header>

        <div className="bg-blue-100 p-4">
          <h2 className="text-blue-600 font-medium text-lg">
            Revise os dados antes de prosseguir
          </h2>
        </div>

        {/* conteudo */}
        <div className="flex-1 flex gap-4 p-4">
          {/* col principal */}
          <div className="flex-1 bg-white shadow rounded-lg p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Informações de contato</h3>
            <div className="space-y-4">
              {isEditing ? (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Celular</span>
                    <input
                      type="text"
                      value={contactInfo.phone}
                      onChange={(e) => updateContactInfo("phone", e.target.value)}
                      className="border rounded p-2"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">E-mail</span>
                    <input
                      type="email"
                      value={contactInfo.email}
                      onChange={(e) => updateContactInfo("email", e.target.value)}
                      className="border rounded p-2"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Celular</span>
                    <span className="text-gray-800 font-medium">{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">E-mail</span>
                    <span className="text-gray-800 font-medium">{contactInfo.email}</span>
                  </div>
                </>
              )}
            </div>
            {isEditing && (
              <button
                onClick={handleSaveChanges}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Salvar Alterações
              </button>
            )}
          </div>

          {/* col lateral */}
          <div className="w-1/3 bg-white shadow rounded-lg p-6">
            <h3 className="text-gray-800 font-semibold mb-4">{profileInfo.nome}</h3>
            <span className="text-blue-500 bg-blue-100 px-2 py-1 rounded-full text-sm">
              {profileInfo.category}
            </span>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 block text-blue-600 underline font-medium hover:text-blue-700"
            >
              Alterar
            </button>
          </div>
        </div>

        <div className="flex justify-end p-6">
          <button
            onClick={openModal}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
          >
            Confirmar seleção <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>

        {/* Rodapé */}
        <footer className="bg-white text-gray-600 text-sm p-4 shadow-inner">
          <div className="flex justify-between items-center">
            <span>Hapvida Saúde - Todos os direitos reservados</span>
            <a href="#" className="text-blue-500 underline">
              Política de privacidade
            </a>
          </div>
        </footer>
      </motion.div>

      {/* Modal de Confirmação */}
      {showModal && (
        <Modal
          onClose={closeModal}
          onConfirm={confirmAndContinue}
          onGoToProfile={handleGoToProfile}
          email={contactInfo.email}
          phone={contactInfo.phone}
        />
      )}
    </>
  );
};

export default ScheduleTeleconsult;
