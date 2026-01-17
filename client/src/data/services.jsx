import React from 'react';
import { Scale, ShieldCheck, Fingerprint, PenTool, Truck, Hammer } from 'lucide-react';

export const services = [
    {
        id: 'ffl-transfers',
        title: 'FFL Transfers',
        slug: 'ffl-transfers',
        icon: <Scale size={48} className="text-armory-red mb-4 group-hover:text-white transition-colors duration-300" />,
        description: 'Seamless transfer services for your firearm purchases. We handle the paperwork so you can focus on the range.',
        detailedDescription: `
            Our FFL Transfer service is designed to be the smoothest part of your acquisition process. 
            Whether you're buying online or from another individual, we ensure full federal and state compliance 
            with speed and professionalism. We accept transfers from all major online retailers and distributors.
            
            Pricing:
            - Standard Firearm: $35
            - NFA Item: $75
            - Private Party Transfer: $45
        `,
        gridClass: 'md:col-span-2 md:row-span-1 bg-gradient-to-br from-armory-black to-[#1a1a1a]'
    },
    {
        id: 'nfa-transfers',
        title: 'NFA Transfers',
        slug: 'nfa-transfers',
        icon: <ShieldCheck size={48} className="text-armory-red mb-4 group-hover:text-white transition-colors duration-300" />,
        description: 'Expert handling of NFA regulated items. Silencers, SBRs, and more handled with precision compliance.',
        detailedDescription: `
            Navigating the National Firearms Act (NFA) can be complex. We make it simple. 
            From Silencers to Short Barreled Rifles (SBRs) and Machine Guns, our team documents every step 
            to ensure 100% compliance. We utilize the Silencer Shop Kiosk for digital fingerprinting 
            to expedite your Form 4 submission.
        `,
        gridClass: 'md:col-span-1 md:row-span-2 bg-[#0a0a0a]'
    },
    {
        id: 'fingerprinting',
        title: 'Fingerprinting',
        slug: 'fingerprinting',
        icon: <Fingerprint size={48} className="text-armory-red mb-4 group-hover:text-white transition-colors duration-300" />,
        description: 'On-site digital fingerprinting.',
        detailedDescription: `
            Get your EFT file generated instantly with our on-site digital fingerprinting service. 
            Perfect for eForms, background checks, and employment requirements. 
            No ink, no mess, just digital precision.
        `,
        gridClass: 'md:col-span-1 md:row-span-1 bg-[#111]'
    },
    {
        id: 'engraving',
        title: 'Engraving',
        slug: 'engraving',
        icon: <PenTool size={48} className="text-armory-red mb-4 group-hover:text-white transition-colors duration-300" />,
        description: 'Custom laser engraving.',
        detailedDescription: `
            Make it yours. Our high-fidelity laser engraving works on metals and polymers. 
            Whether it's NFA Trust engraving compliance or custom artwork on a slide or receiver, 
            our equipment delivers surgical precision.
        `,
        gridClass: 'md:col-span-1 md:row-span-1 bg-[#111]'
    },
    {
        id: 'shipping',
        title: 'Firearm Shipping',
        slug: 'shipping',
        icon: <Truck size={48} className="text-armory-red mb-4 group-hover:text-white transition-colors duration-300" />,
        description: 'Secure nationwide shipping.',
        detailedDescription: `
            Need to ship a firearm? Don't risk it. We provide legal, secure, and insured shipping services 
            to FFLs nationwide. We handle packaging, verification of the receiving license, and carrier compliance.
        `,
        gridClass: 'md:col-span-1 md:row-span-1 bg-[#111]'
    },
    {
        id: 'slide-work',
        title: 'Slide Work & Cerakote',
        slug: 'slide-work',
        icon: <Hammer size={48} className="text-armory-red mb-4 group-hover:text-white transition-colors duration-300" />,
        description: 'Professional slide milling and durable Cerakote refinishing.',
        detailedDescription: `
            Transform your factory slide into a high-performance optics-ready platform. 
            We offer cuts for RMR, Holosun, and other footprints. finish it off with Cerakote 
            for ultimate corrosion resistance and custom aesthetics.
        `,
        gridClass: 'md:col-span-2 md:row-span-1 bg-gradient-to-tl from-armory-black to-[#1a1a1a]'
    }
];
