import { Menu, Bell, MessageSquare, Moon } from "lucide-react";

const Navbar = ({ toggleSidebar }) => {
    return (
        <div className="bg-white shadow-md p-4 flex items-center justify-between">
            <div className="flex items-center">
                <button onClick={toggleSidebar} className="text-gray-600 text-2xl focus:outline-none lg:hidden">
                    <Menu size={24} />
                </button>
                <input type="text" placeholder="Search here..." className="ml-4 p-2 border rounded-lg w-64" />
            </div>
            <div className="flex items-center space-x-4">
                {/* <Moon size={24} className="cursor-pointer" /> */}
                <Bell size={24} className="cursor-pointer" />
                <MessageSquare size={24} className="cursor-pointer" />
                <div className="flex items-center space-x-2">
                    <img src="https://via.placeholder.com/40" alt="Admin" className="w-10 h-10 rounded-full" />
                    <span className="hidden lg:block">Admin</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
