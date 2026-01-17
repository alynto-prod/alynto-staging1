import React from 'react';
import { Button, Typography, Row, Col } from 'antd';
import { Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const AgencyCTA = () => {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '6rem 10%', width: '100%', boxSizing: 'border-box', background: 'linear-gradient(to bottom, rgba(26, 26, 26, 0.8), #010101)', position: 'relative', zIndex: 10 }}>
            <div
                className="rounded-2xl relative overflow-hidden"
                style={{ maxWidth: '900px', margin: '0 auto', boxShadow: '0 0 60px rgba(255, 255, 255, 0.15)', backgroundColor: 'rgba(20, 20, 20, 0.6)', backdropFilter: 'blur(20px)' }}
            >
                {/* Background Element */}
                <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-armory-red/10 to-transparent pointer-events-none" />

                <div className="relative z-10" style={{ padding: '5rem' }}>
                    <Row gutter={[48, 48]} align="middle">
                        <Col xs={24} md={14}>
                            <div className="flex items-center gap-3 mb-4">
                                <Shield className="text-[#B54A3C]" size={32} color="#B54A3C" />
                                <span className="text-[#B54A3C] font-bold uppercase tracking-widest text-sm" style={{ color: '#B54A3C' }}>Law Enforcement & Government</span>
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
                                    className="relative z-10 opacity-90 drop-shadow-2xl"
                                    style={{ width: '160px', height: 'auto' }}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default AgencyCTA;
