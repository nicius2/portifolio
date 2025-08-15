import projeto1 from "../assets/projeto1.svg"

const featuredWorksData = [
    { id: '#', title: "Extensão Foco Já", tecnologias: ['React', 'Tailwindcss', 'Figma', 'Typescript'], img: projeto1, description: 'Criei uma extensão de organização divido em um todo-list, pomodoro e notas que pode ser exportado como PDF.' },
    { id: '#', title: "Extensão Foco Já", img: projeto1, description: 'Criei uma extensão de organização divido em um todo-list, pomodoro e notas que pode ser exportado como PDF.' },
]

export function FeaturedWorks() {
    return (
        <div className="flex flex-col justify-center items-center mt-12 gap-10 mb-10">

            <div className="flex w-fit gap-2 items-center justify-center border-[0.5px] backdrop-blur-[1.5px]  bg-white/4 border-[#919191]/30 rounded-3xl p-2">
                <div className="ping-container">
                    <span className="ping-wave"></span>
                    <span className="ping-dot"></span>
                </div>
                <span className="text-white text-[12px]">
                    Trabalhos em Destaque
                </span>
            </div>

            <div className="flex md:flex-row flex-col gap-10 w-[60rem]">

                {featuredWorksData.map((item) => (
                    <div className="p-10 flex flex-col border-[0.5px] gap-4 backdrop-blur-[1.5px] bg-white/4 border-[#919191]/30 rounded-3xl">
                        <div>
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-4xl"
                            />
                        </div>

                        <h2 className="text-white text-2xl ">{item.title}</h2>
                        <p className="text-sm text-white">{item.description}</p>

                        <div className="flex flex-wrap gap-2">
                            {item.tecnologias && item.tecnologias.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="backdrop-blur-[1.5px] bg-white/4 border-[0.5px] border-transparent transition ease-linear hover:border-[#919191]/30 text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}