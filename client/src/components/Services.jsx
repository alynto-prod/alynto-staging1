import React from 'react';
import { Typography } from 'antd';
import { Scale, ShieldCheck, Fingerprint, PenTool, Truck, Hammer } from 'lucide-react';

const { Title } = Typography;

const services = [
    {
        title: 'FFL Transfers',
        icon: <Scale size={48} className="text-armory-red mb-4 group-hover:text-white transition-colors duration-300" />,
        description: 'Seamless transfer services for your firearm purchases. We handle the paperwork so you can focus on the range.',
        gridClass: 'md:col-span-2 md:row-span-1 bg-gradient-to-br from-armory-black to-[#1a1a1a]'
    },
    {
        title: 'NFA Transfers',
        icon: <ShieldCheck size={48} className="text-armory-red mb-4 group-hover:text-white transition-colors duration-300" />,
        description: 'Expert handling of NFA regulated items. Silencers, SBRs, and more handled with precision compliance.',
        gridClass: 'md:col-span-1 md:row-span-2 bg-[#0a0a0a]'
    },
    {
        title: 'Fingerprinting',
        icon: <Fingerprint size={48} className="text-armory-red mb-4 group-hover:text-white transition-colors duration-300" />,
        description: 'On-site digital fingerprinting.',
        gridClass: 'md:col-span-1 md:row-span-1 bg-[#111]'
    },
    {
        title: 'Engraving',
        icon: <PenTool size={48} className="text-armory-red mb-4 group-hover:text-white transition-colors duration-300" />,
        description: 'Custom laser engraving.',
        gridClass: 'md:col-span-1 md:row-span-1 bg-[#111]'
    },
    {
        title: 'Firearm Shipping',
        icon: <Truck size={48} className="text-armory-red mb-4 group-hover:text-white transition-colors duration-300" />,
        description: 'Secure nationwide shipping.',
        gridClass: 'md:col-span-1 md:row-span-1 bg-[#111]'
    },
    {
        title: 'Slide Work & Cerakote',
        icon: <Hammer size={48} className="text-armory-red mb-4 group-hover:text-white transition-colors duration-300" />,
        description: 'Professional slide milling and durable Cerakote refinishing to customize your platform.',
        gridClass: 'md:col-span-2 md:row-span-1 bg-gradient-to-tl from-armory-black to-[#1a1a1a]'
    }
];

const Services = () => {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-armory-red font-bold uppercase tracking-[0.2em] text-sm animate-pulse">Execute with Precision</span>
                    <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mt-4 mb-2 font-bebas">
                        Mission Services
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-armory-red to-transparent mx-auto mt-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative p-8 border border-white/5 hover:border-armory-red/50 transition-all duration-500 rounded-sm overflow-hidden flex flex-col justify-between ${service.gridClass}`}
                        >
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-armory-red/0 group-hover:bg-armory-red/5 transition-colors duration-500" />

                            <div className="relative z-10">
                                <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white uppercase tracking-tight font-bebas mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-white/60 font-source leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                                    {service.description}
                                </p>
                            </div>

                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-2 h-2 bg-armory-red" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
