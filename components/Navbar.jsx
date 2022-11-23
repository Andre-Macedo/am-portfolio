import { useRouter } from "next/router";

import NavbarItem from "./NavbarItem";

import style from "../styles/Navbar.module.css"

const Navbar = () => {
    const router = useRouter();
    return (
        <header>
            <nav className={style.nav} >
                <ul >
                    <NavbarItem className={router.pathname == "/" ? `${style.active}` : ""} itemName="_home" itemPath="/" />
                    <NavbarItem className={router.pathname == "/about" ? `${style.active}` : ""} itemName="_about" itemPath="/about" />
                    <NavbarItem className={router.pathname == "/projects" ? `${style.active}` : ""} itemName="_projects" itemPath="/projects" />
                </ul>
            </nav>
        </header>
    )
};

export default Navbar;