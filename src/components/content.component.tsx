import { Clientes, ComoFunciona, ComoContratar, FormularioOnline, IntroContent, Footer } from "./_index";

export function Content() {

    return (
        <div className="w-full h-auto flex flex-col items-center">
            <IntroContent />
            <ComoFunciona />
            <FormularioOnline />
            <Clientes />
            <ComoContratar />
            <Footer />
        </div>
    )
}
