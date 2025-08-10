import {
    FaHome,
    FaInfoCircle,
    FaServicestack,
    FaEnvelope,
} from "react-icons/fa"

const navLink = [
    {
        name: "Home",
        icon: <FaHome />,
        href: "#",
    },
    {
        name: "About",
        icon: <FaInfoCircle />,
        href: "#",
    },
    {
        name: "Servises",
        icon: <FaServicestack />,
        href: "#",
    },
    {
        name: "Contact",
        icon: <FaEnvelope />,
        href: "#",
    },
];

function Navbar(){

    return(
        <>
        <nav className="bg-gray-800 text-white sticky top-0">
        <div className="container text-sm md:text-xl p-3 md:pl-10 md:pr-10 flex items-center justify-between">
        <h1 className="font-semibold md:font-bold md:text-2xl">🚀 MyWebsite</h1>
        <ul className="flex gap-3 md:space-x-6">
            {/* <li>
                <a href="" className="flex items-center gap-1 hover:text-blue-400"><FaHome />Home</a>
            </li>
            <li>
                <a href="" className="flex items-center gap-1 hover:text-blue-400"><FaInfoCircle />About</a>
            </li>
            <li>
                <a href="" className="flex items-center gap-1 hover:text-blue-400"><FaServicestack />Services</a>
            </li>
            <li>
                <a href="" className="flex items-center gap-1 hover:text-blue-400"><FaEnvelope />Contact</a>
            </li> */}
            {navLink.map((link,index) => (
                 <li key={index}>
                <a href={link.href} className="flex items-center gap-2 hover:text-blue-400">
                    {link.icon}
                    {link.name}
                </a>
            </li>
            ))}
        </ul>
        </div>
        </nav>
        </>
    );
}


export default Navbar;