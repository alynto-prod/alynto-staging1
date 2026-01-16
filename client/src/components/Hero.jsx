import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                <img
                    src="https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=2070&auto=format&fit=crop"
                    alt="Tactical Gear Background"
                    className="w-full h-full object-cover opacity-40 grayscale"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
                <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter uppercase drop-shadow-xl">
                    Forged for <span className="text-transparent bg-clip-text bg-gradient-to-r from-armory-orange to-orange-600">Freedom</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light tracking-wide">
                    Premium tactical gear and apparel for the modern patriot. Built to withstand the toughest conditions.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-armory-orange text-black px-8 py-4 text-xl font-bold uppercase hover:bg-white transition-all duration-300 skew-x-[-10deg] hover:skew-x-0 flex items-center justify-center gap-2 group">
                        <span>Shop Now</span>
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="border-2 border-white text-white px-8 py-4 text-xl font-bold uppercase hover:bg-white hover:text-black transition-all duration-300 skew-x-[-10deg] hover:skew-x-0">
                        View Collections
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
