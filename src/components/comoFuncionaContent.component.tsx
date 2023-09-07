import proposta from '../assets/icon/proposta.svg';
import check from '../assets/icon/check.svg';
import lupa from '../assets/icon/lupa.svg';

import avanteDigital from '../assets/images/avante-digital.svg';

import Image from 'next/image';
import { Colaborators } from './colaborators.component';

export function ComoFunciona() {

    return (
        <section className="w-full gap-8 pt-12 md:pt-16 flex flex-col items-center justify-center bg-[url('../assets/backgrounds/bg-gradient-purple.svg')] bg-no-repeat bg-cover">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#FAFAFA] text-center">
                COMO <span className="text-[#9652FF]">FUNCIONA</span>?
            </h1>

            <ul className="w-[70%] gap-10 flex items-center justify-between flex-wrap md:pt-16 text-[#FAFAFA]">
                <li className="w-[100%] md:w-[250px] lg:w-[400px] xl:w-[40%] flex flex-col gap-3">
                    <h2 className="text-xl md:text-2x1 lg:text-3x1 xl:text-3xl font-extrabold flex items-center gap-3"><Image src={lupa} alt='lupa' />Análise</h2>
                    <p>
                        Iniciamos com uma avaliação de suas plataformas, identificando áreas que podem ser aprimoradas para melhor alinhamento com os objetivos do seu empreendimento.
                    </p>
                </li>
                <li className="w-[100%] md:w-[250px] lg:w-[400px] xl:w-[45%] flex flex-col gap-3">
                    <h2 className="text-xl md:text-2x1 lg:text-3x1 xl:text-3xl font-extrabold flex items-center gap-3"><Image src={proposta} alt='proposta' />Proposta</h2>
                    <p>
                        Após a analise do seu negócio, iremos lhe apresentar a estratégia ideal para a sua empresa e para o ramo do seu empreendimento.
                    </p>
                </li>
                <li className="w-[100%] md:w-[250px] lg:w-[400px] xl:w-[45%] flex flex-col gap-3">
                    <Image src={avanteDigital} alt='Avante Digital' title='Avante Digital' />
                </li>
                <li className="w-[100%] md:w-[250px] lg:w-[400px] xl:w-[45%] flex flex-col gap-3">
                    <h2 className="text-xl md:text-2x1 lg:text-3x1 xl:text-3xl font-extrabold flex items-center gap-3"><Image src={check} alt='check' />Tráfego Pago</h2>
                    <p>
                        Após a confirmação e aprovação do conteúdo, procedemos com a publicação. Em seguida, executamos estratégias de tráfego pago para promover através das plataformas de rede.
                    </p>
                </li>
            </ul>

            <div className="w-[70%] gap-10 flex items-center justify-between md:pt-16 text-[#FAFAFA]">
                <Colaborators cargo="Social Media"
                    nome="Luana Hoppe"
                    picSide="right"
                    descricao="Responsável pela gestão dos perfis nas redes sociais, gerando conteúdos para
                        atrair novos seguidores e clientes para as plataformas digitais do seu negócio." />
            </div>
        </section>
    )
}