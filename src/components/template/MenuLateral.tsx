import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
export default function MenuLateral() {
  return (
    <aside className={`flex flex-col`}>
      <div
        className={`bg-gradient-to-r from-yellow-500  to-red-500 h-20 w-20 flex flex-col items-center justify-center`}
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
          onClick={() => alert("Saiu")}
          className={`text-red-600 hover:bg-red-400 hover:text-white`}
        />
      </ul>
    </aside>
  );
}
