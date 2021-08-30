import { IconeLua, IconeSol } from "../icons";

interface BotaoAlternarTema {
  tema: string;
  alternarTema: () => void;
}

export default function BotaoAlternarTema(props: BotaoAlternarTema) {
  return props.tema === "dark" ? (
    <div
      onClick={props.alternarTema}
      className={`hidden sm:flex cursor-pointer bg-gradient-to-r from-yellow-200 to-yellow-600 w-14 h-7 item-center p-1 rounded-full`}
    >
      <div
        className={`flex items-center justify-center bg-white text-yellow-600 rounded-full w-6 h-5`}
      >
        {IconeSol(5)}
      </div>
    </div>
  ) : (
    <div
      onClick={props.alternarTema}
      className={`hidden sm:flex cursor-pointer bg-gradient-to-r from-gray-500 to-gray-900 w-14 h-7 item-center p-1 rounded-full`}
    >
      <div
        className={`flex items-center justify-center bg-gray-700 text-yellow-300 rounded-full w-6 h-5 ml-6 `}
      >
        {IconeLua(5)}
      </div>
    </div>
  );
}
