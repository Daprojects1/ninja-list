import Link from "next/link";
import Image from "next/image"

const Navbar = ({ path }) => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={128} height={77} />
            </div>
            <Link href={path.home}><a>Home</a></Link>
            <Link href={path.about}><a>About</a></Link>
            <Link href={path.ninjas}><a>Ninja Listing</a></Link>
        </nav>
    )
}

export default Navbar;