interface ButtonProperties {
    children: string
}

export function ButtonScrollToForm({ children }: ButtonProperties) {

    return (
        <button title={ children }
            // onClick={}
            className="w-auto p-4 text-base md:text-base lg:text-base xl:text-lg font-extrabold text-[#FAFAFA] rounded-xl bg-[#2E9A2A] hover:bg-[#0DC806]">
            { children.toUpperCase() }
        </button>
    )
}