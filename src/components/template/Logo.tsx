import Image from "next/image";
import logoLeao from "../assets//logo-apenas.png";

export default function Logo() {
  return (
    <div className={`h-20 w-20 text-center mt-1`}>
      <Image src={logoLeao} alt="Logo" height={65} width={70} />
    </div>
  );
}
