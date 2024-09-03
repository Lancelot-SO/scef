// import React from 'react'

import child from "../assets/child.png"

const Header = () => {
    return (
        <div>
            <div className="lg:flex items-center gap-2 justify-center mt-4 hidden">
                <h2 className="text-white font-bold lg:text-[30px] md:text-[20px] lg:leading-[36px]">DONATE TO HELP A</h2>
                <img src={child} alt="donate" />
                <h2 className="text-[#F8B319] font-bold lg:text-[30px] md:text-[20px] lg:leading-[36px]">CHILD TODAY</h2>
            </div>
        </div>
    )
}

export default Header