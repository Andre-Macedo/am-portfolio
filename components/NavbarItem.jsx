import Link from "next/link";

const NavbarItem = props => {

    const { itemName, itemPath } = props;

    return (
        <Link href={itemPath} passHref>
            <li>{itemName}</li>
        </Link>
    )
}

export default NavbarItem;