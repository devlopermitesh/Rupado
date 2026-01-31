import TeaTag from '../atoms/Teatag'
import TrendingFeatureCard from '../organs/TrendingFeatureCard'
import ProfileFeatureCard from '@/components/organs/ProfileFeatureCard'
const Features = () => {
  return (
    <div
      className="
      w-full min-h-[60vh]
      flex flex-col items-center 
      px-1 sm:px-2 lg:px-4 py-8
     bg-black
    "
    >
      <TeaTag tag="Power Features" />
      <div className="flex flex-col items-center text-center gap-2 mt-5 sm:mt-10 ">
        <h2 className="text-3xl sm:text-5xl text-white font-ui font-semibold">
          Features in action
        </h2>
        <p className="text-md sm:text-xl text-center font-ui font-thin text-[#FFF9F9] sm:max-w-[54vw] opacity-70">
          Every feature is designed to help you get better AI-generated photos using proven prompts.
        </p>
      </div>
      <br />
      {/* //Cards Features  */}
      <TrendingFeatureCard />
      <br />
      <ProfileFeatureCard />
    </div>
  )
}
export default Features
