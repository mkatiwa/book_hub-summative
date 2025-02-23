import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-row justify-between items-center p-4 bg-gray-800 text-white">
            <div>
                <h1>© 2025 Techbookhub. All Rights Reserved.</h1>
            </div>
            <ul className="flex flex-row justify-between items-center w-[500px]">
                <li><Link to="/privacy">Privacy Policy</Link></li>

                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </footer>
    );
}

export default Footer;