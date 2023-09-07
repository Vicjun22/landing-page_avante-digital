import { Colaborators, ComoFunciona, IntroContent } from "./_index";

export function Content() {

    return (
        <div className="w-full h-auto flex flex-col items-center">
            <IntroContent />
            <ComoFunciona />

            {/* <div className="w-[70%] gap-10 flex items-center justify-between pt-12 md:pt-16 text-[#FAFAFA]">
                <Colaborators cargo="Gestor de Tráfego"
                        nome="Leonardo Webster"
                        picSide="left"
                        descricao="Responsável por planejar, criar, implementar e otimizar estratégias de marketing digital.
                        Direcionando o público certo para o seu negócio através dos anúncios pagos." />
            </div> */}
        </div>
    )
}
