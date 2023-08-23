interface ButtonProperties {
    children: string
}

export function Button({ children }: ButtonProperties) {
    return (
        <a href="" type="submit" className="w-auto p-4 text-base md:text-base lg:text-base xl:text-lg font-extrabold text-[#fafafa] rounded-xl bg-[#0DC806]">
            { children.toUpperCase() }
        </a>
    )
}
