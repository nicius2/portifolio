import { useState } from "react"
import { Heart } from "lucide-react"

export function SobreMim() {
    const [isActiveHeart, setIsActiveHeart] = useState(false)
    const [showMore, setShowMore] = useState(false) // controla o "saber mais"

    const handleToggleHeart = () => {
        setIsActiveHeart(!isActiveHeart);
    }

    return (
        <div id="sobremim" className="text-white flex items-center justify-center flex-col">
            <h1 className="text-3xl font-semibold my-10">Sobre mim</h1>

            <div className="md:w-[800px] w-[380px] p-4 text-sm rounded-4xl border-t-[0.5px] border-b-[0.5px] mb-10 border-[#919191] bg-[#333333]/10 flex flex-col gap-1">

                {/* Cabeçalho com foto + descrição curta */}
                <div className="md:flex md:flex-row flex-col m-2 relative">
                    {/* Botão no topo (canto direito) */}
                    <button
                        onClick={handleToggleHeart}
                        className="absolute top-0 right-0 p-2"
                    >
                        <Heart
                            size={16}
                            color={isActiveHeart ? "red" : "gray"}
                            fill={isActiveHeart ? "red" : "none"}
                        />
                    </button>

                    {/* Imagem + texto */}
                    <div className="flex items-center">
                        <img
                            src="https://aw6znvsusli6h8pi.public.blob.vercel-storage.com/perfilSobre.svg"
                            alt="sobre mim"
                            className="w-24 h-24 rounded-3xl border-b-[0.5px] border-[#919191]"
                        />
                        <p className="m-5 md:text-sm text-xs">
                            Desde os 15 anos, sou apaixonado por tecnologia. Foi nessa época
                            que comecei a desenvolver páginas e buscar soluções para problemas
                            do meu cotidiano por meio da programação.
                        </p>
                    </div>
                </div>


                {/* Texto longo - só mostra se clicar em "Saber mais" no mobile */}
                <div className="flex flex-col gap-4 mb-4 ml-2">
                    <p className={`${!showMore ? "hidden md:block" : ""}`}>
                        Aos 16 anos, criei um aplicativo para a Secretaria de Educação da
                        minha cidade. O objetivo era conectar professores que moravam em
                        áreas rurais — sem disponibilidade para estar na cidade toda semana —
                        aos materiais didáticos, como apostilas, PDFs e jogos para sala de
                        aula. Esse projeto ganhou ainda mais relevância durante o período
                        desafiador da pandemia, em 2021.
                    </p>
                    <p className={`${!showMore ? "hidden md:block" : ""}`}>
                        Ao longo da minha trajetória, venho desenvolvendo tanto habilidades
                        técnicas (soft skills) quanto comportamentais (hard skills), sempre
                        buscando ir além do código e contribuir ativamente para os projetos
                        e para a equipe da qual faço parte.
                    </p>

                    {/* Botão "Saber mais" visível apenas no mobile */}
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="md:hidden text-black bg-white px-4 py-2 rounded-xl mt-2 self-start"
                    >
                        {showMore ? "Mostrar menos" : "Saber mais"}
                    </button>
                </div>
            </div>
        </div>
    )
}
