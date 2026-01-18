import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            text: "Rusty Oak Armory is my go-to guy for engraving Form 1 stuff. Very reasonable cost. Can get the engraving done while you wait when you call ahead for an appointment. He is a 07/02 FFL.",
            author: "Verified Customer",
            location: "Local Resident"
        }
    ];

    return (
        <section className="relative py-20 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                >
                    <div className="bg-[#B54A3C]/10 p-3 rounded-full mb-8">
                        <Quote className="text-armory-red w-8 h-8" style={{ color: '#B54A3C' }} />
                    </div>

                    <span className="text-armory-red font-source font-bold tracking-[0.3em] text-xs uppercase mb-6" style={{ color: '#B54A3C' }}>
                        What Clients Say
                    </span>

                    <div className="relative">
                        <p className="font-source text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed font-light italic mb-10">
                            "{reviews[0].text}"
                        </p>

                        <div className="flex flex-col items-center">
                            <div className="w-12 h-[2px] bg-[#B54A3C] mb-4" />
                            <h5 className="font-bebas text-xl text-white tracking-widest">{reviews[0].author}</h5>
                            <p className="font-source text-white/40 text-xs uppercase tracking-widest mt-1">
                                {reviews[0].location}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-between px-10 pointer-events-none opacity-[0.02] select-none">
                <span className="font-bebas text-[15vw] text-white">07/02</span>
                <span className="font-bebas text-[15vw] text-white">FFL</span>
            </div>
        </section>
    );
};

export default Testimonials;
