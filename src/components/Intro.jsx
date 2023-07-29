import React from "react";

export default function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Joel</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Full-Stack Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">I'm an indie full-stack developer and I'm well-versed in a variety of frontend frameworks and libraries,
                enabling me to design user-friendly interfaces with a keen eye for aesthetics. Simultaneously, my backend expertise
                empowers me to handle data, develop APIs, and ensure the smooth functioning of web applications
            </p>
        </div>
    );
}