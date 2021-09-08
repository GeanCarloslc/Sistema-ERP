/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import useAutenticacao from "../../data/hook/useAutenticacao";
interface AvatarUsuario {

  className?: string;

}

export default function AvatarUsuario(props: AvatarUsuario){
    const { usuario } = useAutenticacao();
    return (
      <Link href="/perfil">
        <img
          src={usuario?.imagemUrl ?? "/images/avatar.svg"}
          alt="Avatar do Usuário"
          className={`
                    h-10 w-10 rounded-full cursor-pointer
                    ${props.className}
                `}
        />
      </Link>
    );
}