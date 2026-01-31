import Header from '@/components/organs/Header'
import PromptfixView from '@/components/organs/PromptfixView'
import ExamplesLibrary from '@/components/templates/ExamplesLibrary'
import Features from '@/components/templates/Features'
import Footer from '@/components/templates/Footer'
import Hero from '@/components/templates/Hero'
import PremiumCard from '@/components/templates/PremiumCard'

const Page = () => {
  return (
    <div className="flex flex-col h-full w-full bg-black">
      <Header />
      <Hero />
      <Features />
      <PromptfixView />
      <ExamplesLibrary />
      <PremiumCard />
      <Footer />
    </div>
  )
}
export default Page
