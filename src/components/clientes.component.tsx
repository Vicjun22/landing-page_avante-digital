import Image from "next/image";

import donMarcos from "../assets/logos/don-marcos.svg";
import esquinaDoXis from "../assets/logos/esquina-do-xis.svg";
import estanciaDosLobos from "../assets/logos/estancia-dos-lobos.svg";
import fornello from "../assets/logos/fornello.svg";
import imperioApple from "../assets/logos/imperio-apple.svg";
import iPhonesNH from "../assets/logos/iphones-nh.svg";
import jabuLanches from "../assets/logos/jabu-lanches.svg";
import jefiMultimarcas1 from "../assets/logos/jefi-multimarcas-1.svg";
import jefiMultimarcas2 from "../assets/logos/jefi-multimarcas-2.svg";
import reiDoXis from "../assets/logos/rei-do-xis.svg";
import salt from "../assets/logos/salt.svg";
import valeDoCai from "../assets/logos/vale-do-cai.svg";

import { ButtonScrollToForm } from "./_index";

export function Clientes() {

    return (
        <section className="w-full flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center bg-gradient-to-b from-[#04FEE9] to-transparent">
                <h1 className="w-[70%] py-[60px] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#FAFAFA] text-center">
                    EMPRESAS QUE CONFIAM NA <span className="text-[#04FEE9]">AVANTE DIGITAL</span>
                </h1>
            </div>

            <div className="w-[70%] py-4 flex flex-wrap gap-10 items-center justify-center">
                <Image className="w-[40%] md:w-auto" src={donMarcos} alt="Don Marcos" />
                <Image className="w-[40%] md:w-auto" src={esquinaDoXis} alt="Esquina do Xis" />
                <Image className="w-[40%] md:w-auto" src={estanciaDosLobos} alt="Estância dos Lobos" />
                <Image className="w-[40%] md:w-auto" src={fornello} alt="Fornello" />
                <Image className="w-[40%] md:w-auto" src={imperioApple} alt="Império Apple" />
                <Image className="w-[40%] md:w-auto" src={iPhonesNH} alt="iPhones NH" />
                <Image className="w-[40%] md:w-auto" src={jabuLanches} alt="Jabu Lanches" />
                <Image className="w-[40%] md:w-auto" src={jefiMultimarcas1} alt="Jefi Multimarcas" />
                <Image className="w-[40%] md:w-auto" src={jefiMultimarcas2} alt="Jefi Multimarcas" />
                <Image className="w-[40%] md:w-auto" src={reiDoXis} alt="Rei do Xis" />
                <Image className="w-[40%] md:w-auto" src={salt} alt="Salt" />
                <Image className="w-[40%] md:w-auto" src={valeDoCai} alt="Vale do Xis" />
            </div>

            <div className="w-full py-4 flex justify-center">
                <ButtonScrollToForm>QUERO DECOLAR MINHAS VENDAS</ButtonScrollToForm>
            </div>
        </section>
    )
}