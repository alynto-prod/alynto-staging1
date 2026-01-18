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
        <div className="relative w-full h-screen overflow-hidden bg-[#0A0A0A]">
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

            {/* 2. Main Content Container */}
            <div className="relative z-10 w-full h-full max-w-[1920px] mx-auto px-6 md:px-32 flex flex-col justify-center">

                {/* Typography Block */}
                <div className="flex flex-col space-y-2 select-none mt-0 md:mt-[-5vh]">
                    {/* Eyebrow removed as requested */}

                    {/* Massive Heading */}
                    <h1
                        className="font-bebas leading-[0.9] tracking-tight text-white mb-0"
                        style={{ color: '#FFFFFF' }}
                    >
                        <motion.span
                            className="block text-[10vw] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] text-white"
                            style={{ color: '#FFFFFF' }}
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{ delay: 0.4 }}
                        >
                            FIREARM
                        </motion.span>
                        <motion.span
                            className="block text-[10vw] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] text-white/90"
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
                <div
                    className="absolute bottom-8 left-0 w-full px-6 md:px-48 grid grid-cols-5 gap-8"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        gap: '2rem',
                        bottom: '2rem',
                        paddingLeft: '8vw',
                        paddingRight: '8vw'
                    }}
                >
                    {[
                        { id: '01', title: 'Product Design', desc: 'FFL Transfers' },
                        { id: '02', title: 'Packaging Design', desc: 'Custom Builds' },
                        { id: '03', title: 'Photo & Film', desc: 'Gunsmithing' },
                        { id: '04', title: 'Creative Direction', desc: 'NFA Items' },
                        { id: '05', title: 'Logistics', desc: 'Firearm Shipping' }
                    ].map((item, i) => (
                        <motion.div
                            key={item.id}
                            className="flex flex-col space-y-2 group cursor-pointer border-l-4 pl-12 py-4 rounded-r-lg" // Increased padding
                            style={{ borderColor: '#FFFFFF', paddingLeft: '2rem' }}
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
