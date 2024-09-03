// import React from "react";
import "./TicketModal.css";
import { FaTimes } from "react-icons/fa";
import ticketmodal from "../assets/ticketbg.png";
import { Link } from "react-router-dom";

// Accept onClose prop to handle modal close
// eslint-disable-next-line react/prop-types
const TicketModal = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <button className="close-button" onClick={onClose}>
                <FaTimes size={30} />
            </button>
            <img src={ticketmodal} alt="modal" className="modal-image w-[350px] h-[680px]" loading="lazy" />
            <Link to='https://rb.gy/mvx2ah' target="_blank" rel="noreferrer noopener" className="absolute top-[640px] w-[300px] opacity-0 bg-red-700 text-center">
                buy
            </Link>
        </div>
    );
};

export default TicketModal;
