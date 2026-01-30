interface FeatureTagsProps {
    items: string[];
    className?: string;
}

const FeatureList = ({ items, className }: FeatureTagsProps) => {
    return (
        <div className={`flex flex-col  max-w-full ${className || ''}`}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className="flex  font-ui  items-center py-1 text-gray-300 text-sm "
                >
                    {item}
                </div>
            ))}
        </div>
    )
}

export default FeatureList;