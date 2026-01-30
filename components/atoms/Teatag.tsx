interface TeaTagProps {
    tag: string
}
const TeaTag = ({ tag }: TeaTagProps) => {
    return (
        <div className="flex flex-row items-center 
        gap-2
        bg-[#3A3636]  px-5 sm:px-11 py-1 sm:py-2 rounded-full">
            <span className="w-2 h-2 bg-[#00D9FF] rounded-full opacity-55">
            </span>
            {tag}
        </div>
    )
}
export default TeaTag