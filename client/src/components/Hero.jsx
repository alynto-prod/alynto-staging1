import React from 'react';
import { Typography, Button } from 'antd';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero_bg_patriotic.png';

const { Title, Paragraph } = Typography;

const Hero = () => {
    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.0, ease: "easeOut" } }
    };

    return (
        <div className="relative w-full min-h-screen md:h-screen overflow-x-hidden md:overflow-hidden bg-[#0A0A0A]">
            {/* 1. Background Layer - Fixed to Viewport to ensure full coverage */}
            <div className="fixed inset-0 w-full h-full z-0">
                {/* Base Dark Background */}
                <div className="absolute inset-0 bg-[#0A0A0A]" />

                {/* Image Overlay - Subtle Texture */}
                <img
                    src={heroBg}
                    alt="Background"
                    className="w-full h-full object-cover opacity-20 grayscale"
                />

                {/* Primary Orange/Red Glow - Top Left/Center */}
                <div className="absolute top-[-20%] left-[20%] w-[60vw] h-[60vw] bg-[#B54A3C]/40 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

                {/* Secondary Warm Glow - Bottom Right */}
                <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#962E20]/30 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
            </div>

            {/* Responsive Styles for Hero Grid */}
            <style>{`
                .hero-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr; /* Mobile: 2 columns */
                    gap: 0.75rem;
                    width: 100%;
                    padding-left: 1.5rem;
                    padding-right: 1.5rem;
                    padding-bottom: 3rem; /* Spacing from bottom on mobile */
                    margin-top: 2rem; /* Reduced spacing from heading */
                    position: relative; /* Mobile: Flow naturally */
                }
                .hero-item {
                    border-left: 4px solid #B54A3C !important; /* Explicit solid border */
                    padding-left: 1rem; /* Compact mobile padding */
                    padding-right: 1rem; /* Added right padding */
                    padding-top: 0.75rem;
                    padding-bottom: 0.75rem;
                    background-color: rgba(255, 255, 255, 0.15) !important; /* Increased visibility */
                    transition: all 0.3s ease;
                    align-items: center; /* Center content on mobile */
                    text-align: center;
                }
                
                /* Responsive Logo Styles */
                .logo-circle {
                    width: 4rem;
                    height: 4rem;
                    background-color: rgba(255,255,255,0.1);
                    border-radius: 9999px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .logo-acronym {
                    font-family: 'Bebas Neue', sans-serif;
                    color: #FFFFFF;
                    font-size: 1.5rem;
                }
                .logo-title {
                    font-weight: bold;
                    line-height: 1.1;
                    color: #FFFFFF;
                    font-size: 1.125rem;
                }
                .logo-subtitle {
                    font-weight: 300;
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 0.875rem;
                }

                @media (min-width: 768px) {
                    .hero-grid {
                        position: absolute; /* Desktop: Pin to bottom */
                        bottom: 2rem;
                        left: 0;
                        margin-top: 0;
                        padding-bottom: 0;
                        
                        grid-template-columns: repeat(5, 1fr); /* Desktop: 5 columns */
                        gap: 2rem;
                        padding-left: 8vw; /* Restored 8vw indent */
                        padding-right: 8vw;
                    }
                    .hero-item {
                        padding-left: 2rem; /* Restored 2rem spacing */
                        padding-right: 2rem; /* Balanced right padding */
                        padding-top: 1rem;
                        padding-bottom: 1rem;
                        align-items: flex-start; /* Restore left align on desktop */
                        text-align: left;
                    }
                    
                    /* Desktop Logo Scaling */
                    .logo-circle {
                        width: 6rem;
                        height: 6rem;
                    }
                    .logo-acronym {
                        font-size: 3rem;
                    }
                    .logo-title {
                        font-size: 1.875rem;
                    }
                    .logo-subtitle {
                        font-size: 1.25rem;
                    }
                    
                    .hero-container-padding {
                        padding-top: 0 !important;
                        padding-bottom: 0 !important;
                        justify-content: center !important;
                        padding-left: 8vw !important; /* Force 8vw indent matching grid */
                        padding-right: 8vw !important;
                    }
                    .hero-content-grid {
                        display: grid !important;
                        grid-template-columns: 2fr 1fr !important;
                        gap: 3rem !important;
                        width: 100%;
                        height: 100%;
                    }
                    .hero-col-right {
                        display: flex !important;
                        visibility: visible !important;
                        opacity: 1 !important;
                    }
                }
                .hero-col-right {
                    display: none;
                }

                .hero-container-padding {
                    padding-top: 35vh; /* Increased to push below header */
                    padding-bottom: 5rem;
                    justify-content: flex-start;
                }
                
                /* Mobile Social Proof Styles - Continued */
                .hero-col-right {
                    display: flex; /* Visible on mobile now */
                    flex-direction: column;
                    width: 100%;
                    margin-top: 2rem;
                    border-top: 1px solid rgba(255,255,255,0.1);
                    padding-top: 2rem;
                    align-items: flex-start;
                }
                .partners-container {
                    flex-direction: column;
                    align-items: flex-start;
                    width: 100%;
                    gap: 1.5rem;
                }
                .partners-label {
                    writing-mode: horizontal-tb;
                    transform: none;
                    margin-bottom: 1rem;
                    width: 100%;
                    text-align: left;
                }
                .logo-stack {
                    display: flex;
                    flex-direction: row; /* Horizontal on mobile */
                    overflow-x: auto; /* Horizontal scroll if needed */
                    gap: 1.5rem;
                    width: 100%;
                    overflow: hidden; /* Hide scrollbar */
                    padding-left: 0;
                    padding-bottom: 1rem;
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); /* Fade edges */
                }
                .marquee-content {
                    display: flex;
                    flex-direction: row;
                    gap: 3rem; /* Spacing between items */
                    animation: scroll 25s linear infinite; /* Slightly slower for better readability */
                    width: max-content;
                    padding-left: 1rem; /* Initial offset */
                }
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 1.5rem)); }
                }
                .logo-item {
                    flex-direction: row;
                    gap: 1rem;
                    min-width: max-content;
                    align-items: center;
                }
                
                @media (min-width: 768px) {
                    .hero-container-padding {
                        padding-top: 0 !important;
                        padding-bottom: 0 !important;
                    }
                    .hero-col-right {
                        margin-top: -5vh; /* Restore desktop overlap */
                        border-top: none;
                        border-left: 1px solid rgba(255,255,255,0.1);
                        padding-top: 0;
                        padding-left: 1.5rem;
                        height: 100%;
                        justify-content: center;
                        align-items: flex-start;
                    }
                    .partners-container {
                        flex-direction: row;
                        align-items: center;
                        height: 100%;
                    }
                    .partners-label {
                        writing-mode: vertical-rl;
                        transform: rotate(180deg);
                        margin-bottom: 0;
                        width: auto;
                        height: auto;
                    }
                    .logo-stack {
                        flex-direction: column; /* Vertical on desktop */
                        overflow: visible;
                        padding-left: 4rem;
                        padding-bottom: 0;
                        gap: 4rem;
                        width: auto;
                    }
                    .marquee-content {
                        flex-direction: column;
                        gap: 4rem;
                        animation: none; /* Disable scroll on desktop */
                        width: auto;
                        padding-left: 0;
                    }
                    /* Hide the duplicated set on desktop */
                    .marquee-content > .logo-item:nth-child(n+4) {
                        display: none;
                    }
                    .logo-item {
                        flex-direction: row;
                        gap: 2rem;
                    }
                    .partners-label {
                        padding-left: 0;
                    }
                }
            `}</style>

            {/* 2. Main Content Container */}
            <div className="relative z-10 w-full min-h-screen md:h-full max-w-[1920px] mx-auto px-6 md:px-0 flex flex-col hero-container-padding">

                <div className="hero-content-grid w-full h-full">
                    {/* Left Column: Typography */}
                    <div className="hero-col-left flex flex-col justify-center h-full space-y-4 select-none">
                        {/* Subheading */}
                        <motion.span
                            className="text-armory-red font-source font-bold tracking-[0.3em] text-xs md:text-sm lg:text-base uppercase"
                            style={{ color: '#B54A3C' }}
                            initial="hidden"
                            animate="visible"
                            variants={fadeInLeft}
                            transition={{ delay: 0.2 }}
                        >
                            Tennessee's Highest Rated
                        </motion.span>

                        <h1
                            className="font-bebas leading-[0.95] tracking-tight text-white mb-0"
                            style={{ color: '#FFFFFF' }}
                        >
                            <motion.span
                                className="block text-[11vw] md:text-[3rem] lg:text-[4.5rem] xl:text-[5.5rem] text-white"
                                style={{ color: '#FFFFFF' }}
                                initial="hidden"
                                animate="visible"
                                variants={fadeInUp}
                                transition={{ delay: 0.4 }}
                            >
                                PROFESSIONAL FIREARMS
                            </motion.span>
                            <motion.span
                                className="block text-[9vw] md:text-[2.5rem] lg:text-[3.5rem] xl:text-[4.5rem] text-white/90"
                                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                                initial="hidden"
                                animate="visible"
                                variants={fadeInUp}
                                transition={{ delay: 0.6 }}
                            >
                                ENGINEERING & CUSTOM MODIFICATION
                            </motion.span>
                        </h1>
                    </div>

                    {/* Right Column: Social Proof (Option A) */}
                    <div className="hero-col-right">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="partners-container flex"
                        >
                            {/* Label */}
                            <span
                                className="partners-label tracking-[0.3em] text-sm font-source uppercase flex-none"
                                style={{ color: '#FFFFFF', opacity: 0.6 }}
                            >
                                Trusted Partners
                            </span>

                            {/* Auto-Scrolling Marquee Wrapper */}
                            <div className="logo-stack">
                                {/* Inner sliding container with DUPLICATED items for infinite loop */}
                                <div className="marquee-content">
                                    {[...Array(2)].map((_, setIndex) => (
                                        <React.Fragment key={setIndex}>
                                            <div className="group logo-item flex items-center hover:scale-105 transition-transform duration-300 cursor-default">
                                                <div className="logo-circle">
                                                    <span className="logo-acronym">GOA</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="logo-title">GUN OWNERS</span>
                                                    <span className="logo-subtitle">OF AMERICA</span>
                                                </div>
                                            </div>

                                            <div className="group logo-item flex items-center hover:scale-105 transition-transform duration-300 cursor-default">
                                                <div className="logo-circle">
                                                    <span className="logo-acronym">TFA</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="logo-title">TENNESSEE</span>
                                                    <span className="logo-subtitle">FIREARMS ASSOC.</span>
                                                </div>
                                            </div>

                                            <div className="group logo-item flex items-center hover:scale-105 transition-transform duration-300 cursor-default">
                                                <div className="logo-circle">
                                                    <span className="logo-acronym">MCSO</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="logo-title">MARION COUNTY</span>
                                                    <span className="logo-subtitle">SHERIFF'S DEPT.</span>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Feature Grid */}
                <div className="hero-grid">
                    {[
                        { id: '01', title: 'Product Design', desc: 'FFL Transfers' },
                        { id: '02', title: 'Packaging Design', desc: 'Custom Builds' },
                        { id: '03', title: 'Photo & Film', desc: 'Gunsmithing' },
                        { id: '04', title: 'Creative Direction', desc: 'NFA Items' },
                        { id: '05', title: 'Logistics', desc: 'Firearm Shipping' }
                    ].map((item, i) => (
                        <motion.div
                            key={item.id}
                            className="flex flex-col space-y-2 group cursor-pointer hero-item"
                            initial="hidden"
                            animate="visible"
                            whileHover={{
                                x: 15, // Explicit movement
                                backgroundColor: 'rgba(255, 255, 255, 0.25)', // Much brighter hover
                                transition: { duration: 0.2 }
                            }}
                            variants={fadeIn}
                            transition={{ delay: 1.0 + (i * 0.1) }}
                        >

                            <h3
                                className="text-white font-source font-semibold text-xl md:text-2xl tracking-wide whitespace-nowrap"
                                style={{ color: '#FFFFFF', fontSize: '1.5rem' }}
                            >
                                {item.desc}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
