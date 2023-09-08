import { Clientes, ComoFunciona, FormularioOnline, IntroContent } from "./_index";

export function Content() {

    return (
        <div className="w-full h-auto flex flex-col items-center">
            <IntroContent />
            <ComoFunciona />
            <FormularioOnline />
            <Clientes />
        </div>
    )
}
