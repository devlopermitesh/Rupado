interface FeatureTagsProps {
    items: string[];
    className?: string;
}

const FeatureTags = ({ items, className }: FeatureTagsProps) => {
    return (
        <div className={`flex flex-row gap-3 max-w-full ${className || ''}`}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center px-4 py-2 border border-gray-700 rounded-full bg-gray-900/50 text-gray-300 text-sm whitespace-nowrap"
                >
                    {item}
                </div>
            ))}
        </div>
    )
}

export default FeatureTags;