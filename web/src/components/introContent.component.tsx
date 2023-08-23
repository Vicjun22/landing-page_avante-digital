import { Button } from "./index";

export function IntroContent() {

    return (
        <section className="w-full py-20 gap-8 flex flex-col items-center justify-center bg-[url('../assets/backgrounds/bg-escuro-com-espirais.svg')] bg-cover bg-no-repeat bg-fixed">
            <h1 className="w-[70%] h-auto text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#fafafa] text-center">
                Uma equipe especializada para <span className="text-[#04FEE9]">impulsionar o crescimento de sua empresa.</span>
            </h1>

            <Button>Agendar uma consultoria</Button>
        </section>
    )
}