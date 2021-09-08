import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import route from "next/router"
import useAutenticacao from "../../data/hook/useAutenticacao";
export default function MenuLateral() {

  const { logout } = useAutenticacao();

  return (
    <aside
      className={`flex flex-col 
    bg-gray-200 text-gray-700
    dark:bg-gray-900
    `}
    >
      <div
        className={`bg-gradient-to-r bg-amarelo-lion h-20 w-20 flex flex-col items-center justify-center`}
      >
        <Logo></Logo>
      </div>

      <ul className={`flex-grow`}>
        <MenuItem url="/" texto="Ínicio" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
      </ul>

      <ul>
        <MenuItem
          texto="Sair"
          icone={IconeSair}
          onClick={logout}
          className={`
                    text-red-600 
                    hover:bg-red-400 
                    hover:text-white
                    dark:hover:text-white 
                    dark:text-red-400
          `}
        />
      </ul>
    </aside>
  );
}
