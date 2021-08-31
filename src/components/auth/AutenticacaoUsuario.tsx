interface AutenticacaoUsuario {
    label: string;
    valor: any;
    obrigatorio?: boolean;
    tipo?: "text" | "email" | "password";
    valorMudou: (novoValor: any) => void;
}

export default function AutenticacaoUsuario(props: AutenticacaoUsuario) {
  return (
    <div className={`flex flex-col mt-2`}>
      <label>{props.label}</label>
      <input
        type={props.tipo ?? "text"}
        value={props.valor}
        onChange={evento => props.valorMudou?.(evento.target.value)}
        required={props.obrigatorio}
        className={`px-4 py-3 rounded-lg bg-gray-200 mt-1 border focus:border-blue-500 focus:outline-none focus:bg-white`}
      />
    </div>
  );
}