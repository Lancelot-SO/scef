/* eslint-disable react/no-unescaped-entities */
// Hero.js

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Hero.css";
import orphane from "../assets/poster2.webp";
import mobileorphane from "../assets/mobilescef.png";

import circle from "../assets/circle.png";
import { FaHome, FaPlayCircle } from "react-icons/fa";
import { FaRegCalendarDays, FaLocationDot } from "react-icons/fa6";
import { GiTrophyCup } from "react-icons/gi";
import { IoIosPerson } from "react-icons/io";
import { IoGridSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import donate from "../assets/donate.png";
import VideoModal from "./VideoModal"; // Import the VideoModal component

// eslint-disable-next-line react/prop-types
const Hero = ({ activeLink }) => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    const renderIcon = () => {
        switch (activeLink) {
            case "about":
                return <IoIosPerson size={30} className="text-white" />;
            case "home":
                return <FaHome size={30} className="text-white" />;
            case "location":
                return <FaLocationDot size={30} className="text-white" />;
            case "grid":
                return <IoGridSharp size={30} className="text-white" />;
            default:
                return null;
        }
    };

    // Function to handle opening the modal
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    // Function to handle closing the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="py-4 lg:flex hidden">
                <div className="herobg ml-[50px] ">
                    <img src={orphane} alt="orphane" className="masked-image" />
                    <div className="">
                        <div className="">
                            <div className="absolute top-[20px] left-[30px] flex gap-2 items-center text-white">
                                <GiTrophyCup size={24} /> Awards
                            </div>
                            <div className="absolute top-[230px] left-[30px] w-[400px] h-[260px]">
                                <h1 className="w-full h-[100px] text-[50px] text-black leading-[50px] tracking-[5px]">
                                    SOUND OF <b className="tracking-[20px]">FREEDOM</b>
                                </h1>
                                <div className="w-[302px] h-[120px]">
                                    <p className="leading-[18px] text-[14px] text-gray-700 font-light">
                                        Federal agent quits his job and rescues a boy from child traffickers but there’s more that takes him deep into the Columbian jungle, putting his life on the line.
                                    </p>
                                    <div className="flex gap-2 items-center text-white my-4">
                                        <FaRegCalendarDays className="text-[#F8B319]" />
                                        <span className="text-gray-700">Sep 13,2024</span>
                                        <ul className="list-disc list-inside">
                                            <li className="text-gray-700">4pm</li>
                                        </ul>
                                    </div>
                                    <div className="flex gap-4">
                                        <div
                                            className="flex items-center gap-1 w-[169px] hover:bg-green-500 shadow-lg h-[36px] bg-[#7d7d7e] bg-opacity-[50%] rounded-[6px] text-white justify-center cursor-pointer"
                                            onClick={handleOpenModal} // Open modal on click
                                        >
                                            <FaPlayCircle /> WATCH TRAILER
                                        </div>
                                        <div className="bg-[#F8B319] w-[108px] h-[36px] shadow-MD rounded-[6px] flex items-center justify-center text-white">
                                            <Link to='https://rb.gy/mvx2ah' target="_blank" rel="noreferrer noopener">BUY TICKET</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-[318px] right-0">
                                <img src={circle} alt="circle" loading="lazy" className="w-[70px] h-[70px]" />
                                <div className="absolute top-[20px] right-[20px]">
                                    {renderIcon()}
                                </div>
                            </div>
                            <div className="absolute top-[540px] left-0">
                                <img src={donate} alt="donate" className="w-[380px]" loading="lazy" />
                            </div>
                            <div className="absolute top-[600px] left-[325px]">
                                <Link to='https://scef-international.org/become-godparent/' target="_blank" rel="noreferrer noopener" className="font-bold text-black text-[13px]">Donate</Link>
                            </div>
                            <div className="absolute top-[550px] left-[50px] ">
                                <h2 className="font-bold text-white">Support a street-connected</h2>
                                <p className="text-[12px] w-[250px] text-white">
                                    This event, celebrating SCEF's 15th anniversary, will feature a powerful
                                    film screening followed by a panel discussion with child rights activists
                                    and community leaders.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {isModalOpen && <VideoModal onClose={handleCloseModal} />} {/* Render VideoModal */}
            </div>
            <div className="lg:hidden flex">
                <div className="px-2 h-[100%]">
                    <img src={mobileorphane} alt="poster" className="w-full rounded-lg" />
                    <p className="text-[12px] w-full text-white my-4 px-4">
                        Federal agent quits his job and rescues a boy from child traffickers but there’s more that takes him deep into the Columbian jungle, putting his life on the line.

                    </p>
                    <div className="flex gap-4 mt-8">
                        <div
                            className="flex items-center gap-1 w-[169px] shadow-lg h-[36px] bg-[#7d7d7e] bg-opacity-[50%] rounded-[6px] text-white justify-center cursor-pointer"
                            onClick={handleOpenModal} // Open modal on click
                        >
                            <FaPlayCircle /> WATCH TRAILER
                        </div>
                        <div className="bg-[#F8B319] w-[108px] h-[36px] shadow-MD rounded-[6px] flex items-center justify-center text-white">
                            <Link to='https://rb.gy/mvx2ah' target="_blank" rel="noreferrer noopener">BUY TICKET</Link>
                        </div>
                    </div>
                    <div className="relative mt-12">
                        <img src={donate} alt="donate" className="w-[380px]" loading="lazy" />
                        <div className="absolute top-[55px] small:left-[325px] left-[305px]">
                            <Link to='https://scef-international.org/become-godparent/' target="_blank" rel="noreferrer noopener" className="font-bold text-white text-[13px]">Donate</Link>
                        </div>
                        <div className="absolute top-[5px] left-[50px] ">
                            <h2 className="font-bold text-white">Support a street-connected</h2>
                            <p className="text-[12px] w-[250px] text-white">
                                This event, celebrating SCEF's 15th anniversary, will feature a powerful
                                film screening followed by a panel discussion with child rights activists
                                and community leaders.
                            </p>
                        </div>
                    </div>

                </div>
                {isModalOpen && <VideoModal onClose={handleCloseModal} />} {/* Render VideoModal */}
            </div>
        </div>
    );
};

export default Hero;
