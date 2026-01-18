import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { ShoppingCart, Menu as MenuIcon, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png';

const { Header } = Layout;

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const menuItems = [
        { key: '/', label: 'HOME' },

        { key: 'shop', label: 'SHOP ALL' },
        { key: 'apparel', label: 'APPAREL' },
        { key: 'gear', label: 'GEAR' },
    ];

    const handleMenuClick = ({ key }) => {
        if (key.startsWith('/')) {
            navigate(key);
            setOpen(false);
        }
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <Header
            style={{
                position: 'fixed',
                top: 0,
                zIndex: 50,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                borderBottom: 'none',
                borderBottom: 'none',
                height: 'auto',
                minHeight: '100px', // Increased height for larger logo
                backdropFilter: 'none',
            }}
            className="px-6 md:px-16 py-4"
        >
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('/')}>
                <img
                    src={logo}
                    alt="Rusty Oak Armory"
                    className="h-10 md:h-14 w-auto object-contain"
                    style={{ maxHeight: '64px' }} // Increased from 40px
                />
            </div>

            {/* Desktop Menu - Custom Links - FORCED FLEX */}
            <nav
                className="hidden md:flex items-center space-x-8"
                style={{ flexDirection: 'row', alignItems: 'center', gap: '2rem' }}
            >
                {menuItems.map((item) => (
                    <button
                        key={item.key}
                        onClick={() => handleMenuClick(item)}
                        className="bg-transparent border-none text-white font-bebas text-xl tracking-widest hover:text-armory-red transition-colors cursor-pointer"
                        style={{ color: '#FFFFFF', fontSize: '1.25rem', fontFamily: 'Bebas Neue, sans-serif' }}
                    >
                        {item.label}
                    </button>
                ))}
            </nav>

            {/* Icons & Actions - FORCED FLEX */}
            <div
                className="flex items-center gap-4 md:gap-6"
                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
            >
                {/* Mobile Menu Button - First on Mobile */}
                <div
                    className="md:hidden text-white cursor-pointer"
                    onClick={showDrawer}
                    style={{ color: '#FFFFFF' }}
                >
                    <MenuIcon size={28} />
                </div>

                {/* CTA Button - Visible on Mobile now */}
                <div className="block">
                    <button
                        onClick={() => navigate('/contact')}
                        className="bg-white hover:bg-white/90 text-black rounded-full h-10 md:h-12 px-4 md:px-6 font-source font-bold tracking-wide text-sm md:text-base flex items-center gap-2 md:gap-3 transition-colors cursor-pointer border-none"
                    >
                        <span className="hidden md:inline">Get in Touch</span>
                        <span className="md:hidden">Contact</span>
                        <div className="bg-armory-red text-white rounded-full p-1 flex items-center justify-center w-5 h-5 md:w-6 md:h-6" style={{ backgroundColor: '#B54A3C', color: 'white' }}>
                            <ArrowRight size={12} md:size={14} strokeWidth={3} />
                        </div>
                    </button>
                </div>

                {/* Shopping Cart - Hidden on Mobile */}
                <div
                    className="hidden md:block text-white hover:text-armory-red transition-colors cursor-pointer"
                    style={{ color: '#FFFFFF' }}
                >
                    <ShoppingCart size={24} />
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <Drawer
                title={<span style={{ color: '#D45D48', fontWeight: 'bold' }}>MENU</span>}
                placement="right"
                onClose={onClose}
                open={open}
                styles={{ body: { padding: 0, backgroundColor: '#1A1A1A' } }}
            >
                <div className="flex flex-col p-4 space-y-4 bg-[#1A1A1A] h-full" style={{ backgroundColor: '#1A1A1A', height: '100%', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {menuItems.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => handleMenuClick(item)}
                            className="bg-transparent border-none text-white font-bebas text-2xl tracking-widest text-left hover:text-armory-red transition-colors cursor-pointer"
                            style={{ color: '#FFFFFF', textAlign: 'left', fontSize: '1.5rem', fontFamily: 'Bebas Neue, sans-serif' }}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </Drawer>
        </Header>
    );
};

export default Navbar;
