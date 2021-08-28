import MenuLateral from "./MenuLateral";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";

interface LayoutProps {
  titulo: string;
  subtitulo: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={`flex h-screen w-screen`}>
      <MenuLateral />
      <div
        className={` flex 
           flex-col p-7 
           bg-gray-300 
           dark:bg-gray-800
           w-full`}
      >
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo>{props.children}</Conteudo>
      </div>
    </div>
  );
}
