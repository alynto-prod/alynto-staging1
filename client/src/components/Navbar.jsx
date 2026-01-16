import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { ShoppingCart, Menu as MenuIcon } from 'lucide-react';

const { Header } = Layout;

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const menuItems = [
        { key: 'home', label: 'HOME' },
        { key: 'shop', label: 'SHOP ALL' },
        { key: 'apparel', label: 'APPAREL' },
        { key: 'gear', label: 'GEAR' },
    ];

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <Header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                borderBottom: '1px solid #1f1f1f',
                padding: '0 24px',
                backdropFilter: 'blur(8px)',
            }}
        >
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center mr-8">
                <img src="/src/assets/logo.png" alt="Rusty Oak Armory" className="h-12 w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-1">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['home']}
                    items={menuItems}
                    style={{ flex: 1, minWidth: 0, backgroundColor: 'transparent', borderBottom: 'none', fontSize: '16px', fontWeight: 500 }}
                />
            </div>

            {/* Icons & Actions */}
            <div className="flex items-center gap-4">
                <Button
                    type="text"
                    icon={<ShoppingCart size={24} />}
                    style={{ color: '#fff' }}
                    className="hover:text-armory-orange"
                />

                {/* Mobile Menu Button */}
                <Button
                    className="md:hidden"
                    type="text"
                    icon={<MenuIcon size={24} />}
                    onClick={showDrawer}
                    style={{ color: '#fff' }}
                />
            </div>

            {/* Mobile Menu Drawer */}
            <Drawer
                title={<span className="text-armory-orange font-bold">MENU</span>}
                placement="right"
                onClose={onClose}
                open={open}
                styles={{ body: { padding: 0 } }}
            >
                <Menu
                    theme="dark"
                    mode="vertical"
                    items={menuItems}
                    style={{ borderRight: 0 }}
                />
            </Drawer>
        </Header>
    );
};

export default Navbar;
