import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
import { useProfileData } from "../../hooks/useProfileData";
import InputMask from "react-input-mask";

const ScheduleTeleconsult = (): JSX.Element => {
  const navigate = useNavigate();
  const { showModal, openModal, closeModal, confirmAndContinue } = useModal();
  
  const { contactInfo, profileInfo, updateContactInfo } = useProfileData();

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleGoToProfile = (): void => {
    navigate("/portal");
  };

  const handleSaveChanges = (): void => {
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
        <header className="bg-primary text-white p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Agendar Teleconsulta</h1>
          <button
            onClick={() => navigate("/portal")}
            className="text-white text-lg hover:text-gray-200"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </header>

        <div className="bg-primary p-4">
          <h2 className="text-white font-medium text-lg">
            Revise os dados antes de prosseguir
          </h2>
        </div>

        <div className="flex-1 flex gap-4 p-4">
          {/* col principal */}
          <div className="flex-1 h-60 bg-white shadow rounded-lg p-6 relative">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-text-dark mb-4">
                Informações de contato
              </h3>
              {isEditing && (
                <button
                  onClick={handleSaveChanges}
                  className="bg-primary text-white px-4 py-2 rounded-3xl"
                >
                  Salvar Alterações
                </button>
              )}
            </div>

            {/* contato */}
            <div className="flex space-x-6 mb-6">
              <div className="flex-1">
                <label className="text-gray-600 mb-1 block" htmlFor="phone">
                  Celular
                </label>
                {isEditing ? (
                  <InputMask
                    mask="(99) 99999-9999"
                    id="phone"
                    type="text"
                    value={contactInfo.phone}
                    onChange={(e) => updateContactInfo("phone", e.target.value)}
                    className="border rounded p-2 w-full"
                    placeholder="Seu celular"
                  />
                ) : (
                  <span className="text-gray-800 font-medium">
                    {contactInfo.phone}
                  </span>
                )}
              </div>
              <div className="flex-1">
                <label className="text-gray-600 mb-1 block" htmlFor="email">
                  E-mail
                </label>
                {isEditing ? (
                  <input
                    id="email"
                    type="email"
                    value={contactInfo.email}
                    onChange={(e) => updateContactInfo("email", e.target.value)}
                    className="border rounded p-2 w-full"
                    placeholder="Seu e-mail"
                  />
                ) : (
                  <span className="text-gray-800 font-medium">
                    {contactInfo.email}
                  </span>
                )}
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-terciary p-4 rounded-b-lg leading-7">
              <p className="text-sm text-text-dark opacity-70 pb-2">
                Voce pode editar seu celular e email no seu perfil.
              </p>
              <a href="#" className="text-sm text-primary opacity-60  underline">
              Ir para o meu perfil
              </a>
            </div>
            <div className="flex w-full left-1 top-64 absolute">
              <div className="flex-1"></div>{" "}
              <div>
                <button
                  onClick={openModal}
                  className="bg-primary text-white py-2 px-6 rounded-3xl hover:bg-primary"
                >
                  Confirmar seleção
                </button>
              </div>
            </div>
          </div>

          {/* col lateral */}
          <div className="w-1/3 h-40 bg-white shadow rounded-lg p-6">
            <h3 className="text-text-dark font-semibold text-lg mb-2 uppercase">
              {profileInfo.nome}
            </h3>
            <span className="text-light opacity-55 font-medium text-lg pb-4 mb-6">
              Informacoes de agendamento
            </span>
            <div className="flex items-center justify-between mt-4">
              <span className="text-primary bg-terciary px-6 py-2.5 rounded-3xl text-sm">
                {profileInfo.category}
              </span>
              <button
                onClick={() => setIsEditing(true)}
                className="text-primary underline font-medium hover:text-primary"
              >
                Alterar
              </button>
            </div>
          </div>
        </div>
        {/* footer */}
        <footer className="bg-white text-gray-600 text-sm p-4 shadow-inner flex justify-between items-center">
          <div className="leading-9	">
            <span className="block">
              Hapvida Saúde - Todos os direitos reservados
            </span>
            <a href="#" className="text-text-dark underline">
              Política de privacidade
            </a>
          </div>
          <img
            src="https://portal-beneficiario.hapvida.com.br/images/dU91T1s.png"
            alt="ANS"
            className="w-24"
          />
        </footer>
      </motion.div>

      {/* confirmacao */}
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
