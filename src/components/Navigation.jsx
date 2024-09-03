import { useState } from "react";
import logo from "../assets/newsceflogo.png";
import navBg from "../assets/navBg.png";
import child from "../assets/child.png"

import { Link, NavLink } from "react-router-dom";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";  // Import the Home icon
import { IoIosPerson } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoGridSharp } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const Navigation = ({ activeLink, setActiveLink }) => {
    const [active, setActive] = useState(activeLink); // Initialize with the activeLink prop

    const handleClick = (link) => {
        setActive(link);
        setActiveLink(link); // Update active link in parent
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div>
            <div className="lg:flex hidden">
                <div className="flex flex-col gap-14">
                    <div className="flex flex-col items-center gap-3 text-white font-bold text-[22px]">
                        <img src={logo} alt="logo" loading="lazy" className="w-[60px] h-[60px]" />
                        <span>SCEF</span>
                    </div>
                    <nav>
                        <div className="relative">
                            <img src={navBg} alt="nav" loading="lazy" className="ml-[16px] w-[80px] h-[350px]" />
                            <div>
                                <ul className="absolute h-[200px] top-[70px] left-[45px] flex flex-col items-center justify-between text-white">
                                    {/* Always render the Home link */}
                                    {active !== "home" && (
                                        <li onClick={() => handleClick("home")} className="cursor-pointer"><FaHome size={20} /></li>
                                    )}
                                    {active !== "about" && (
                                        <li onClick={() => handleClick("about")} className="cursor-pointer"> <IoIosPerson size={20} /></li>
                                    )}

                                    <li><Link to="https://maps.app.goo.gl/WtjfPXW8wPCoK2vm7" target="_blank" rel="noreferrer noopener" ><FaLocationDot size={20} /></Link></li>


                                    <li><Link to="https://scef-international.org/" target="_blank" rel="noreferrer noopener"><IoGridSharp size={20} /></Link></li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="lg:hidden flex">
                <div className="flex items-center h-[100px] justify-between w-full px-2">
                    <div className="flex flex-col items-center">
                        <img src={logo} alt="logo" loading="lazy" className="w-[40px] h-[40px]" />
                        <span className="text-white">SCEF</span>
                    </div>
                    <img src={child} alt="donate" />
                    <div className='md:hidden flex items-center pr-4'>
                        <button onClick={toggleMenu} className='text-2xl z-50'>
                            {isMenuOpen ? <FaTimes className='text-white' /> : <FaBars className='text-white' />}
                        </button>
                    </div>
                    {isMenuOpen && (
                        <div className='fixed top-0 right-0 h-full w-full bg-slate-700 z-10 flex flex-col items-center justify-center'>
                            <ul className='space-y-6 text-white text-lg'>
                                <li>
                                    <NavLink
                                        to="/"
                                        className="flex items-center gap-2"
                                    >
                                        Home <FaHome />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        className="flex items-center gap-2"
                                    >
                                        About <IoIosPerson />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="https://maps.app.goo.gl/WtjfPXW8wPCoK2vm7" target="_blank" rel="noreferrer noopener"
                                        className="flex items-center gap-2"
                                    >
                                        Location <FaLocationDot />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="https://scef-international.org/" target="_blank" rel="noreferrer noopener"
                                        className="flex items-center gap-2"
                                    >
                                        Projects <IoGridSharp />
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navigation;
