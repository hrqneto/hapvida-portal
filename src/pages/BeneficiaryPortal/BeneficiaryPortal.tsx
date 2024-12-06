import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import { useAppContext } from "../../context/AppContext";
import { useServices } from "../../hooks/useService";
import { useProfileData } from "../../hooks/useProfileData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BeneficiaryPortal: React.FC = () => {
  const navigate = useNavigate();
  const { menuOpen, toggleMenu, currentIndex, handlePrev, handleNext } = useAppContext();
  const { filteredServices, handleSearch } = useServices();
  const { profileInfo } = useProfileData();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const banners = [
    { id: 1, title: "Renovação de receita: o remédio para quem quer economizar tempo.", image: "/src/assets/banner1.png" },
    { id: 2, title: "Consulta médica mais fácil, rápida e segura.", image: "/src/assets/banner2.jpg" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        <header className="bg-blue-700 flex items-center justify-between p-4 shadow">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-700">
            {menuOpen ? "" : "Abrir Menu"}
          </button>
          <SearchBar onSearch={handleSearch} />
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center px-4 py-2 rounded-full bg-blue-500 text-white">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 font-bold">
                  {profileInfo.nome.charAt(0)}
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-medium">{profileInfo.nome}</span>
                  <span className="text-xs text-gray-200">{profileInfo.category}</span>
                </div>
              </div>
            </button>
            {isOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                <li className="py-2 px-4 hover:bg-gray-100">Perfil</li>
                <li className="py-2 px-4 hover:bg-gray-100">Configurações</li>
                <li
                  className="py-2 px-4 hover:bg-gray-100 text-red-500"
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

        <main className="flex-1 grid grid-cols-3 gap-4 p-6">
          <div className="col-span-2 space-y-6">
            <div className="grid grid-cols-7 gap-2">
              {filteredServices.map((action, index) => (
                <button
                  key={index}
                  className="group flex flex-col items-center justify-center w-30 h-40 p-3 rounded-lg shadow bg-white hover:bg-blue-500 hover:text-white"
                  onClick={() =>
                    action.label === "Agendar teleconsulta" && navigate("/schedule")
                  }
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white">
                    <FontAwesomeIcon icon={action.icon} />
                  </div>
                  <span className="mt-2 text-sm font-medium text-center">{action.label}</span>
                </button>
              ))}
            </div>
            <div className="relative w-full">
              <div className="relative h-64 md:h-96 overflow-hidden rounded-lg">
                {banners.map((banner, index) => (
                  <div
                    key={banner.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <img src={banner.image} alt={banner.title} className="w-full h-full object-cover rounded-lg" />
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <button onClick={handlePrev} className="p-2 bg-blue-700 text-white rounded-full">
                  Anterior
                </button>
                <div className="flex space-x-2">
                  {banners.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        index === currentIndex ? "bg-blue-700" : "bg-gray-300 hover:bg-blue-400"
                      }`}
                    ></div>
                  ))}
                </div>
                <button onClick={handleNext} className="p-2 bg-blue-700 text-white rounded-full">
                  Próximo
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-semibold text-lg">Próximos agendamentos</h3>
            <div className="flex items-center justify-between mt-4 p-4 border border-dashed border-gray-300 rounded">
              <span className="text-gray-500">Sem agendamentos próximos</span>
              <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Agendar
              </button>
            </div>
          </div>


          </div>
          <div>
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold text-lg">Lembretes e notificações</h3>
              <p className="text-gray-500">Visualize aqui seus lembretes e notificações</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BeneficiaryPortal;
