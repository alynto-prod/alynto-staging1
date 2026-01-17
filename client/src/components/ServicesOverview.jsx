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
        <section className="bg-[#010101] py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                    <Title level={2} style={{ color: '#fff', fontFamily: 'Bebas Neue', fontSize: 'clamp(3rem, 5vw, 5rem)', letterSpacing: '2px', marginBottom: '1rem' }}>
                        Our Services
                    </Title>
                    <div className="w-24 h-1 bg-[#B54A3C] mx-auto opacity-80" />
                </div>

                <div className="flex flex-col gap-24">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20 group`}
                        >
                            {/* Text Content */}
                            <div className="w-full md:w-1/2 space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="text-[#B54A3C] font-mono text-xl">0{index + 1}</span>
                                    <div className="h-[1px] w-12 bg-[#B54A3C] opacity-50" />
                                </div>

                                <Title level={3} style={{ color: '#fff', fontFamily: 'Bebas Neue', fontSize: '3rem', margin: 0 }}>
                                    {service.title}
                                </Title>

                                <Paragraph className="text-gray-400 text-lg leading-relaxed max-w-md">
                                    {service.description}
                                </Paragraph>

                                <Button
                                    type="primary"
                                    size="large"
                                    onClick={() => navigate(service.link)}
                                    className="h-12 px-8 bg-transparent border border-white/20 text-white hover:!bg-[#B54A3C] hover:!border-[#B54A3C] uppercase tracking-widest flex items-center gap-2 transition-all duration-300 group-hover:pl-10"
                                >
                                    View Details
                                    <ArrowRight size={18} />
                                </Button>
                            </div>

                            {/* Image Placeholder / Graphic */}
                            <div className="w-full md:w-1/2 relative">
                                <div className="aspect-[4/3] bg-[#1A1A1A] rounded-sm overflow-hidden relative border border-white/5 group-hover:border-[#B54A3C]/30 transition-colors duration-500">
                                    {/* Placeholder Content since we don't have real images yet */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-[#B54A3C]/20 font-bebas text-9xl select-none">
                                            {service.id.toUpperCase()}
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                </div>
                                {/* Decorative Element */}
                                <div className={`absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#B54A3C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${index % 2 !== 0 ? 'right-auto -left-4 border-r-0 border-l-2' : ''}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
