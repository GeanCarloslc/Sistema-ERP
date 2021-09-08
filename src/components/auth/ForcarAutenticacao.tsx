import Head from "next/head";
import Image from "next/image";
import router from "next/router";
import loading from "../../../public/images/loading.gif";
import useAutenticacao from "../../data/hook/useAutenticacao";

export default function ForcarAutenticacao(props) {
  const { usuario, carregando } = useAutenticacao();
  function renderizarConteudo() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    if(!document.cookie?.includes("smart-lion-auth")){
                        window.location.href = "/autenticacao";
                    }
                `,
            }}
          ></script>
        </Head>
        {props.children}
      </>
    );
  }

  function renderizarCarregando() {
    return (
      <div className={`flex justify-center items-center h-screen`}>
        <Image src={loading}></Image>
      </div>
    );
  }

  if (!carregando && usuario?.deEmail) {
    return renderizarConteudo();
  } else if (carregando) {
    return renderizarCarregando();
  } else {
    router.push("/autenticacao");
    return null;
  }
}
