import React from "react";
import Title from "./Title";

export default function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form
                    action="https://getform.io/f/be1aefc7-4b6e-4e48-9553-cb6a4f4706b2"
                    method="POST"
                    className="flex flex-col w-full md:w-7/12"
                >
                    <Title>Contact</Title>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                        required
                    />
                    <label for="email" class="mb-5">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                            required
                        />
                        <span class="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                            Please enter a valid email address
                        </span>
                    </label>
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                        required
                    >
                    </textarea>
                    <button className="text-center inline-block px-8 py-3 w-max 
                        text-base font-medium rounded-md text-white 
                        bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
                    >
                        Work With Me
                    </button>
                </form>
            </div>
        </div>
    );
}