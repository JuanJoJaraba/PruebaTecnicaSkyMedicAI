'use client'
import { useState } from 'react';
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function AppNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 text-white p-4 flex items-center w-full opacity-90 shadow-lg">
            <div className="flex items-center text-xl font-bold">
                <a href="/" className="flex items-center hover:text-yellow-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 mr-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    <span className="hidden sm:block">Movies</span>
                </a>
            </div>

            <NavigationMenu.Root className="ml-8">
                <NavigationMenu.List className={`sm:flex space-x-4 ${menuOpen ? 'block' : 'hidden'} sm:block`}>
                    <NavigationMenu.Item>
                        <NavigationMenu.Link href="/" className="text-white">
                            Home
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
                <div className="sm:hidden ml-auto">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </NavigationMenu.Root>
        </div>
    );
}
