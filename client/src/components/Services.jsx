import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { Scale, ShieldCheck, Fingerprint, PenTool, Truck, Hammer } from 'lucide-react';

const { Title, Text } = Typography;

const services = [
    {
        title: 'FFL Transfers',
        icon: <Scale size={48} className="text-armory-red mb-4" />,
        description: 'Seamless transfer services for your firearm purchases.'
    },
    {
        title: 'NFA Transfers',
        icon: <ShieldCheck size={48} className="text-armory-red mb-4" />,
        description: 'Expert handling of NFA regulated items and paperwork.'
    },
    {
        title: 'Fingerprinting',
        icon: <Fingerprint size={48} className="text-armory-red mb-4" />,
        description: 'On-site digital fingerprinting for background checks.'
    },
    {
        title: 'Engraving',
        icon: <PenTool size={48} className="text-armory-red mb-4" />,
        description: 'Custom laser engraving for personalization or compliance.'
    },
    {
        title: 'Firearm Shipping',
        icon: <Truck size={48} className="text-armory-red mb-4" />,
        description: 'Secure and compliant shipping services nationwide.'
    },
    {
        title: 'Slide Work & Cerakote',
        icon: <Hammer size={48} className="text-armory-red mb-4" />,
        description: 'Professional slide milling and durable Cerakote refinishing.'
    }
];

const Services = () => {
    return (
        <section className="py-20 bg-armory-black relative overflow-hidden">
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-armory-red font-bold uppercase tracking-widest text-sm">What We Do</span>
                    <Title level={2} style={{ color: '#fff', textTransform: 'uppercase', margin: '8px 0 0 0', fontFamily: 'Bebas Neue' }}>
                        Our Services
                    </Title>
                    <div className="w-24 h-1 bg-armory-red mx-auto mt-6" />
                </div>

                <Row gutter={[32, 32]}>
                    {services.map((service, index) => (
                        <Col xs={24} sm={12} lg={8} key={index}>
                            <Card
                                className="h-full border-2 border-gunmetal bg-armory-black hover:border-armory-red transition-all duration-300 group"
                                bodyStyle={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    padding: '32px'
                                }}
                            >
                                <div className="transform group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <Title level={4} style={{
                                    color: '#fff',
                                    textTransform: 'uppercase',
                                    fontFamily: 'Bebas Neue',
                                    marginBottom: '12px'
                                }}>
                                    {service.title}
                                </Title>
                                <Text className="text-gray-400 font-source text-lg">
                                    {service.description}
                                </Text>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default Services;
