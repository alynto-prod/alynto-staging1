import React from 'react';
import { Button, Typography, Row, Col } from 'antd';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const services = [
    {
        id: 'custom',
        title: 'Custom Builds',
        description: 'Precision long-range rifles and tactical carbines.',
        image: '/src/assets/service_custom.jpg',
        link: '/services/custom-builds',
        colSpan: 'md:col-span-2',
        accent: '#E5E7EB'
    },
    {
        id: 'ffl',
        title: 'FFL Transfers',
        description: 'Secure and compliant transfers.',
        image: '/src/assets/service_ffl.jpg',
        link: '/services/ffl-transfers',
        colSpan: 'md:col-span-1',
        accent: '#B54A3C'
    },
    {
        id: 'gunsmithing',
        title: 'Gunsmithing',
        description: 'Repair, maintenance, and modification.',
        image: '/src/assets/service_gunsmith.jpg',
        link: '/services/gunsmithing',
        colSpan: 'md:col-span-1',
        accent: '#64748B'
    },
    {
        id: 'nfa',
        title: 'NFA Items',
        description: 'Expert guidance for suppressors and SBRs.',
        image: '/src/assets/service_nfa.jpg',
        link: '/services/nfa-items',
        colSpan: 'md:col-span-2',
        accent: '#D97706'
    }
];

const ServicesOverview = () => {
    const navigate = useNavigate();

    return (
        <section className="w-full bg-[#010101] relative z-10 flex justify-center" style={{ paddingTop: '20vh', paddingBottom: '20vh' }}>
            {/* Inline CSS to guarantee Bento Layout regardless of Tailwind state */}
            <style>{`
                .bento-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.5rem;
                    grid-auto-rows: 350px;
                }
                @media (min-width: 768px) {
                    .bento-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                    .span-col-2 {
                        grid-column: span 2;
                    }
                    .span-col-1 {
                        grid-column: span 1;
                    }
                }
            `}</style>

            <div className="w-full max-w-[90rem] px-4 md:px-8" style={{ paddingLeft: '8vw', paddingRight: '8vw' }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <Title level={2} style={{ color: '#fff', fontFamily: 'Bebas Neue', fontSize: 'clamp(3rem, 5vw, 5rem)', letterSpacing: '2px', marginBottom: '1rem' }}>
                        Our Services
                    </Title>
                    <div className="w-24 h-1 bg-[#B54A3C] mx-auto opacity-80" />
                </motion.div>

                <div className="bento-grid">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => navigate(service.link)}
                            className={`group relative rounded-3xl overflow-hidden cursor-pointer ${service.colSpan ? (service.colSpan.includes('span-2') ? 'span-col-2' : 'span-col-1') : 'span-col-1'} transition-all duration-500 hover:scale-[1.01] hover:z-20`}
                            style={{
                                border: `1px solid ${service.accent}`,
                                boxShadow: `0 0 40px ${service.accent}10`,
                                background: `linear-gradient(145deg, rgba(20,20,20,0.8) 0%, rgba(5,5,5,0.9) 100%)`
                            }}
                        >
                            {/* Accent Glow Spot */}
                            <div
                                className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                                style={{ backgroundColor: service.accent }}
                            />

                            {/* Background Image Layer (Placeholder) */}
                            <div className="absolute inset-0 z-0">
                                <div className="absolute inset-0 bg-[#121212]" />
                                <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-700 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />

                                {/* Graphic */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 select-none">
                                    <span
                                        className="font-bebas text-[10rem] leading-none"
                                        style={{ color: service.accent }}
                                    >
                                        {service.id.substring(0, 2).toUpperCase()}
                                    </span>
                                </div>
                            </div>

                            {/* Liquid Glass Overlay */}
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 backdrop-blur-[1px]" />

                            {/* Glass Shine */}
                            <div className="absolute inset-0 z-20 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Content */}
                            <div className="absolute inset-0 z-30 p-8 flex flex-col justify-end">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <h3
                                        className="font-bebas text-4xl mb-3 tracking-wider"
                                        style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8)', color: '#FFFFFF' }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p
                                        className="font-source font-light leading-relaxed max-w-lg"
                                        style={{ color: '#D1D5DB', opacity: 0, transition: 'opacity 0.5s', transitionDelay: '0.1s' }}
                                    >
                                        <span className="not-italic group-hover:opacity-100 block">
                                            {service.description}
                                        </span>
                                    </p>
                                </div>

                                {/* Arrow Button */}
                                <div
                                    className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center border backdrop-blur-md transition-all duration-300 group-hover:rotate-45"
                                    style={{
                                        borderColor: `${service.accent}40`,
                                        backgroundColor: `${service.accent}10`,
                                        color: service.accent
                                    }}
                                >
                                    <ArrowRight size={22} color={service.accent} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
