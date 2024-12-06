import React from "react";
import MenuLateral from "../Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = React.useState(true);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* sidebar */}
      <MenuLateral menuOpen={menuOpen} toggleMenu={toggleMenu} />

      {/* conteudo */}
      <div className="flex-1 relative overflow-hidden">{children}</div>
    </div>
  );
};

export default Layout;
