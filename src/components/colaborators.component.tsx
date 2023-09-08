import Image from "next/image";

import leonardoWebster from '../assets/images/leonardo-webster.svg';
import luanaHope from '../assets/images/luana-hoppe.svg';

import { ButtonScrollToForm } from "./_index";

export function Colaborators({ cargo, nome, picSide, descricao }: any) {
    const imagem: any = {
        'Luana Hoppe': luanaHope,
        'Leonardo Webster': leonardoWebster
    }

    return (
        <div className="w-full flex flex-col flex-wrap gap-4">
            <h1 className="text-xl md:text-2x1 lg:text-3x1 xl:text-3xl font-extrabold"><span className="text-[#04FEE9]">#</span>TEAM<span className="text-[#9652FF]">AVANTEDIGITAL</span></h1>

            {picSide === 'right' ? 
                <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-9">
                    <div className="w-full flex flex-col items-start justify-between gap-4">
                        <div className="w-full flex flex-col">
                            <h3 className="text-[#04FEE9] text-base md:text-lg lg:text-x1 xl:text-2xl italic">{cargo}</h3>
                            <h2 className="text-xl md:text-2x1 lg:text-3x1 xl:text-3xl font-extrabold italic">{nome}</h2>
                        </div>

                        <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-normal">{descricao}</p>

                        <div className="w-auto">
                            <ButtonScrollToForm>FALAR COM NOSSA EQUIPE</ButtonScrollToForm>
                        </div>
                    </div>

                    <Image src={imagem[nome]} alt={nome} className="w-[200px] md:w-[300px]" />
                </div>
                :
                <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-9">
                    <Image src={imagem[nome]} alt={nome} className="w-[200px] md:w-[300px]" />

                    <div className="w-full flex flex-col items-start justify-between gap-4">
                        <div className="w-full flex flex-col">
                            <h3 className="text-[#04FEE9] text-base md:text-lg lg:text-x1 xl:text-2xl italic">{cargo}</h3>
                            <h2 className="text-xl md:text-2x1 lg:text-3x1 xl:text-3xl font-extrabold italic">{nome}</h2>
                        </div>

                        <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-normal">{descricao}</p>

                        <div className="w-auto">
                            <ButtonScrollToForm>FALAR COM NOSSA EQUIPE</ButtonScrollToForm>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}