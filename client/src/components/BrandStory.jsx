import React from 'react';
import { motion } from 'framer-motion';

const BrandStory = () => {
    return (
        <section className="relative py-24 md:py-32 bg-[#010101] overflow-hidden border-t border-white/5">
            {/* Background Accents */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#B54A3C]/5 blur-[120px] rounded-full" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#B54A3C]/5 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Side: Bold Headline Block */}
                    <div className="lg:col-span-5 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-armory-red font-source font-bold tracking-[0.4em] text-sm uppercase mb-4 block" style={{ color: '#B54A3C' }}>
                                OUR PHILOSOPHY
                            </span>
                            <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tight">
                                FORGED IN <br />
                                <span className="text-white/40">FREEDOM</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            className="w-24 h-1 bg-[#B54A3C]"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 1 }}
                        />
                    </div>

                    {/* Right Side: Detailed Narrative */}
                    <div className="lg:col-span-7 lg:pl-12">
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p className="font-source text-xl md:text-2xl text-white/80 leading-relaxed font-light italic">
                                "What started as a love for top-quality firearms has quickly grown into a way to support law enforcement agencies across the country and take part in protecting our beautiful nation"
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                <div className="space-y-3">
                                    <h4 className="font-bebas text-2xl text-white tracking-wider">UNCOMPROMISING QUALITY</h4>
                                    <p className="font-source text-white/60 leading-relaxed text-sm">
                                        Every component we engineer is held to the highest standard of American craftsmanship. We don't just manufacture firearms; we build tools for defense, sport, and legacy.
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="font-bebas text-2xl text-white tracking-wider">AMERICAN VALUES</h4>
                                    <p className="font-source text-white/60 leading-relaxed text-sm">
                                        Rooted in the heart of Tennessee, our company is driven by a deep love for our country and an unwavering support for the 2nd Amendment.
                                    </p>
                                </div>
                            </div>

                            <motion.div
                                className="pt-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                            >
                                <p className="font-source text-white/40 uppercase tracking-[0.3em] text-xs font-bold">
                                    EST. 2024 • TENNESSEE, USA
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Subtle Decorative Graphic (Mobile Hidden) */}
            <div className="hidden lg:block absolute bottom-0 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
                <span className="font-bebas text-[25vw] whitespace-nowrap text-white transform translate-y-1/2 select-none">
                    RUSTY OAK ARMORY • LIBERTY OR DEATH • RUSTY OAK ARMORY
                </span>
            </div>
        </section>
    );
};

export default BrandStory;
