import { twMerge } from 'tailwind-merge'

interface TeaTagProps {
  tag: string
  className?: string
}
const TeaTag = ({ tag, className }: TeaTagProps) => {
  return (
    <div
      className={twMerge(
        'flex text-white flex-row items-center gap-2 bg-[#3A3636]  px-5 sm:px-11 py-1 sm:py-2 rounded-full',
        className
      )}
    >
      <span className="w-2 h-2 bg-[#00D9FF] rounded-full opacity-55"></span>
      {tag}
    </div>
  )
}
export default TeaTag
