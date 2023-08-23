interface ButtonProperties {
    children: string
}

export function Button({ children }: ButtonProperties) {
    return (
        <a  target="_blank"
            href="https://api.whatsapp.com/send?phone=5551991637205&amp;text=Olá, quero decolar minhas redes sociais agora!"
            rel="nofollow noopener noreferrer"
            type="submit"
            className="w-auto p-4 text-base md:text-base lg:text-base xl:text-lg font-extrabold text-[#fafafa] rounded-xl bg-[#0DC806]">
            { children.toUpperCase() }
        </a>
    )
}