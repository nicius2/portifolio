interface EmojiData {
    meuEmoji: string;
    titulo: string;
}

export function EmojiDevelopment({ meuEmoji, titulo }: EmojiData) {
    return (
    <div className="relative w-fit flex gap-2 items-center my-2 p-2 rounded-3xl overflow-hidden glassmorphism-border shimmer-mask">
    <span>
        <img src={meuEmoji} alt="Emoji do programador" />
    </span>
    <span className="font-semibold text-[#919191] text-sm">
        {titulo}
    </span>
</div>
    )
}