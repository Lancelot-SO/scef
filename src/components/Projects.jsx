import { useState } from "react";
import "./Project.css";
import Photo1 from "../assets/photo1.png";
import Photo2 from "../assets/photo2.png";
import Photo3 from "../assets/photo1.png";
import ticket from "../assets/movie-ticket.png";
import line from "../assets/liner.png";
import TicketModal from "../components/TicketModal";
import { Link } from "react-router-dom";

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    const data = [
        {
            "id": 1,
            pic: Photo1,
        },
        {
            "id": 2,
            pic: Photo2,
        },
        {
            "id": 3,
            pic: Photo3,
        },
    ];

    // Function to toggle modal visibility
    const handleBuyTicketClick = () => {
        setIsModalOpen(true);
    };

    return (
        <div>
            <div className="lg:flex hidden">

                <div className="flex flex-col gap-2">
                    <p className="text-white font-medium text-[22px] leading-[22px] mb-2 pl-1">
                        Our Projects
                    </p>
                    <div className="h-[400px] w-[180px] rounded-[15px] overflow-y-scroll custom-scrollbar gap-4 shadow-lg p-6 bg-gradient-to-br from-[#696868] to-[#694f2a] items-center flex flex-col">
                        {data.map((item) => (
                            <div key={item.id} className="flex flex-col">
                                <Link to='https://scef-international.org/projects/' target="_blank" rel="noreferrer noopener">
                                    <img src={item.pic} alt="pic" className="w-[150px] h-[178px]" loading="lazy" />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <img src={line} alt="line" />
                    <div>
                        <div className="relative">
                            <img src={ticket} alt="ticket" className="w-[184px] h-[241px]" loading="lazy" />
                            <button
                                onClick={handleBuyTicketClick} // Add click handler
                                className="absolute top-[80px] left-[74px] text-[12px] text-white text-center cursor-pointer"
                            >
                                Buy <br /> Ticket
                            </button>
                        </div>
                    </div>
                </div>

                {/* Render the modal */}
                {isModalOpen && <TicketModal onClose={() => setIsModalOpen(false)} />}
            </div>
        </div>
    );
};

export default Projects;
