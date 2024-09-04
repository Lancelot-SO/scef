/* eslint-disable react/no-unescaped-entities */
// About.js
import "./About.css"
import orphane from "../assets/about-orphanes.jpg";
import circle from "../assets/circle.png";
import { FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
// import { GiTrophyCup } from "react-icons/gi";
import { IoIosPerson } from "react-icons/io";
import { IoGridSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import donate from "../assets/donate.png";
import Navigation from "../components/Navigation";

// eslint-disable-next-line react/prop-types
const About = ({ activeLink }) => {
    const renderIcon = () => {
        switch (activeLink) {
            case "home":
                return <FaHome size={30} className="text-white" />;
            case "about":
                return <IoIosPerson size={30} className="text-white" />;
            case "location":
                return <FaLocationDot size={30} className="text-white" />;
            case "grid":
                return <IoGridSharp size={30} className="text-white" />;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="py-4 lg:flex hidden">
                <div className="about-herobg ml-[50px] ">
                    <img src={orphane} alt="orphane" className="mask-image" />
                    <div className="">
                        <div className="">
                            <div className="absolute top-[130px] left-[30px] w-[700px]">
                                <h1 className="text-[30px] text-[#F8B319] leading-[50px] tracking-[5px] font-bold">
                                    #FreeTheChildren Campaign
                                </h1>
                                <div className="">
                                    <p className="leading-[18px] text-[14px] text-white font-light">
                                        Our #FreeTheChildren campaign is an initiative aimed at combating child trafficking through awareness, education, and community empowerment. We believe every child deserves a childhood free from fear, violence, and exploitation.                                 </p>
                                    <div className="flex flex-col text-white my-4">
                                        <h2 className="text-[#F8B319] font-bold">Our aim is simple </h2>
                                        <p>To increase public awareness about child exploitation and trafficking in Ghana.</p>
                                        <p>
                                            To educate communities, stakeholders, and policymakers about the impact of child exploitation and
                                            the importance of advocacy.
                                        </p>
                                        <p>
                                            To engage with local communities, NGOs, government bodies, and international organizations to
                                            build a coalition against child exploitation.
                                        </p>
                                        <p>
                                            To raise funds to support SCEF's ongoing and future initiatives aimed at combating child
                                            exploitation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-[300px] right-0">
                                <img src={circle} alt="circle" className="w-[70px] h-[70px]" />
                                <div className="absolute top-[20px] right-[20px]">
                                    {renderIcon()}
                                    <IoIosPerson size={30} className="text-white" />
                                </div>
                            </div>
                            <div className="absolute top-[510px] left-0">
                                <img src={donate} alt="donate" className="w-[380px]" />
                            </div>
                            <div className="absolute top-[570px] left-[325px]">
                                <Link to='https://scef-international.org/become-godparent/' target="_blank" rel="noreferrer noopener" className="font-bold text-black text-[13px]">Donate</Link>
                            </div>
                            <div className="absolute top-[550px] left-[50px] ">
                                {/* <h2 className="font-bold text-white">Support a street-connected child</h2> */}
                                <p className="text-[16px] w-[250px] text-white">
                                    Funds raised will support the fight against child trafficking and SCEF’s advocacy initiatives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:hidden flex">
                <div className="about-mobilebg">
                    <Navigation />
                    <div className="about-mainbg w-full h-[100%] px-4">
                        <div className="w-full pt-4">
                            <h1 className="text-[16px] text-[#F8B319] leading-[30px] tracking-[4px] font-bold">
                                #FreeTheChildren Campaign
                            </h1>
                            <div className="">
                                <p className="leading-[18px] text-[14px] text-white font-light">
                                    Our #FreeTheChildren campaign is an initiative aimed at combating child trafficking through awareness, education, and community empowerment. We believe every child deserves a childhood free from fear, violence, and exploitation.                                 </p>
                                <div className="flex flex-col text-white my-4">
                                    <h2 className="text-[#F8B319] font-bold">Our aim is simple </h2>
                                    <p className="text-[12px]">To increase public awareness about child exploitation and trafficking in Ghana.</p>
                                    <p className="text-[12px]">
                                        To educate communities, stakeholders, and policymakers about the impact of child exploitation and
                                        the importance of advocacy.
                                    </p>
                                    <p className="text-[12px]">
                                        To engage with local communities, NGOs, government bodies, and international organizations to
                                        build a coalition against child exploitation.
                                    </p>
                                    <p className="text-[12px]">
                                        To raise funds to support SCEF's ongoing and future initiatives aimed at combating child
                                        exploitation.
                                    </p>
                                </div>
                            </div>
                            <div className="">
                                <div className="mt-16">
                                    <img src={donate} alt="donate" className="w-[380px]" />
                                </div>
                                <div className="absolute top-[570px] small:left-[345px] small:top-[560px] left-[312px] xsmall:left-[345px] xsmall:top-[560px] vsm:left-[325px] msm:left-[300px] msm:top-[585px]">
                                    <Link to='https://scef-international.org/become-godparent/' target="_blank" rel="noreferrer noopener" className="font-bold text-white text-[10px]">Donate</Link>
                                </div>
                                <div className="absolute top-[545px] msm:top-[560px] msm:left-[31px] left-[45px] ">
                                    {/* <h2 className="font-bold text-white">Support a street-connected child</h2> */}
                                    <p className="text-[16px] w-[250px] text-white">
                                        Funds raised will support the fight against child trafficking and SCEF’s advocacy initiatives.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
