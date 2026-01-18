import React from 'react';
import { Button, Typography } from 'antd';
import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import contactBg from '../assets/contact_bg.png';

const { Title, Paragraph } = Typography;

const ContactCTA = () => {
    return (
        <section className="relative w-full min-h-[600px] py-24 overflow-hidden flex items-center justify-center">
            {/* Background Image with Parallax-like fixed attachment or just cover */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url(${contactBg})`,
                    // Optional: fixed attachment for parallax feel if desired, though 'cover' is often safer for mobile
                    // backgroundAttachment: 'fixed' 
                }}
            />

            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Content Content */}
            <div className="relative z-20 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <Title level={2} style={{ color: '#fff', fontFamily: 'Bebas Neue', fontSize: 'clamp(3rem, 6vw, 6rem)', lineHeight: '1', marginBottom: '1.5rem', letterSpacing: '2px' }}>
                        Ready to Start Your Build?
                    </Title>

                    <Paragraph className="text-gray-300 text-lg md:text-xl font-source mb-10 max-w-2xl mx-auto leading-relaxed">
                        Whether you need a custom precision rifle, a suppressor consultation, or expert gunsmithing services, our team is ready to assist you.
                    </Paragraph>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button
                            type="primary"
                            size="large"
                            href="/contact"
                            className="h-16 px-10 text-xl font-bold uppercase !bg-armory-red hover:!bg-[#8e3a2f] !text-white border-none flex items-center gap-3 shadow-lg shadow-armory-red/20 transition-all hover:scale-105"
                        >
                            Contact Us
                            <ArrowRight size={24} />
                        </Button>

                        <a href="mailto:info@rustyoak.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group">
                            <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                <Mail size={20} />
                            </div>
                            <span className="uppercase tracking-widest text-sm font-bold">Email Directly</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactCTA;
