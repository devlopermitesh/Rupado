import Image from "next/image";
import RupadoLogo from "@/assets/logo.png"

type LogoSize = "sm" | "md" | "lg" | "xl"
interface LogoProps {
    size?: LogoSize,
    priority?: boolean
}

const sizeMap: Record<LogoSize, string> = {
    sm: "w-8 sm:w-8",
    md: "w-12 sm:w:22",
    lg: "w-36 sm:w-44",
    xl: "w-48 sm:w-56",
}

const Logo = ({ size = "md", priority = false }: LogoProps) => {
    return (
        <div className={`${sizeMap[size]} relative`}>
            <Image src={RupadoLogo} alt="Rupado logo" priority={priority} className="w-full h-auto object-contain" />

        </div>
    )
}
export default Logo