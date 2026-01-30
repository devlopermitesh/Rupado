import Link from "next/link"
import { twMerge } from "tailwind-merge"

interface Props {
    label: string
    href: string
    className?: string
}

const NavMenuItem = ({ label, href, className }: Props) => {
    return (
        <Link
            href={href}
            className={twMerge(
                "relative text-md sm:text-base lg:text-lg font-normal text-foreground",
                "transition-colors duration-200 hover:text-white",
                "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0",
                "after:bg-white after:transition-all after:duration-300 hover:after:w-full",
                className
            )}
        >
            {label}
        </Link>
    )
}

export default NavMenuItem
