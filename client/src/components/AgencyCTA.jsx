import React from 'react';
import { Button, Typography, Row, Col } from 'antd';
import { Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const AgencyCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="py-24 bg-armory-dark border-y border-gunmetal relative overflow-hidden">
            {/* Background Element */}
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-armory-red/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Row gutter={[48, 48]} align="middle">
                    <Col xs={24} md={14}>
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="text-armory-red" size={32} />
                            <span className="text-armory-red font-bold uppercase tracking-widest text-sm">Law Enforcement & Government</span>
                        </div>

                        <Title level={2} style={{ color: '#fff', fontFamily: 'Bebas Neue', textTransform: 'uppercase', fontSize: '3rem', marginBottom: '24px' }}>
                            Serve. Protect. Save.
                        </Title>

                        <Paragraph className="text-gray-400 text-lg mb-8 max-w-xl">
                            Rusty Oak Armory is proud to support those who serve. Verified law enforcement agencies and officers are eligible for exclusive pricing, priority fulfillment, and tax-exempt purchasing options through our dedicated Agency Portal.
                        </Paragraph>

                        <Button
                            type="primary"
                            size="large"
                            onClick={() => navigate('/agency-login')}
                            className="h-14 px-8 text-xl font-bold uppercase !bg-armory-red !text-white border-none flex items-center gap-2 w-fit"
                        >
                            Enter Agency Portal
                            <ArrowRight size={20} />
                        </Button>
                    </Col>

                    <Col xs={24} md={10} className="flex justify-center md:justify-end">
                        <div className="relative">
                            <div className="absolute inset-0 bg-armory-red/20 blur-3xl rounded-full" />
                            <img
                                src="/src/assets/logo.png"
                                alt="Agency Badge"
                                className="relative z-10 w-64 h-auto opacity-90 drop-shadow-2xl"
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default AgencyCTA;
