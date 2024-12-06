import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faConciergeBell,
  faCalendarAlt,
  faIdCard,
  faGift,
  faUniversalAccess,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface MenuLateralProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const MenuLateral: React.FC<MenuLateralProps> = ({ menuOpen, toggleMenu }) => {
  const menuItems = [
    { label: "Início", icon: faHome, path: "/portal" },
    { label: "Serviços", icon: faConciergeBell, path: "/servicos" },
    { label: "Agendar", icon: faCalendarAlt, path: "/schedule" },
    { label: "Carteirinha", icon: faIdCard, path: "/carteirinha" },
    { label: "Benefícios", icon: faGift, path: "/beneficios" },
  ];

  return (
    <div
      className={`${
        menuOpen ? "w-64" : "w-16"
      } bg-white shadow-md flex flex-col transition-all duration-300 overflow-hidden`}
    >
      {/* Botão para abrir/fechar o menu */}
      <button
        onClick={toggleMenu}
        className="bg-blue-700 text-white p-3 focus:outline-none hover:bg-blue-600"
      >
        <FontAwesomeIcon
          icon={menuOpen ? faChevronLeft : faChevronRight}
          className="text-lg"
        />
      </button>

      {/* Logo */}
      <div className="flex items-center justify-center py-6 border-b">
        {menuOpen && (
          <img
            src="https://urseguros.com.br/wp-content/uploads/2022/06/logo-png-768x231.png"
            alt="Logo Hapvida"
            className="w-2/3"
          />
        )}
      </div>

      {/* Opções do menu */}
      <nav className="flex-1 p-2">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center ${
                    menuOpen ? "gap-4 p-3" : "justify-center p-3"
                  } rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                  }`
                }
              >
                <div className="w-8 h-8 flex items-center justify-center text-lg">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                {menuOpen && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

{/* Botão de Acessibilidade */}
<div className="p-4">
  <button className="w-full py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 flex justify-center items-center">
    <FontAwesomeIcon icon={faUniversalAccess} className="text-lg" />
  </button>
</div>

    </div>
  );
};

export default MenuLateral;
