import { ButtonScrollToForm } from "./_index";

export function ComoContratar() {

    return (
        <section className="w-full py-12 flex flex-col items-center justify-center text-[#FAFAFA] text-center">
            <div className="w-[70%] py-4 flex flex-wrap gap-10 items-center justify-center">
                <h1 className="w-full text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
                    COMO CONTRATAR A <span className="text-[#04FEE9]">AVANTE DIGITAL</span>?
                </h1>

                <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-normal">
                    Muito simples, basta clicar no botão abaixo e preencher o formuláriopara que nossa equipe de especialistas entre em contato com você.
                </p>

                <ButtonScrollToForm>ENTRAR EM CONTATO COM A AVANTE</ButtonScrollToForm>
            </div>
        </section>
    )
}