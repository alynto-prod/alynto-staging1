import React from 'react';
import { Typography, Button } from 'antd';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero_bg_patriotic.png'; // Using the existing bg as base

const { Title, Paragraph } = Typography;

const Hero = () => {
    return (
        <div className="relative w-screen h-screen overflow-hidden bg-[#0a0a0a] left-1/2 -translate-x-1/2">
            {/* 1. Background Layer */}
            <div className="absolute inset-0 z-0">
                {/* Base Image: Removed mix-blend for safety, stuck to simple opacity overlay */}
                <img
                    src={heroBg}
                    alt="Background"
                    className="w-full h-full object-cover opacity-50"
                />
                {/* Vibrant Gradient Glow (Red/Orange branding) - Stronger opacity */}
                <div className="absolute inset-0 bg-gradient-to-r from-armory-red/40 via-black/60 to-black/90" />
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-armory-red/40 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            {/* 2. Main Content Container */}
            <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col justify-between pt-32 pb-12">

                {/* Top Section: Text & Intro */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start h-full">
                    <div className="w-full md:w-2/3 flex flex-col justify-center h-full space-y-2">
                        <span className="text-xl md:text-2xl font-source font-light tracking-wider text-white/90 ml-1">
                            Est. 2024 // Rusty Oak Armory
                        </span>

                        <h1 className="text-[12vw] md:text-[8rem] leading-[0.9] font-bebas font-bold !text-white uppercase tracking-tighter">
                            Local <br />
                            <span className="text-white">Firearm</span> <br />
                            <span className="text-armory-red">Specialist</span>
                        </h1>
                    </div>

                    {/* Right Side / CTA Floater (optional based on ref, keeping clean for now) */}
                    <div className="hidden md:flex flex-col justify-center h-full w-1/3 items-end">
                        <div className="max-w-xs text-right space-y-6">
                            <p className="text-lg text-white/60 font-source leading-relaxed">
                                Great gear should feel invisible. From compliance to customization, we build platforms that connect and convert.
                            </p>
                            <Button
                                type="primary"
                                size="large"
                                className="h-16 px-10 rounded-full !bg-white !text-black text-lg font-bold border-none hover:!bg-gray-200 flex items-center gap-3 float-right shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all transform hover:scale-105"
                            >
                                Get in Touch <ArrowRight size={20} />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* 3. Bottom Feature Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-8 mt-auto">
                    {[
                        { id: '01', title: 'FFL Transfers', desc: 'Seamless Processing' },
                        { id: '02', title: 'Custom Builds', desc: 'Precision Engineering' },
                        { id: '03', title: 'Gunsmithing', desc: 'Expert Maintenance' },
                        { id: '04', title: 'NFA Items', desc: 'Silencers & SBRs' }
                    ].map((item) => (
                        <div key={item.id} className="group cursor-pointer">
                            <span className="text-armory-red font-bold text-sm tracking-wider mb-2 block group-hover:text-white transition-colors">#{item.id}</span>
                            <h3 className="text-xl md:text-2xl font-bebas tracking-wide text-white group-hover:translate-x-2 transition-transform duration-300">
                                {item.title}
                            </h3>
                            <p className="text-sm text-white/40 group-hover:text-white/60 transition-colors hidden md:block">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
