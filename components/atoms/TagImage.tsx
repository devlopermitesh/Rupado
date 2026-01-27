const TagImage = ({ src, alt, tag }: { src: string; alt: string; tag?: string }) => {
    return (
        <div className="w-40 h-auto relative"> {/* height add karo */}
            <img
                src={src}
                alt={alt}
                className="absolute inset-0 w-full h-full object-cover"
            />
            {tag && (
                <span className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white px-2 py-1 text-xs">
                    {tag}
                </span>
            )}
        </div>
    )
};

export default TagImage;