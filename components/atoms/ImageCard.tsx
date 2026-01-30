import Image, { StaticImageData } from 'next/image';

interface ImageCardProps {
    src: StaticImageData | string;
    alt: string;
    className?: string;
}

const ImageCard = ({ src, alt, className }: ImageCardProps) => {
    return (
        <div className={`relative w-full aspect-[4/5]  overflow-hidden rounded-xl bg-muted ${className || ''}`}>
            <Image
                src={src}
                alt={alt}
                fill
                priority
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover"
            />
        </div>
    );
};

export default ImageCard;