import Image, { StaticImageData } from 'next/image';

interface IconLabelProps {
    icon: StaticImageData | string;
    label: string;
    iconClassName?: string;
    className?: string;
}

const IconLabel = ({ icon, label, iconClassName, className }: IconLabelProps) => {
    return (
        <div className={`flex flex-row items-center ${className || ''}`}>
            <Image
                src={icon}
                alt={`${label} icon`}
                className={`w-6 object-contain ${iconClassName || ''}`}
            />
            <span className="text-white text-sm font-medium">{label}</span>
        </div>
    );
};

export default IconLabel;