import { useState } from 'react';
import "./Home.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import About from './About';

const Home = () => {
    const [activeLink, setActiveLink] = useState("home"); // State to manage active link
    const [isHeroVisible, setIsHeroVisible] = useState(true); // State to control Hero visibility

    const handleLinkChange = (link) => {
        setActiveLink(link);
        if (link === "about") {
            setIsHeroVisible(false); // Hide Hero when "About" is clicked
        } else {
            setIsHeroVisible(true);  // Show Hero for "Home" or other links
        }
    };

    return (
        <div>
            <div className='lg:flex hidden'>
                <div className="mainbg">
                    <div className="flex flex-col">
                        <div className="mb-4">
                            <Header />
                        </div>
                        <div className="flex max-w-full h-screen px-4 gap-2 py-2">
                            <div className="w-[215px]">
                                <Projects />
                            </div>
                            <div className="w-[1096px] relative">
                                {/* Conditionally render Hero and About with fade effect */}
                                {isHeroVisible ? (
                                    <Hero activeLink={activeLink} />
                                ) : (
                                    <About className="fade-in" />
                                )}
                            </div>
                            <div className="right">
                                <Navigation activeLink={activeLink} setActiveLink={handleLinkChange} /> {/* Pass setActiveLink to Navigation */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobilebg lg:hidden'>
                <div>
                    <Navigation />
                    <div>
                        <Hero />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
