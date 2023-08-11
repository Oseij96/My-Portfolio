import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div className="py-5 text-center">
            <a
                href="https://github.com/Oseij96"
                className="text-sm text-gray-500 hover:text-gray-800 transition duration-300"
            >
                <FontAwesomeIcon icon={faGithubSquare} size="2x" />
            </a>
            <a
                href="https://www.linkedin.com/in/joel-osei/"
                className="text-sm text-gray-500 hover:text-gray-800 transition duration-300"
            >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <p className="text-sm mt-2 opacity-50">
                &copy; {new Date().getFullYear()} Joel Osei. All rights reserved.
            </p>
        </div>
    );
}