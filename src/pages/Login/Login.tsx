import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const username = (form.elements.namedItem("username") as HTMLInputElement)
      .value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    // auth simples
    const validUsername = "admin";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
      setError(null);
      const authData = {
        isAuthenticated: true,
        username,
        token: "fake-jwt-token", // exemplo pra ser usado um token real no futuro
      };

      // salva os dados no localStorage
      localStorage.setItem("authData", JSON.stringify(authData));
      sessionStorage.setItem("isAuthenticated", "true");
      navigate("/portal");
    } else {
      setError("Usuário ou senha inválidos");
    }
  };

  return (
    <div className="h-screen flex">
      {/* banner */}
      <div
        className="flex-1 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.hapvida.com.br/site/vendas/sites/default/files/opengraph/opengraph_vendas.png')",
        }}
      ></div>

      {/* login */}
      <div className="w-1/3 flex flex-col justify-center bg-gray-50 px-8">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto">
          <img
            src="https://urseguros.com.br/wp-content/uploads/2022/06/logo-png-768x231.png"
            alt="Logo"
            className="w-1/2 mx-auto mb-6"
          />

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Usuário
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Digite seu CPF, carteirinha ou e-mail"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Digite sua senha"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-semibold py-2 rounded-lg hover:bg-blue-600"
            >
              Acessar conta
            </button>

            <div className="flex justify-between text-sm mt-4">
              <a href="#" className="text-blue-500 hover:underline">
                Esqueci minha senha
              </a>
            </div>
          </form>

          <hr className="my-6 border-gray-300" />

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Ainda não é cadastrado?{" "}
              <a
                href="#"
                className="text-blue-500 font-semibold hover:underline"
              >
                Fazer cadastro
              </a>
            </p>
          </div>

          <p className="text-xs text-gray-500 text-center mt-6">
            Ao se cadastrar ou acessar uma conta, você está de acordo com nossos{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Termos e Condições de Uso.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
