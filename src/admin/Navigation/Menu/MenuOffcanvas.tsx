import React from "react";
import { Menu } from "lucide-react";
import Logo from "@/components/logo";
import { X } from "lucide-react";
import MenuLinks from "./MenuLinks";

const MenuOffcanvas: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleOffcanvas = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Menu Icon */}
            <div className="md:hidden hover:bg-gray-200 cursor-pointer rounded-full p-1">
                <Menu size={24} onClick={toggleOffcanvas} />
            </div>

            {/* Backdrop */}
            <div
                className={`fixed flex flex-col top-0 right-0 h-screen w-[250px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-20 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Header */}
                <div className="flex justify-between items-center px-2 py-5">
                    <Logo />
                    <button
                        onClick={toggleOffcanvas}
                        className="bg-transparent text-black p-0 hover:bg-transparent"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div>
                    {/* Add your content here */}
                    <MenuLinks toggleOffcanvas={toggleOffcanvas} />





                </div>
            </div>

            {/* Backdrop */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-10" 
                    onClick={toggleOffcanvas}
                />
            )}
        </div>
    );
};

export default MenuOffcanvas;