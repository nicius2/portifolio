import imgFaculdade from "../assets/ahanguera.svg"

export function Academico() {
    return (
        <div className="my-10 text-white md:w-[1000px] md:gap-0 gap-2 md:ml-40 flex flex-col relative">
            <h2 className="text-2xl font-semibold mb-2">Formações Acadêmica</h2>
            <div className="flex justify-between items-center">
                <h3 className="md:text-sm text-xs font-semibold md:text-medium">Bacharelado - Ciência da Computação</h3>
                <div className="flex  gap-4 items-center">
                    <img src={imgFaculdade} alt="imagem da faculdade" className="md:w-10 w-8" />
                    <span className="text-xs font-semibold">Ahanguera - Presencial</span>
                </div>
            </div>
            <span className="md:text-sm text-xs">2024 - 2028 (em andamento)</span>

            <div className="flex w-fit mt-10 gap-2 items-center justify-center border-[0.5px] backdrop-blur-[1.5px] bg-white/4 border-[#919191]/30 rounded-3xl p-2">
                <div className="ping-container">
                    <span className="ping-wave"></span>
                    <span className="ping-dot"></span>
                </div>
                <span className="text-white text-[12px]">
                    Cursos e Certificados realizados
                </span>
            </div>

            <a
                href="https://seulink.com/certificados"
                className="w-fit px-6 py-2 mt-6 rounded-md text-sm font-semibold bg-white text-zinc-900"
                target="_blank"
                rel="noopener noreferrer"
            >
                Certificados
            </a>
        </div>
    )
}