import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const validUsername = "admin";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
      setError(null);
      const authData = {
        isAuthenticated: true,
        username,
        token: "fake-jwt-token",
      };

      localStorage.setItem("authData", JSON.stringify(authData));
      sessionStorage.setItem("isAuthenticated", "true");
      navigate("/portal");
    } else {
      setError("Usuário ou senha inválidos");
    }
  };

  const isButtonDisabled = username === "" || password === "";

  return (
    <div className="flex h-screen">
      {/* Banner */}
      <div
        className="flex-1 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://portal-beneficiario.hapvida.com.br/images/1VhQFC.png')",
        }}
      ></div>

      {/* Login */}
      <div className="w-1/4 flex flex-col justify-center px-4">
        <div className="p-4 max-w-md mx-auto">
          <div className="mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" height="56" fill="none" viewBox="0 0 141 56">
            <path fill="#0054B8" d="M106.206 15.641a2.849 2.849 0 00-1.909.728 2.869 2.869 0 00-.934 1.821 2.286 2.286 0 002.297 2.611 2.872 2.872 0 001.904-.767 2.888 2.888 0 00.91-1.844 2.25 2.25 0 00-1.326-2.365 2.226 2.226 0 00-.942-.184zM48.61 22.107a6.047 6.047 0 00-4.508 1.67l.661-4.433c.242-1.486-.514-2.458-1.844-2.458a14.12 14.12 0 00-2.33.213l-3.176 21.187c.716.145 1.444.216 2.174.212.781.008 1.561-.063 2.329-.212l1.451-9.774c.274-1.76 1.393-2.883 2.754-2.883 1.33 0 1.876.82 1.664 2.181L46.22 38.285c.727.145 1.467.216 2.208.212.772.015 1.543-.056 2.3-.212l1.694-11.262c.453-3.035-1.09-4.916-3.812-4.916zm71.117-2.854l-.726 4.828a4.36 4.36 0 00-1.675-1.507 4.338 4.338 0 00-2.2-.467c-4.235 0-5.868 3.307-6.565 7.952a19.235 19.235 0 00-.241 2.974c0 3.521 1.512 5.738 4.809 5.738a5.38 5.38 0 004.083-1.883 2.144 2.144 0 002.118 1.612 8.448 8.448 0 002.057-.211l3.175-21.188a11.928 11.928 0 00-2.147-.212c-1.754 0-2.42.607-2.693 2.371l.005-.007zm-52.67 3.137a2.74 2.74 0 00-1.647.434c-.49.317-.866.78-1.076 1.326a4.426 4.426 0 00-3.75-2.034c-4.235 0-5.87 3.307-6.565 7.953a19.186 19.186 0 00-.24 2.974c0 3.52 1.511 5.737 4.808 5.737a5.384 5.384 0 004.085-1.882 2.13 2.13 0 002.117 1.612 8.444 8.444 0 002.057-.212l2.362-15.693a11.961 11.961 0 00-2.147-.213l-.004-.002zm12.952-.27A5.381 5.381 0 0075.925 24a2.132 2.132 0 00-2.117-1.612 8.44 8.44 0 00-2.057.212l-3.178 21.188c.709.134 1.428.205 2.149.212 1.754 0 2.42-.608 2.69-2.37l.726-4.826a4.348 4.348 0 003.875 1.973c4.236 0 5.869-3.31 6.565-7.955.158-.983.238-1.977.241-2.974 0-3.52-1.512-5.735-4.809-5.735v.006zm57.87.266a2.739 2.739 0 00-1.647.434c-.49.317-.866.781-1.076 1.326a4.42 4.42 0 00-3.751-2.033c-4.235 0-5.868 3.307-6.563 7.952-.159.983-.24 1.977-.243 2.974 0 3.521 1.512 5.737 4.811 5.737a5.384 5.384 0 004.083-1.882 2.14 2.14 0 002.118 1.612 8.448 8.448 0 002.057-.211l2.363-15.694a11.955 11.955 0 00-2.147-.212l-.005-.003zm-38.352.003a11.91 11.91 0 00-2.512.242l-2.3 5.221a30.989 30.989 0 00-2.509 6.435h-.061a64.224 64.224 0 00-.817-7.558l-.331-2.181a2.253 2.253 0 00-.773-1.62 2.236 2.236 0 00-1.71-.535c-.82.008-1.64.078-2.45.213l2.603 15.662c.946.188 1.909.28 2.873.272.995.02 1.99-.072 2.964-.272l7.17-15.662a9.598 9.598 0 00-2.148-.213v-.004zm3.478.217l-2.363 15.693a8.961 8.961 0 002.209.212 13.847 13.847 0 002.362-.212l2.363-15.693a10.193 10.193 0 00-2.238-.213 11.731 11.731 0 00-2.33.213h-.003zm-22.926 7.77c-.634 4.128-1.754 4.947-3.387 4.947-1.452 0-2.118-1.273-1.906-2.702l.635-4.37c.047-.706.35-1.37.851-1.869a2.886 2.886 0 011.872-.833c1.573 0 2.117.88 2.117 2.581a16.97 16.97 0 01-.182 2.246zM63.835 28.28l-.634 4.37a2.905 2.905 0 01-.851 1.87 2.886 2.886 0 01-1.872.833c-1.574 0-2.118-.88-2.118-2.58.011-.752.072-1.503.183-2.247.634-4.129 1.754-4.948 3.387-4.948 1.452 0 2.117 1.276 1.905 2.702zm54.542 0l-.635 4.37a2.906 2.906 0 01-.851 1.87 2.889 2.889 0 01-1.872.833c-1.573 0-2.118-.88-2.118-2.58a17.08 17.08 0 01.182-2.247c.636-4.129 1.755-4.948 3.388-4.948 1.452 0 2.118 1.276 1.906 2.702zm16.275 0l-.637 4.37a2.9 2.9 0 01-.85 1.87 2.887 2.887 0 01-1.872.833c-1.573 0-2.118-.88-2.118-2.58.011-.752.072-1.503.182-2.247.635-4.129 1.754-4.948 3.389-4.948 1.451 0 2.117 1.276 1.906 2.702z"></path><path fill="#FDB713" d="M16.596 33.388c-1.177 0-2.22 2.646-2.563 3.516-.69 1.749-1.289 4.155-.226 5.69a3.522 3.522 0 002.79 1.379 3.51 3.51 0 002.79-1.379c1.06-1.538.462-3.944-.226-5.69-.344-.87-1.389-3.517-2.565-3.517"></path><path fill="#EF402F" d="M16.597 12.011a4.507 4.507 0 00-4.086 2.021c-.858 1.24-1.497 3.69.326 8.312.502 1.27 2.026 5.139 3.76 5.139 1.733 0 3.258-3.868 3.76-5.14 1.823-4.62 1.183-7.07.327-8.31a4.513 4.513 0 00-4.088-2.021z"></path><path fill="#F5821F" d="M10.563 31.712h-.04c-1.667.113-3.83.551-4.658 1.999a3.158 3.158 0 00.851 3.897c.377.3.817.508 1.287.61 1.634.264 3.343-1.139 4.482-2.372.576-.618 2.321-2.5 1.869-3.455-.432-.913-2.786-.754-3.791-.686M22.67 31.715h-.038c-.335-.022-.819-.056-1.33-.056-1.029 0-2.174.133-2.462.741-.453.955 1.294 2.838 1.868 3.455 1.14 1.228 2.843 2.63 4.483 2.37a3.135 3.135 0 002.174-1.724 3.158 3.158 0 00-.036-2.782c-.828-1.447-2.99-1.885-4.659-1.998"></path><path fill="#F05A22" d="M5.037 20.65c-.241 0-.481.023-.718.068a4.684 4.684 0 00-3.18 2.667 4.72 4.72 0 00.169 4.155c.715 1.174 2.511 2.611 7.018 2.792 1.239.05 5.009.203 5.648-1.244.639-1.447-2.009-4.144-2.878-5.033-2.658-2.71-4.682-3.404-6.06-3.404zM28.874 20.718a3.872 3.872 0 00-.717-.067c-1.378 0-3.403.695-6.058 3.406-.87.887-3.517 3.587-2.879 5.032.638 1.446 4.411 1.294 5.648 1.242 4.507-.18 6.304-1.613 7.018-2.791a4.718 4.718 0 00-1.111-5.861 4.684 4.684 0 00-1.9-.962"></path></svg>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-bold text-primary"
              >
                Usuário
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Digite seu CPF, carteirinha ou e-mail"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-4 py-2.5 border border-gray-border rounded shadow-sm focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold text-primary"
                >
                  Senha
                </label>
                <a href="#" className="text-text-secondary text-sm underline">
                  Esqueci minha senha
                </a>

              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2.5 border border-gray-border rounded shadow-sm focus:ring-primary focus:border-primary"
                required
              />
            </div>

            {error && <p className="text-error text-left mb-4">{error}</p>}

            <button
              type="submit"
              className={`w-full flex justify-center py-2.5 px-4 mt-4 text-sm font-medium focus:outline-none rounded-full border border-gray-border ${
                isButtonDisabled
                  ? "bg-disabled text-disabled-text cursor-not-allowed"
                  : "bg-primary text-white hover:bg-primary-hover"
              }`}
              disabled={isButtonDisabled}
            >
              Acessar conta
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                className="inline-block w-4 h-4 ml-2"
                fill="currentColor"
                stroke="currentColor"
              >
                <path d="M469.333 298.667l-59.733 59.733 110.933 110.933h-435.2v85.333h435.2l-110.933 110.933 59.733 59.733 213.333-213.333-213.333-213.333zM853.333 810.667h-341.333v85.333h341.333c46.933 0 85.333-38.4 85.333-85.333v-597.333c0-46.933-38.4-85.333-85.333-85.333h-341.333v85.333h341.333v597.333z"></path>
              </svg>
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-left text-text-gray">
              Ainda não é cadastrado?
            </p>
            <button
              type="button"
              className="w-full py-2.5 px-5 mt-4 text-sm font-medium text-text-dark-gray focus:outline-none bg-white rounded-full border border-gray-border hover:bg-gray-hover hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              Fazer cadastro
            </button>
          </div>

          <p className="text-xs text-text-gray text-left mt-6 leading-normal">
            Ao se cadastrar ou acessar uma conta, você está de acordo com nossos{" "}
            <a href="#" className="text-link-hover underline text-text-dark">
              Termos e Condições de Uso.
            </a>
          </p>

          {/* Banner login */}
          <div className="bg-banner-bg rounded-2xl p-6 mt-6 flex flex-col lg:flex-col items-start justify-between">
            <div className="flex items-center justify-between w-full mb-4">
              <h3 className="text-primary text-xl font-bold">
                Cuide da saúde de quem você ama.
              </h3>
              <img
                src="https://portal-beneficiario.hapvida.com.br/images/HkwY+Tk.png"
                alt="familia"
                className="w-36 object-contain"
              />
            </div>

            <p className="text-text-gray text-sm mb-4 leading-normal">
              Conte com uma rede de cobertura completa, preços que cabem no seu
              bolso e o melhor: você monta o plano que é ideal para o seu
              momento.
            </p>

            <button
              type="button"
              className="w-full py-2.5 px-5 mt-4 text-sm font-medium inline-flex justify-center text-primary hover:bg-primary border border-primary focus:outline-none rounded-full hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              Simule seu plano
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1067 1024"
                fill="currentColor"
                className="ml-2 w-4 h-4"
              >
                <path d="M533.333 170.667l-60.16 60.16 238.080 238.507h-519.253v85.333h519.253l-238.080 238.507 60.16 60.16 341.333-341.333-341.333-341.333z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-xs text-footer-text flex justify-between mt-6 px-8">
          <span className="text-xs mt-5">
            Hapvida Saúde - Todos os direitos <br />
            reservados
          </span>
          <img
            src="https://portal-beneficiario.hapvida.com.br/images/dU91T1s.png"
            alt="ANS"
            className="w-24 mb-4"
          />
        </footer>
      </div>
    </div>
  );
};

export default Login;
