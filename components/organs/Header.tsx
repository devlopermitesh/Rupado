import Logo from "../atoms/Icon";
import TryoutBtn from "../atoms/TryoutBtn";
import Navbar from "../molecular/Navbar";

const Header = () => {
    return (
        <div className="flex flex-row h-10 
        rounded md:rounded-md w-screen sm:w-[50vw] glassyheader mx-auto items-center justify-around md:px-10 md:mt-8">
            <span className="flex flex-row items-center gap-1 justify-center">
                <Logo priority={true} size="sm" />

                <h3 className="font-fredoka text-xl font-extrabold z-10 text-white">Rupado</h3>
            </span>
            <Navbar />
            <TryoutBtn />
        </div>
    )
}
export default Header;