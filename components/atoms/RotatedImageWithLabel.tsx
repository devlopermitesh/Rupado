import { StaticImageData } from 'next/image';
import IconLabel from '../atoms/IconLabel';
import ImageCard from '../atoms/ImageCard';

interface RotatedImageWithLabelProps {
    image: StaticImageData | string;
    icon: StaticImageData | string;
    label: string;
    rotation: 'left' | 'right';
    iconAnimation?: string;
    className?: string;
}

const RotatedImageWithLabel = ({
    image,
    icon,
    label,
    rotation,
    iconAnimation,
    className
}: RotatedImageWithLabelProps) => {
    const rotationClass = rotation === 'left' ? '-rotate-10 translate-x-3.5 z-30' : 'rotate-10';

    return (
        <div className={`w-35 h-50 sm:w-50 sm:h-65 ${rotationClass} ${className || ''}`}>
            <IconLabel
                icon={icon}
                label={label}
                iconClassName={iconAnimation}
            />
            <ImageCard src={image} alt={label} />
        </div>
    );
};

export default RotatedImageWithLabel;