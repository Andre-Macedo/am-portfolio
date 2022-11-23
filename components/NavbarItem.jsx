import Link from "next/link";

const NavbarItem = props => {

    const { className, itemName, itemPath } = props;

    return (
        <Link href={itemPath} passHref>
            <li className={className} >{itemName}</li>
        </Link>
    )
}

export default NavbarItem;