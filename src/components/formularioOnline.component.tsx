import { Colaborators } from "./_index";

export function FormularioOnline() {

    return (
        <section className="w-full pt-12 md:pt-16 flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center bg-gradient-to-t from-[#04FEE9] to-transparent">
                <div className="w-[70%] gap-10 flex items-center justify-between pt-12 md:pt-16 text-[#FAFAFA]">
                    <Colaborators cargo="Gestor de Tráfego"
                            nome="Leonardo Webster"
                            picSide="left"
                            descricao="Responsável por planejar, criar, implementar e otimizar estratégias de marketing digital.
                            Direcionando o público certo para o seu negócio através dos anúncios pagos." />
                </div>
            </div>

            <div id="formulario-online" className="w-full flex flex-col items-center bg-gradient-to-b from-[#04FEE9] to-[#9652FF]">
                <h1 className="w-[70%] py-[60px] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#FAFAFA] text-center">    
                    PREENCHA O FORMULÁRIO PARA TER UMA <span className="text-[#04FEE9]">AVALIAÇÃO</span>
                </h1>
            </div>

            <iframe src="https://oogsewrf5a4.typeform.com/to/tgel8f9j?typeform-source=www.encurtador.dev"
                title="Formulário"
                frameBorder="0"
                width="100%"
                height="500px" />
        </section>
    )
}