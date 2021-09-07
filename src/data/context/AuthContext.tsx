import route from "next/router";
import { createContext, useState } from "react";
import firebase from "../../firebase/config";
import Usuario from "../../model/Usuario";


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
    imagemUrl: usuarioFirebase.photoURL
    
  };
}

export function AuthProvider(props) {
  const [usuario, setUsuario] = useState<Usuario>(null);

  async function loginGoogle() {

    const resposta = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());

    if (resposta.user?.email) {
      const usuario = await usuarioNormalizado(resposta.user)
      setUsuario(usuario)
      route.push("/")
      alert(usuario.imagemUrl);
    }
  }

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
