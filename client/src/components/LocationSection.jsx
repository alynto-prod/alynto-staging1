import React from 'react';
import { Button, Typography } from 'antd';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const LocationSection = () => {
    return (
        <section className="relative w-full h-[600px] bg-[#010101] overflow-hidden">
            {/* Dark Filter Overlay for Map */}
            <div className="absolute inset-0 bg-[#010101]/20 pointer-events-none z-10 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#010101] via-transparent to-[#010101] pointer-events-none z-10" />

            {/* Google Map Iframe */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102985.39002573229!2d-86.58197771780826!3d36.20819728863695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88643f820c75c875%3A0x6b2837375a06587c!2sMt.%20Juliet%2C%20TN!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(85%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover opacity-60"
            />

            {/* Overlay Box */}
            <div className="absolute top-1/2 left-4 md:left-24 -translate-y-1/2 z-20 w-full max-w-md">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#141414]/90 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden group"
                >
                    {/* Glow Effect */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#B54A3C] rounded-full blur-[60px] opacity-20 pointer-events-none" />

                    <div className="relative z-10">
                        <Title level={2} style={{ color: '#fff', fontFamily: 'Bebas Neue', fontSize: '3rem', marginBottom: '1.5rem', letterSpacing: '2px' }}>
                            VISIT THE ARMORY
                        </Title>

                        <div className="space-y-6 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-[#B54A3C]">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold tracking-wide mb-1">LOCATION</h4>
                                    <p className="text-gray-400 font-source">
                                        Mount Juliet, TN 37122<br />
                                        United States
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-[#B54A3C]">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold tracking-wide mb-1">HOURS</h4>
                                    <p className="text-gray-400 font-source">
                                        Mon - Fri: 10:00 AM - 6:00 PM<br />
                                        Sat: 10:00 AM - 4:00 PM<br />
                                        Sun: Closed
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Button
                            type="primary"
                            size="large"
                            icon={<Navigation size={18} />}
                            href="https://maps.google.com/?q=Mt.+Juliet,+TN"
                            target="_blank"
                            className="bg-[#B54A3C] hover:bg-[#8e3a2f] border-none h-14 w-full text-lg tracking-widest font-bold uppercase transition-all duration-300 shadow-lg hover:shadow-[#B54A3C]/40"
                        >
                            Get Directions
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LocationSection;
