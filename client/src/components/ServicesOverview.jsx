import React from 'react';
import { Button, Typography, Row, Col } from 'antd';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const services = [
    {
        id: 'ffl',
        title: 'FFL Transfers',
        description: 'Secure and compliant transfers for your online firearm purchases. We handle the paperwork so you can focus on your collection.',
        image: '/src/assets/service_ffl.jpg', // Placeholder
        link: '/services/ffl-transfers'
    },
    {
        id: 'custom',
        title: 'Custom Builds',
        description: 'From precision long-range rifles to tactical carbines, our expert builders bring your vision to life with aerospace-grade components.',
        image: '/src/assets/service_custom.jpg', // Placeholder
        link: '/services/custom-builds'
    },
    {
        id: 'gunsmithing',
        title: 'Gunsmithing',
        description: 'Professional repair, maintenance, and modification. Trust our certified gunsmiths to keep your equipment running at peak performance.',
        image: '/src/assets/service_gunsmith.jpg', // Placeholder
        link: '/services/gunsmithing'
    },
    {
        id: 'nfa',
        title: 'NFA Items',
        description: 'Expert guidance through the NFA process. We simplify ownership of suppressors, SBRs, and other regulated items.',
        image: '/src/assets/service_nfa.jpg', // Placeholder
        link: '/services/nfa-items'
    }
];

const ServicesOverview = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-[#010101] py-16 relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <Title level={2} style={{ color: '#fff', fontFamily: 'Bebas Neue', fontSize: 'clamp(3rem, 5vw, 5rem)', letterSpacing: '2px', marginBottom: '1rem' }}>
                        Our Services
                    </Title>
                    <div className="w-24 h-1 bg-[#B54A3C] mx-auto opacity-80" />
                </div>

                <div className="flex flex-col gap-6">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="bg-[#141414] border border-white/5 rounded-xl overflow-hidden flex flex-col md:flex-row group hover:border-white/10 transition-colors duration-300"
                        >
                            {/* Image Section - Left (Desktop) */}
                            <div className="w-full md:w-1/3 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[#222] transition-transform duration-700 group-hover:scale-105">
                                    {/* Placeholder Content */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-[#B54A3C]/20 font-bebas text-8xl select-none">
                                            {service.id.toUpperCase().substring(0, 3)}
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                </div>
                            </div>

                            {/* Content Section - Right (Desktop) */}
                            <div className="p-8 md:p-10 w-full md:w-2/3 flex flex-col justify-center">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[#B54A3C] font-mono text-lg">0{index + 1}</span>
                                        <Title level={3} style={{ color: '#fff', fontFamily: 'Bebas Neue', fontSize: '2.5rem', margin: 0, letterSpacing: '1px' }}>
                                            {service.title}
                                        </Title>
                                    </div>
                                    <Button
                                        type="primary"
                                        onClick={() => navigate(service.link)}
                                        className="h-10 px-6 bg-transparent border border-white/20 text-white hover:!bg-[#B54A3C] hover:!border-[#B54A3C] uppercase tracking-widest flex items-center gap-2 w-fit transition-all duration-300"
                                    >
                                        Details
                                        <ArrowRight size={16} />
                                    </Button>
                                </div>

                                <Paragraph className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-0">
                                    {service.description}
                                </Paragraph>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
