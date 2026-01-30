import Image from 'next/image';
import GiftIcon from '@/assets/gift.png';

export default function GiftLabel() {
    return (
        <div className='flex flex-row items-center justify-center border border-neutral-600 bg-black px-5 rounded-full ml-auto mt-3 cursor-pointer'>
            <div className='w-8 h-8'>
                <Image src={GiftIcon} alt='Gift Icon' priority className='object-contain w-full h-auto' />
            </div>
            <span className="bg-linear-to-r from-[#E8C9C9] to-[#DAC9C9] text-transparent bg-clip-text ml-3">
                Get 50+ Ready Prompts Now
            </span>
        </div>
    );
}
