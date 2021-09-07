import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useAutenticacao = () => useContext(AuthContext);

export default useAutenticacao;