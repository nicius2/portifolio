import { Mail, Copy, Check, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export function Footer() {
    const [copied, setCopied] = useState(false);
    const email = 'marco.marks06@gmail.com';

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);

            toast.success('E-mail copiado com sucesso!', {
                position: 'bottom-right',
            });

            setTimeout(() => {
                setCopied(false);
            }, 3000); // O ícone volta ao normal depois de 3 segundos
        } catch (error) {
            console.error('Erro ao tentar copiar o texto', error);
            toast.error('Failed to copy email', {
                position: 'bottom-right',
            });
        }
    };

    return (
        <div className="flex items-center flex-col justify-center mx-30 mt-20">
            <div className="w-4xl items-center justify-center border border-[#919191]/30 bg-white/4 py-3 px-4 backdrop-blur-[1.5px] rounded-2xl">
                <div className="mx-8">
                    <h3 className="text-2xl md:py-8 py-4 text-white">
                        Vamos Trabalhar Juntos
                    </h3>

                    <div className="border items-center justify-between border-[#919191]/30 bg-white/4 py-3 px-4 flex gap-3 backdrop-blur-[1.5px] rounded-xl">
                        <div className="flex gap-4 items-center">
                            <Mail className="h-5 w-5 text-gray-400" />
                            <span className="text-gray-300 select-none">
                                {email}
                            </span>
                        </div>

                        <button
                            onClick={handleCopy}
                            className="border border-[#919191]/30 hover:bg-zinc-700 transition ease-linear hover:border-zinc-700 bg-white/4 p-2 flex gap-3 backdrop-blur-[1.5px] rounded-xl"
                        >
                            {/* AQUI ESTÁ A CORREÇÃO: o ícone agora muda com base no estado 'copied' */}
                            {copied ? (
                                <Check className="h-5 w-5 text-green-400" />
                            ) : (
                                <Copy className="h-5 w-5 text-gray-400" />
                            )}
                        </button>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="h-px mt-4 w-full bg-white/4"></div>
                        <span className="text-xs font-light flex justify-center text-white/40">
                            Usually responds within 24 hours
                        </span>

                        <div className="flex justify-center gap-2 items-center">
                            <a
                                href="https://github.com/nicius2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-6 h-6 text-white hover:text-white/60 transition ease-linear" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/vin%C3%ADcius-campos-b08978236/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="w-6 h-6 text-white hover:text-white/60 transition ease-linear" />
                            </a>
                            <a
                                href="https://twitter.com/nicius__"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter className="w-6 h-6 text-white hover:text-white/60 transition ease-linear" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <Toaster
                    position="bottom-right"
                    toastOptions={{
                        style: {
                            background: '#333',
                            color: '#fff',
                            borderRadius: '8px',
                            padding: '12px 16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                        },
                    }}
                />
            </div>
            <div>
                <div className="w-screen flex justify-center h-14 bg-zinc-950/40 border-t-[0.25px] border-white/10">
                    <span className="text-zinc-500 flex items-center">
                        © 2025 Vini | Portfolio by Vinícius Campos
                    </span>
                </div>
            </div>
        </div>
    );
}