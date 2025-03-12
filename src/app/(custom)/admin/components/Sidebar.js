import { useState } from "react";
import { Menu, LayoutDashboard, ClipboardList, Users, Package, FileText } from "lucide-react";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <div className={`bg-white shadow-lg p-4 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-16'} overflow-hidden h-screen`}>
            <div className="flex items-center justify-between mb-6">
                <h1 className={`text-xl font-bold ${isSidebarOpen ? 'block' : 'hidden'}`}>Admin Panel</h1>
                <button onClick={toggleSidebar} className="text-gray-600 text-2xl focus:outline-none">
                    <Menu size={24} />
                </button>
            </div>
            <nav>
                <ul className="space-y-4">
                    <li className="flex items-center p-2 rounded hover:bg-gray-200 cursor-pointer">
                        <LayoutDashboard size={24} />
                        <span className={`ml-3 ${isSidebarOpen ? 'block' : 'hidden'}`}>Dashboard</span>
                    </li>
                    <li className="flex items-center p-2 rounded hover:bg-gray-200 cursor-pointer">
                        <ClipboardList size={24} />
                        <span className={`ml-3 ${isSidebarOpen ? 'block' : 'hidden'}`}>Orders</span>
                    </li>
                    <li className="flex items-center p-2 rounded hover:bg-gray-200 cursor-pointer">
                        <Users size={24} />
                        <span className={`ml-3 ${isSidebarOpen ? 'block' : 'hidden'}`}>Users</span>
                    </li>
                    <li className="flex items-center p-2 rounded hover:bg-gray-200 cursor-pointer">
                        <Package size={24} />
                        <span className={`ml-3 ${isSidebarOpen ? 'block' : 'hidden'}`}>Products</span>
                    </li>
                    <li className="flex items-center p-2 rounded hover:bg-gray-200 cursor-pointer">
                        <FileText size={24} />
                        <span className={`ml-3 ${isSidebarOpen ? 'block' : 'hidden'}`}>Invoices</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
