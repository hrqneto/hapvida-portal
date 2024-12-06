import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AppProvider } from "./context/AppContext";
import Login from "./pages/Login/Login";
import BeneficiaryPortal from "./pages/BeneficiaryPortal/BeneficiaryPortal";
import ScheduleTeleconsult from "./pages/ScheduleTeleconsult/ScheduleTeleconsult";
import Layout from "./components/Layout";

const AppRoutes: React.FC = () => {
  /**
   * rota protegida que verifica autenticação.
   * Se o usuário não estiver autenticado, redireciona para a página de login.
   */
  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = sessionStorage.getItem("isAuthenticated") === "true";
    return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
  };

  return (
    <AppProvider>
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Login />} />

            <Route
              path="/portal"
              element={
                <ProtectedRoute>
                  <Layout>
                    <BeneficiaryPortal />
                  </Layout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/schedule"
              element={
                <Layout>
                  <ScheduleTeleconsult />
                </Layout>
              }
            />
          </Routes>
        </AnimatePresence>
      </Router>
    </AppProvider>
  );
};

export default AppRoutes;
