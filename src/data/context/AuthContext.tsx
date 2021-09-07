import route from "next/router";
import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import Usuario from "../../model/Usuario";
import Cookies from "js-cookie";

interface AuthContextProps {
  usuario?: Usuario;
  loginGoogle?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function usuarioNormalizado(
  usuarioFirebase: firebase.User
): Promise<Usuario> {
  const cdToken = await usuarioFirebase.getIdToken();
  return {
    cdUsuario: usuarioFirebase.uid,
    deNome: usuarioFirebase.displayName,
    deEmail: usuarioFirebase.email,
    cdToken,
    cdProvedor: usuarioFirebase.providerData[0].providerId,
    imagemUrl: usuarioFirebase.photoURL,
  };
}

function gerenciarCookie(isLogado: boolean) {
  if (isLogado) {
    Cookies.set("smart-lion-auth", isLogado, {
      expires: 7,
    });
  } else {
    Cookies.remove("smart-lion-auth");
  }
}

export function AuthProvider(props) {
  const [carregando, setCarregando] = useState(true);
  const [usuario, setUsuario] = useState<Usuario>(null);

  async function configurarSessao(usuarioFirebase) {
    if (usuarioFirebase?.email) {
      const usuario = await usuarioNormalizado(usuarioFirebase);
      setUsuario(usuario);
      gerenciarCookie(true);
      setCarregando(false);
      return usuario.deEmail;
    } else {
      setUsuario(null);
      gerenciarCookie(false);
      setCarregando(false);
      return false;
    }
  }

  async function loginGoogle() {
    const resposta = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
      configurarSessao(resposta.user);
      route.push("/");
    
  }

  useEffect(() => {
    const cancelar = firebase.auth().onIdTokenChanged(configurarSessao);
    return () => cancelar();
  }, [])

  return (
    <AuthContext.Provider
      value={{
        usuario,
        loginGoogle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
