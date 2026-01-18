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
                    className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale"
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
                    grid-template-columns: 1fr; /* Mobile: 1 column */
                    gap: 1.5rem;
                    width: 100%;
                    padding-left: 1.5rem;
                    padding-right: 1.5rem;
                    padding-bottom: 3rem; /* Spacing from bottom on mobile */
                    margin-top: 4rem; /* Spacing from heading */
                    position: relative; /* Mobile: Flow naturally */
                }
                .hero-item {
                    border-left-width: 4px;
                    padding-left: 1.5rem; /* Mobile padding */
                    padding-top: 1rem;
                    padding-bottom: 1rem;
                    border-color: #FFFFFF;
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
                    }
                    .hero-container-padding {
                        padding-top: 0 !important;
                        padding-bottom: 0 !important;
                        justify-content: center !important;
                    }
                }
                .hero-container-padding {
                    padding-top: 25vh; /* Aggressive mobile spacing */
                    padding-bottom: 5rem;
                    justify-content: flex-start;
                }
            `}</style>

            {/* 2. Main Content Container */}
            <div className="relative z-10 w-full min-h-screen md:h-full max-w-[1920px] mx-auto px-6 md:px-32 flex flex-col hero-container-padding">

                {/* Typography Block */}
                <div className="flex flex-col space-y-2 select-none mt-0 md:mt-[-5vh]">
                    {/* Eyebrow removed as requested */}

                    {/* Massive Heading */}
                    <h1
                        className="font-bebas leading-[0.9] tracking-tight text-white mb-0"
                        style={{ color: '#FFFFFF' }}
                    >
                        <motion.span
                            className="block text-[12vw] md:text-[4rem] lg:text-[5.5rem] xl:text-[6.5rem] text-white"
                            style={{ color: '#FFFFFF' }}
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{ delay: 0.4 }}
                        >
                            FIREARM
                        </motion.span>
                        <motion.span
                            className="block text-[12vw] md:text-[4rem] lg:text-[5.5rem] xl:text-[6.5rem] text-white/90"
                            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{ delay: 0.6 }}
                        >
                            SPECIALIST
                        </motion.span>
                    </h1>
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
                            className="flex flex-col space-y-2 group cursor-pointer rounded-r-lg hero-item"
                            initial="hidden"
                            animate="visible"
                            whileHover={{
                                x: 15, // Explicit movement
                                backgroundColor: 'rgba(255, 255, 255, 0.05)', // Subtle backdrop
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
