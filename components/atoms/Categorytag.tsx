interface CategoryTagProps {
    label: "Trending" | "ReadyMade"
    iconsrc: string,
    className?: string;
}

const CategoryTag = ({ label, iconsrc, className }: CategoryTagProps) => {
    return (
        <div className={`flex flex-row items-center gap-1.5 px-3 py-1.5 rounded-full border border-cyan-400/50 bg-cyan-900/20 backdrop-blur-sm ${className || ''}`}>
            <img src={iconsrc} alt={label} className="w-4 h-4" />
            <span className="text-cyan-400 text-sm font-medium">{label}</span>
        </div>
    )
}

export default CategoryTag