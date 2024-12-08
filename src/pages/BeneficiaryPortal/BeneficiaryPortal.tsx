import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import { useAppContext } from "../../context/AppContext";
import { useServices } from "../../hooks/useService";
import { useProfileData } from "../../hooks/useProfileData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BeneficiaryPortalProps {}

const BeneficiaryPortal = ({}: BeneficiaryPortalProps): JSX.Element => {
  const navigate = useNavigate();
  const {
    menuOpen,
    toggleMenu,
    currentIndex,
    banners,
    handlePrev,
    handleNext,
  } = useAppContext();
  const { filteredServices, handleSearch } = useServices();
  const { profileInfo } = useProfileData();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        {/* header */}
        <header className="bg-primary flex items-center justify-between p-4 shadow">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-primary"
          >
            {menuOpen ? "" : "Abrir Menu"}
          </button>
          <SearchBar onSearch={handleSearch} />
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center px-4 py-2 rounded-full bg-blue-500 text-white"
            >
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold">
                  {profileInfo.nome.charAt(0)}
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-medium">{profileInfo.nome}</span>
                  <span className="text-xs text-gray-200">
                    {profileInfo.category}
                  </span>
                </div>
              </div>
            </button>
            {isOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                <li className="py-2 px-4 hover:bg-gray-100">Perfil</li>
                <li className="py-2 px-4 hover:bg-gray-100">Configurações</li>
                <li
                  className="py-2 px-4 hover:bg-gray-100"
                  onClick={() => {
                    sessionStorage.removeItem("isAuthenticated");
                    navigate("/");
                  }}
                >
                  Sair
                </li>
              </ul>
            )}
          </div>
        </header>

        {/* conteudo */}
        <main className="flex-1 grid grid-cols-3 gap-4 p-6">
          <div className="col-span-2 space-y-6">
            {/* servicos */}
            <div className="grid grid-cols-7 gap-2">
              {filteredServices.map((action, index) => (
                <button
                  key={index}
                  className="group flex flex-col items-center justify-center w-30 h-40 p-3 rounded-lg shadow bg-white hover:bg-primary hover:text-white transition-all duration-300"
                  onClick={() =>
                    action.label === "Agendar teleconsulta" &&
                    navigate("/agendar")
                  }
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-terciary text-primary transition-all duration-300">
                    <FontAwesomeIcon icon={action.icon} />
                  </div>
                  <span className="mt-2 text-sm font-bold text-center text-light group-hover:text-terciary">
                    {action.label}
                  </span>
                </button>
              ))}
            </div>

            {/* banners */}
            <div className="relative w-full">
              <div className="relative h-64 md:h-96 overflow-hidden rounded-3xl">
                {banners.map((banner, index) => (
                  <div
                    key={banner.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentIndex
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    }`}
                  >
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={handlePrev}
                  className="flex items-center text-primary font-bold hover:text-primary transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Anterior
                </button>

                <div className="flex space-x-2">
                  {banners.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        index === currentIndex
                          ? "bg-primary"
                          : "bg-light opacity-25"
                      }`}
                    ></div>
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="flex items-center text-primary font-bold hover:text-primary transition-all duration-300"
                >
                  Próximo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* prx agendamentos */}
            <div className="bg-white text-light rounded-2xl shadow p-6">
              <h3 className="font-semibold text-base">Próximos agendamentos</h3>
              <div className="flex items-center justify-between mt-4 p-4 border border-dashed border-border-gray rounded">
                <span className="text-light opacity-90">
                  Sem agendamentos próximos
                </span>
                <button className="bg-primary text-white text-base font-bold px-4 py-2 rounded-3xl hover:bg-primary-hover">
                  Agendar
                </button>
              </div>
            </div>
          </div>

          {/* lembretes */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-text-light">
              Lembretes e notificações
            </h3>
            <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
              {/* Texto */}
              <p className="text-text-light flex-1 leading-relaxed">
                Olá, <span className="font-bold ">{profileInfo.nome}</span>,
                nesta área você poderá ver todos os seus lembretes e
                notificações.
              </p>
              <img
                src="/lembretes.png"
                alt="Lembretes e notificações"
                className="w-24 h-aut block"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BeneficiaryPortal;
