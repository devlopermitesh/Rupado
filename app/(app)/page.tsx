import TagImage from "@/components/atoms/TagImage";
import Header from "@/components/organism/Header";
import Image from "next/image";
import HeroAiExpl from "@/assets/HeroAiExpl.jpeg"
import HerooriExpl from "@/assets/HerooriExpl.jpeg"
export default function Home() {
  return (
    <div className="flex flex-col inset-0">
      <Header />
      <main className="flex flex-row w-full ">
        {/* Main Heading Context */}
        <div className="flex flex-col">
          <b className="uppercase font-primary text-sky-700"># Ai tool for indian profiles</b>
          <h2 className="font-primary text-white">Turn your boring photo into a
            <span className="font-primary text-sky-700 ">stylish Ai-edited Dp</span>
          </h2>
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-row w-auto h-48 relative border-2  border-gray-600 rounded-lg">
            <TagImage alt="orignal image" src={HerooriExpl.src} key={"original image"} tag="before" />
            <TagImage alt="Ai image" src={HeroAiExpl.src} key={"Ai image"} tag="after" />
          </div>
        </div>
      </main>
    </div>
  );
}
