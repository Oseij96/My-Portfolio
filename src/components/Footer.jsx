import React from "react";

export default function Footer() {
    return (
        <div className="py-5 text-center">
            <a
                href="https://github.com/Oseij96"
                className="text-sm text-gray-500 hover:text-gray-800 transition duration-300"
            >
                <i className="fab fa-github-square text-2xl"></i>
            </a>
            <p className="text-sm mt-2 opacity-50">
                &copy; {new Date().getFullYear()} Joel Osei. All rights reserved.
            </p>
        </div>
    );
}