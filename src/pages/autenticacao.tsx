/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import AutenticacaoUsuario from "../components/auth/AutenticacaoUsuario";
import { IconeAtencao } from "../components/icons";
import useAutenticacao from "../data/hook/useAutenticacao";

export default function Autenticacao() {

  const { usuario, loginGoogle} = useAutenticacao()

  const [erro, setErro] = useState(null);
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function exibirErro(msg, tempoEmSegundos = 5) {
    setErro(msg);
    setTimeout(() => setErro(null), tempoEmSegundos * 1000);
  }

  function submeter() {
    if (modo === "login") {
      alert("Entrar");
      exibirErro("Error");
    } else {
      alert("cadastrar");
      exibirErro("Error2");
    }
  }

  return (
    <div className={`flex h-screen items-center justify-center`}>
      <div className={`hidden md:block md:w-2/3 h-screen bg-amarelo-lion`}>
        <div className={`text-center items-center`}>

          <img src="/images/logo-lion.png" alt="" className={`image p-0`} />

          <div className={`text-center items-center typing`}>
            <h2>Seja smart, seja lion.</h2>
          </div>

        </div>
      </div>
      <div className={`w-full h-full md:w-1/2 bg-cinza-lion`}>
        <div className={`m-10 mt-36`}>
          <h1 className={`text-2xl font-bold mb-5`}>
            {modo === "login"
              ? "Entre com sua conta"
              : "Cadastre-se na plataforma"}
          </h1>

          {erro ? (
            <div
              className={`flex items-center bg-vermelho-lion text-white py-3 px-5 my-2 border border-red-900 rounded-lg`}
            >
              {IconeAtencao()} <span className={`ml-3`}>{erro}</span>
            </div>
          ) : (
            false
          )}

          <AutenticacaoUsuario
            label="Email"
            tipo="email"
            valor={email}
            valorMudou={setEmail}
            obrigatorio
          />
          <AutenticacaoUsuario
            label="Senha"
            tipo="password"
            valor={senha}
            valorMudou={setSenha}
            obrigatorio
          />

          <button
            onClick={submeter}
            className={`w-full bg-amarelo-lion  hover:bg-yellow-300 rounded-lg px-4 py-2 mt-6 text-md font-bold`}
          >
            {modo === "login" ? "Entrar" : "Cadastrar"}
          </button>

          <hr className={`my-6 border-gray-300 w-full`} />

          <button
            onClick={loginGoogle}
            className={`w-full bg-vermelho-lion  hover:bg-red-400 rounded-lg px-4 py-2 text-md font-bold`}
          >
            Entrar com Google
          </button>

          {modo === "login" ? (
            <p className={`mt-8`}>
              Novo por aqui?
              <a
                onClick={() => setModo("cadastro")}
                className={`text-blue-500 font-semibold cursor-pointer`}
              >
                {" "}
                Crie uma conta
              </a>
            </p>
          ) : (
            <p className={`mt-8`}>
              Já faz parte da nossa comunidade?
              <a
                onClick={() => setModo("login")}
                className={`text-blue-500 font-semibold cursor-pointer`}
              >
                {" "}
                Entre com suas credencias
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
