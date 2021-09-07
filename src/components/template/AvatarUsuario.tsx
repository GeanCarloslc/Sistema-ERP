import Link from "next/link";
import Image from "next/image"
import avatar from "../assets/avatar.svg";
import useAutenticacao from "../../data/hook/useAutenticacao";

interface AvatarUsuario {

  className?: string;

}

export default function AvatarUsuario(props: AvatarUsuario){
    const { usuario } = useAutenticacao();
    return (
      <Link href="/perfil">
          <Image className={`cursor-pointer`}
            src={usuario?.imagemUrl ?? avatar}
            height={33}
            width={35}
          >
              
          </Image>
      </Link>
    );
}