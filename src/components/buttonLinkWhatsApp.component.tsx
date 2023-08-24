interface ButtonProperties {
    children: string
}

export function ButtonLinkWhatsApp({ children }: ButtonProperties) {
    return (
        <a  target="_blank"
            title={ children }
            href="https://api.whatsapp.com/send?phone=5551991637205&amp;text=Olá, quero decolar minhas redes sociais agora!"
            rel="nofollow noopener noreferrer"
            className="w-auto p-4 text-base md:text-base lg:text-base xl:text-lg font-extrabold text-[#FAFAFA] rounded-xl bg-[#2E9A2A] hover:bg-[#0DC806]">
            { children.toUpperCase() }
        </a>
    )
}