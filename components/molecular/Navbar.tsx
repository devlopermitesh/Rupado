import NavMenuItem from "../atoms/NavbarItem"

const Navbar = () => {
    return (
        <nav className="flex  gap-1 sm:gap-8 lg:gap-10 ">
            <NavMenuItem label="Examples" href="/examples" />
            <NavMenuItem label="Premium" href="/premium" />
        </nav>
    )
}

export default Navbar
