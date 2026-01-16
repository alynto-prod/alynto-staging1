import React from 'react';
import { Typography, Button, Space } from 'antd';
import { ArrowRight } from 'lucide-react';

const { Title, Paragraph } = Typography;

const Hero = () => {
    return (
        <div className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-armory-black via-armory-black/50 to-transparent z-10" />
                <img
                    src="/src/assets/hero-bg.png"
                    alt="Tactical Gear Background"
                    className="w-full h-full object-cover opacity-60 grayscale"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
                <Title
                    level={1}
                    style={{
                        color: '#fff',
                        fontSize: 'clamp(3rem, 5vw, 6rem)',
                        fontFamily: 'Bebas Neue, sans-serif',
                        textTransform: 'uppercase',
                        margin: '0 0 24px 0',
                        letterSpacing: '0.05em',
                        lineHeight: 1
                    }}
                >
                    Forged for <span className="text-transparent bg-clip-text bg-gradient-to-r from-armory-red to-red-600">Freedom</span>
                </Title>

                <Paragraph
                    style={{
                        color: '#d1d5db',
                        fontSize: '1.5rem',
                        maxWidth: '42rem',
                        margin: '0 auto 40px auto',
                        fontWeight: 300
                    }}
                >
                    Premium tactical gear and apparel for the modern patriot. Built to withstand the toughest conditions.
                </Paragraph>

                <Space size="large" wrap justify="center">
                    <Button
                        type="primary"
                        size="large"
                        className="h-14 px-8 text-xl font-bold uppercase skew-x-[-10deg] hover:skew-x-0 !bg-armory-red !text-white border-none flex items-center gap-2 group"
                    >
                        <span className="skew-x-[10deg] group-hover:skew-x-0">Shop Now</span>
                        <ArrowRight className="group-hover:translate-x-1 transition-transform skew-x-[10deg] group-hover:skew-x-0" size={20} />
                    </Button>

                    <Button
                        ghost
                        size="large"
                        className="h-14 px-8 text-xl font-bold uppercase skew-x-[-10deg] hover:skew-x-0 !border-2 !border-white !text-white hover:!bg-white hover:!text-black"
                    >
                        <span className="skew-x-[10deg] group-hover:skew-x-0">View Collections</span>
                    </Button>
                </Space>
            </div>
        </div>
    );
};

export default Hero;
