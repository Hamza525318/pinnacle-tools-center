"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function AdminLayout({ children }) {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="flex-1 flex flex-col">
                <Navbar toggleSidebar={toggleSidebar} />
                <div className="p-6 flex-1 overflow-y-auto">{children}</div>
            </div>
        </div>
    );
}
