import React from "react";
import '../Assets/Styles/ScrollDownArrow.css';

const ScrollDownArrow = () => {
    const handleScroll = (e) => {
        e.preventDefault();
        window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <a 
                href="#" 
                className="scroll-down-link scroll-down-arrow" 
                data-iconfont="ETmodules" 
                data-icon
                onClick={handleScroll}
            >
            </a>
        </div>
    );
};

export default ScrollDownArrow;
