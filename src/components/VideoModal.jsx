// import React from "react";
import "./VideoModal.css"
import { FaTimes } from "react-icons/fa";


// eslint-disable-next-line react/prop-types
const VideoModal = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <button className="close-button" onClick={onClose}>
                <FaTimes size={30} />
            </button>

            <iframe src="https://drive.google.com/file/d/12-iyivpWVZ2g7XhihvihYhZJAqfsVMrb/preview" width="640" height="480" allow="autoplay"></iframe>
        </div>
    );
};

export default VideoModal;
