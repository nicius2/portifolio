import imgSkills from "../assets/skills.svg";

const skillsData = [
    {
        title: 'Tech', tech: ['React', 'Java', 'Typescript', 'Tailwindcss', 'Node', 'Mysql', 'Postgress', 'JWT', 'Prisma', 'Zod'],
        Ferramentas: ['Git/Github', 'Docker', 'Figma', 'Firebase', 'FlutterFlow']
    }
];

export function Skills() {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center gap-3 my-10">
                <h2 className="text-white text-3xl font-semibold">Skills</h2>
                <span><img src={imgSkills} alt="icone de ferramenta" className="w-10" /></span>
            </div>

            <div className="flex items-center flex-col">

                <div className="flex flex-col gap-2 border-[0.5px] p-10 backdrop-blur-[1.5px] bg-white/4 border-[#919191]/30 rounded-2xl mx-2">
                    <h3 className="text-2xl font-semibold text-white">Tech</h3>
                    {skillsData.map((item, index) => (
                        // Loop through the 'tech' array inside the outer loop
                        <div key={index} className="flex flex-wrap gap-4">
                            {item.tech.map((skill, skillIndex) => (
                                <div>
                                    <span key={skillIndex} className="text-white text-xs p-2 font-semibold rounded-md bg-zinc-700">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col flex-start gap-2 border-[0.5px] my-7 p-6 backdrop-blur-[1.5px] bg-white/4 border-[#919191]/30 rounded-2xl mx-2">
                    <h3 className="text-2xl font-semibold text-white">Ferramentas</h3>
                    {skillsData.map((item, index) => (
                        // Loop through the 'tech' array inside the outer loop
                        <div key={index} className="flex flex-wrap gap-4">
                            {item.Ferramentas.map((skill, skillIndex) => (
                                <div>
                                    <span key={skillIndex} className="text-white text-xs p-2 rounded-md bg-zinc-700">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}