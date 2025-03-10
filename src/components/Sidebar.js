'use client'; // Required for interactivity

import { useState } from 'react';
import Link from 'next/link';
import {
    HomeIcon,
    UsersIcon,
    FolderIcon,
    CogIcon,
    ChartBarIcon,
    ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gradient-to-b from-blue-600 to-blue-700 shadow-lg">
            {/* Mobile Menu Button */}
            <div className="p-4 lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Sidebar Content */}
            <div
                className={`${isOpen ? 'block' : 'hidden'
                    } lg:block w-64 fixed lg:relative h-screen lg:h-auto bg-gradient-to-b from-blue-600 to-blue-700 z-10`}
            >
                <div className="p-6">
                    <h1 className="text-xl font-bold text-white">Dashboard</h1>
                </div>
                <nav className="mt-6">
                    <Link
                        href="/dashboard"
                        className="flex items-center px-6 py-3 text-white hover:bg-blue-500 transition-colors duration-200"
                    >
                        <HomeIcon className="w-6 h-6 mr-3" />
                        <span>Home</span>
                    </Link>
                    <Link
                        href="/dashboard/users"
                        className="flex items-center px-6 py-3 text-white hover:bg-blue-500 transition-colors duration-200"
                    >
                        <UsersIcon className="w-6 h-6 mr-3" />
                        <span>Users</span>
                    </Link>
                    <Link
                        href="/dashboard/roles"
                        className="flex items-center px-6 py-3 text-white hover:bg-blue-500 transition-colors duration-200"
                    >
                        <FolderIcon className="w-6 h-6 mr-3" />
                        <span>Roles</span>
                    </Link>
                    <Link
                        href="/dashboard/settings"
                        className="flex items-center px-6 py-3 text-white hover:bg-blue-500 transition-colors duration-200"
                    >
                        <CogIcon className="w-6 h-6 mr-3" />
                        <span>Settings</span>
                    </Link>
                    <Link
                        href="/dashboard/analytics"
                        className="flex items-center px-6 py-3 text-white hover:bg-blue-500 transition-colors duration-200"
                    >
                        <ChartBarIcon className="w-6 h-6 mr-3" />
                        <span>Analytics</span>
                    </Link>
                    <Link
                        href="/login"
                        className="flex items-center px-6 py-3 text-white hover:bg-blue-500 transition-colors duration-200"
                    >
                        <ArrowLeftOnRectangleIcon className="w-6 h-6 mr-3" />
                        <span>Logout</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
}