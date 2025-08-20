import imgEducacao from "../assets/imgEducacao.svg";
import imgJovemTech from "../assets/imgTech.svg";

const experienceData = [
    { id: '#', img: imgEducacao, title: 'Software Developer Mobile', ano: '(jan 2021 -  fev 2023)', subTitle: 'Secretária de Educação de Paulino Neves', descrição: ['- Desenvolvedor  de interface interativas usando React Native e Figma', '- Manuntenção de Código em React Native, Typescript e banco de Dados no Supabase'] },
    {
        id: '#', img: imgJovemTech, title: 'Bolsista Jovem Tech', ano: '(maio 2025 - o momento)', subTitle: 'Aprimoramento com treinamentos em competências técnicas e habilidades comportamentais', descrição: ['- Estudo e projetos reais com criação e implementação de APIs REST com Java',
            '- Projetos com elaboração de interface usando React para consumir API e apresentar dados de forma interativa e responsiva ao usuário',
            '- Desenvolvimento de Tasks usando metodologias Ágeis.']
    }
]


export function Experience() {
    return (
        <div id="projetos" className="my-10 md:ml-40 flex  flex-col items-center md:items-start">
            <h1 className="text-3xl mb-5 font-semibold text-white">Experiências</h1>
            <div className="text-white flex flex-col gap-15">

                {experienceData.map((item) => (
                    <div>
                        <div></div>
                        <div className="flex md:flex-row flex-col items-center gap-3 ">
                            <img src={item.img} alt={item.title} className="md:w-14 w-10 " />
                            <h2 className="text-xl font-semibold">{item.title}</h2>
                            <span className="text-xs md:text-sm mb-4 md:mb-0">{item.ano}</span>
                        </div>

                        <div className="flex flex-col ml-14">
                            <h3 className="text-sm  font-bold">{item.subTitle}</h3>
                            {item.descrição.map((index, descricao) => (
                                <p key={descricao} className="text-zinc-200 text-sm md:text-medium">{index}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}