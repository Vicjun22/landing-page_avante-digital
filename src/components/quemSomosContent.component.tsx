import { ButtonScrollToForm } from "./_index";

import rocket from "../assets/images/foguete-e-astronauta.svg";

import Image from 'next/image'

export function QuemSomos() {

    return (
        <section className="w-[70%] pt-12 md:pt-16 flex flex-col items-center justify-center text-[#FAFAFA] text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
                O QUE É A <span className="text-[#04FEE9]">AVANTE DIGITAL</span>?
            </h1>

            <div className="w-full gap-5 py-5 md:py-8 flex flex-col items-center md:flex-row justify-between">
                <Image  src={rocket}
                        className="h-auto w-52 md:w-56 lg:w-60 xl:w-64"
                        alt="Rocket"
                        priority />

                <div className="w-auto h-auto gap-5 flex flex-col items-center justify-between">
                    <p>
                        Somos uma agência especializada em marketing e gestão de tráfego pago. Nosso foco é impulsionar o seu negócio e {' '}
                        <span className="text-[#04FEE9]">destacar</span> seus produtos e serviços de maneira eficaz nas plataformas de mídia social.
                    </p>

                    <ButtonScrollToForm>Quero decolar minhas vendas</ButtonScrollToForm>
                </div>
            </div>
        </section>
    )
}