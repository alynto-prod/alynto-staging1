import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-white text-2xl font-bold tracking-tighter uppercase border-2 border-armory-orange px-2 py-1">
                            RUSTY<span className="text-armory-orange">OAK</span>
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#" className="text-white hover:text-armory-orange px-3 py-2 rounded-md text-lg font-medium transition-colors">HOME</a>
                            <a href="#" className="text-gray-300 hover:text-armory-orange px-3 py-2 rounded-md text-lg font-medium transition-colors">SHOP ALL</a>
                            <a href="#" className="text-gray-300 hover:text-armory-orange px-3 py-2 rounded-md text-lg font-medium transition-colors">APPAREL</a>
                            <a href="#" className="text-gray-300 hover:text-armory-orange px-3 py-2 rounded-md text-lg font-medium transition-colors">GEAR</a>
                        </div>
                    </div>

                    {/* Icons */}
                    <div className="hidden md:flex items-center space-x-6">
                        <button className="text-gray-300 hover:text-armory-orange transition-colors">
                            <ShoppingCart size={24} />
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black border-b border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="text-white block px-3 py-2 text-base font-medium hover:text-armory-orange">HOME</a>
                        <a href="#" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-armory-orange">SHOP ALL</a>
                        <a href="#" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-armory-orange">APPAREL</a>
                        <a href="#" className="text-gray-300 block px-3 py-2 text-base font-medium hover:text-armory-orange">GEAR</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
