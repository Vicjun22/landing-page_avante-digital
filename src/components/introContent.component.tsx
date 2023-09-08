import { ButtonScrollToForm, QuemSomos } from "./_index";
import graphic from "../assets/images/grafico-ilustrativo.svg";

import Image from 'next/image'

export function IntroContent() {

    return (
        <section className="w-full pt-12 md:pt-16 flex flex-col items-center justify-center bg-[url('../assets/backgrounds/bg-escuro-com-espirais.svg')] bg-no-repeat bg-cover md:bg-contain">

            <div className="w-full gap-12 flex flex-col items-center justify-center">
                <h1 className="w-[70%] h-auto text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#FAFAFA] text-center">
                    Uma equipe especializada para <span className="text-[#04FEE9]">impulsionar o crescimento de sua empresa.</span>
                </h1>

                <ButtonScrollToForm>Agendar uma consultoria</ButtonScrollToForm>
            </div>

            <div className="w-full h-auto pt-12 md:pt-16 flex flex-col items-center justify-center">
                <div className="w-[70%] h-auto flex flex-col md:flex-row items-center justify-evenly">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#FAFAFA] text-center">
                        VOCÊ QUER AUMENTAR SEU <span className="text-[#9652FF]">FATURAMENTO?</span>
                    </h1>
                    <Image  src={graphic}
                            className="h-auto w-52 md:w-56 lg:w-60 xl:w-64"
                            alt="Graphic"
                            priority />
                </div>

                <div className="w-full">
                    <ul className="w-[60%] ml-[15%] mr-[25%] gap-8 flex flex-col justify-start">
                        <li className="pl-3 border-l-4 border-[#04FEE9] text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-[#FAFAFA]">
                            Se sua resposta for <span className="text-[#04FEE9]">sim</span>, você está no lugar certo, nossa meta é assegurar que suas vendas aumentem constantemente.
                        </li>
                        <li className="pl-3 border-l-4 border-[#04FEE9] text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-[#FAFAFA]">
                            Fazer com que seu negócio alcance um <span className="text-[#04FEE9]">aumento nas vendas</span> e continue progredindo incessantemente é nossa prioridade.
                        </li>
                        <li className="pl-3 border-l-4 border-[#04FEE9] text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-[#FAFAFA]">
                            Para impulsionar o crescimento do seu negócio, trabalhamos com  <span className="text-[#04FEE9]">estratégias sólidas</span> para atingir e consolidar um público maior.
                        </li>
                    </ul>
                </div>
            </div>

            <QuemSomos />
        </section>
    )
}