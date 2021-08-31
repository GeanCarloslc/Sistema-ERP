import { useState } from "react";
import logoLion from "../components/assets/logo-lion.png";
import AutenticacaoUsuario from "../components/auth/AutenticacaoUsuario";
import Image from "next/image";

export default function Autenticacao() {
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function submeter() {
    if (modo === "login") {
      alert("Entrar");
    } else {
      alert("cadastrar");
    }
  }

  return (
    <div className={`flex h-screen items-center justify-center`}>
      <div className={`w-2/3 h-screen bg-gray-600 `}>
        <div className={`image`}>
          <Image
            src={logoLion}
            alt="Logo"
            height={400}
            width={400}
          />
        </div>
      </div>
      <div className={` m-10 w-1/2`}>
        <h1 className={`text-xl font-bold mb-5`}>
          {modo === "login"
            ? "Entre com sua conta"
            : "Cadastre-se na plataforma"}
        </h1>
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
          className={`w-full bg-yellow-500  hover:bg-yellow-400 rounded-lg px-4 py-3 mt-6`}
        >
          {modo === "login" ? "Entrar" : "Cadastrar"}
        </button>

        <hr className={`my-6 border-gray-300 w-full`} />

        <button
          onClick={submeter}
          className={`w-full bg-red-500  hover:bg-red-400 rounded-lg px-4 py-3`}
        >
          Entrar com Google
        </button>
      </div>
    </div>
  );
}
