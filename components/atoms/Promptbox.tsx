import { twMerge } from 'tailwind-merge'

interface PromptBoxProps {
  prompt: string
  className?: string
}
const Promptbox = ({ prompt, className }: PromptBoxProps) => {
  return (
    <div
      className={twMerge(
        'flex flex-col w-full bg-black rounded-md  border border-neutral-800 p-2',
        className
      )}
    >
      <h3 className="font-playfair font-medium text-[#CE8D35]">Prompt</h3>
      <div className="flex flex-col font-ui text-sm bg-[#c7c2c246] text-white/90 p-2 rounded-lg">
        {prompt}
      </div>
    </div>
  )
}
export default Promptbox
