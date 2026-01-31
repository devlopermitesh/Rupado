import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface CompareImageProps {
  label: string
  src: string
  priority?: boolean
  className?: string
}

const CompareImage = ({ label, src, priority = false, className }: CompareImageProps) => {
  return (
    <div className={twMerge('flex flex-col gap-2 w-full max-w-sm', className)}>
      <h3 className="text-sm sm:text-base font-semibold text-foreground text-white">{label}</h3>

      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-muted">
        <Image
          src={src}
          alt={`${label} example`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, 300px"
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default CompareImage
