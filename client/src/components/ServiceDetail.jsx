import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = services.find(s => s.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return (
            <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bebas mb-4">Service Not Found</h1>
                    <Link to="/" className="text-armory-red hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#1A1A1A] pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/" className="inline-flex items-center text-white/60 hover:text-white transition-colors mb-8 group">
                    <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Mission Services
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#050505] border border-white/10 p-8 md:p-12 rounded-sm relative overflow-hidden"
                >
                    {/* Background Texture */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />

                    <div className="relative z-10">
                        <div className="inline-block p-4 bg-armory-red/10 rounded-full mb-6">
                            {React.cloneElement(service.icon, { className: "text-armory-red" })}
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter font-bebas mb-6">
                            {service.title}
                        </h1>

                        <div className="w-24 h-1 bg-armory-red mb-8" />

                        <div className="prose prose-invert prose-lg max-w-none font-source text-white/80 whitespace-pre-line leading-relaxed">
                            {service.detailedDescription}
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5">
                            <button className="bg-armory-red text-white py-4 px-12 font-bold tracking-widest uppercase hover:bg-red-700 transition-colors w-full md:w-auto">
                                Schedule Service
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServiceDetail;
