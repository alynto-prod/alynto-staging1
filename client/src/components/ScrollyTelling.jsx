import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useSpring, motion, AnimatePresence } from 'framer-motion';

const FRAME_COUNT = 192;
const IMAGES_PATH = '/rotating-gun/';
const IMAGE_FORMAT = '.gif';

const ScrollyTelling = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    useEffect(() => {
        let loadedCount = 0;
        const imgArray = [];

        const loadImages = async () => {
            for (let i = 1; i <= FRAME_COUNT; i++) {
                const img = new Image();
                const indexStr = i.toString().padStart(3, '0');
                img.src = `${IMAGES_PATH}ffout${indexStr}${IMAGE_FORMAT}`;

                img.onload = () => {
                    loadedCount++;
                    setLoadingProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
                };
                imgArray[i - 1] = img;
            }

            await Promise.all(imgArray.map(img => {
                if (img.complete) return Promise.resolve();
                return new Promise(resolve => {
                    img.onload = resolve;
                    img.onerror = resolve;
                });
            }));

            setImages(imgArray);
            setIsLoading(false);
        };

        loadImages();
    }, []);

    useEffect(() => {
        if (!canvasRef.current || images.length === 0) return;

        const render = (val) => {
            const frameIndex = Math.floor(val * (FRAME_COUNT - 1));
            const safeIndex = Math.min(Math.max(frameIndex, 0), FRAME_COUNT - 1);
            const img = images[safeIndex];
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            if (!img || !img.complete || img.naturalWidth === 0) return;

            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);

            ctx.fillStyle = "#010101";
            ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

            const scale = Math.min(
                window.innerWidth / img.naturalWidth,
                window.innerHeight / img.naturalHeight
            );

            const drawWidth = img.naturalWidth * scale;
            const drawHeight = img.naturalHeight * scale;
            const x = (window.innerWidth - drawWidth) / 2;
            const y = (window.innerHeight - drawHeight) / 2;

            ctx.drawImage(img, x, y, drawWidth, drawHeight);
        };

        const unsubscribe = springScroll.on("change", render);
        render(springScroll.get());

        const handleResize = () => render(springScroll.get());
        window.addEventListener('resize', handleResize);

        return () => {
            unsubscribe();
            window.removeEventListener('resize', handleResize);
        };
    }, [images, springScroll]);

    // Animation Helpers - Updated for reliability
    // Beat A starts visible (1) then fades out. 
    // This guarantees user sees text at top of page.
    const beatAOpacity = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);
    const beatAY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    // Beat B (Right) Fades in then out
    const beatBOpacity = useTransform(scrollYProgress, [0.20, 0.25, 0.35, 0.40], [0, 1, 1, 0]);
    const beatBX = useTransform(scrollYProgress, [0.20, 0.40], [100, -100]);

    // Beat C (Left) Fades in then out
    const beatCOpacity = useTransform(scrollYProgress, [0.45, 0.50, 0.60, 0.65], [0, 1, 1, 0]);
    const beatCX = useTransform(scrollYProgress, [0.45, 0.65], [-100, 100]);

    // Beat D (Persistent) Fades in and stays
    const beatDOpacity = useTransform(scrollYProgress, [0.70, 0.80], [0, 1]);
    const beatDY = useTransform(scrollYProgress, [0.70, 0.80], [50, 0]);

    const [activeComponent, setActiveComponent] = useState(null);

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-[#010101]">
            <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ top: 0 }}>

                {/* Canvas Layer - Absolute Z-0 to avoid flow issues */}
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-contain z-0" />

                {/* Scroll Indicator - Z-20 */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-[0.2em] uppercase z-20 pointer-events-none"
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
                >
                    Scroll to Explore
                </motion.div>

                {/* Overlays Container - Z-50 (High) to force on top of Canvas */}
                <div className="absolute top-0 left-0 w-full h-full z-50 pointer-events-none">

                    {/* Beat A: Top Center (Starts Visible) */}
                    <motion.div
                        className="absolute top-[15%] left-1/2 -translate-x-1/2 text-center w-full max-w-7xl px-4"
                        style={{
                            opacity: beatAOpacity,
                            y: beatAY,
                            color: '#ffffff', // Force White
                            textShadow: '0 4px 20px rgba(0,0,0,0.5)' // consistent visibility
                        }}
                    >
                        <h2 style={{ fontSize: '6rem', lineHeight: '1', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'Impact, sans-serif' }}>PRECISION</h2>
                        <p style={{ fontSize: '1.5rem', fontWeight: '300', opacity: 0.8 }}>Equipment that works for any situation</p>
                    </motion.div>

                    {/* Beat B: Right Aligned */}
                    <motion.div
                        className="absolute top-1/2 right-10 md:right-20 max-w-lg text-right -translate-y-1/2"
                        style={{
                            opacity: beatBOpacity,
                            x: beatBX,
                            color: '#ffffff'
                        }}
                    >
                        <h3 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>MODULAR</h3>
                        <p style={{ fontSize: '1.25rem', opacity: 0.8 }}>Adapt instantly. Complete system integration.</p>
                    </motion.div>

                    {/* Beat C: Left Aligned */}
                    <motion.div
                        className="absolute top-1/2 left-10 md:left-20 max-w-lg text-left -translate-y-1/2"
                        style={{
                            opacity: beatCOpacity,
                            x: beatCX,
                            color: '#ffffff'
                        }}
                    >
                        <h3 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>LIGHTWEIGHT</h3>
                        <p style={{ fontSize: '1.25rem', opacity: 0.8 }}>Aerospace grade alloys. Zero compromise.</p>
                    </motion.div>

                    {/* Beat D: Persistent 3/4 Down (Interactive) */}
                    <motion.div
                        className="absolute top-[75%] left-0 w-full px-6 md:px-20 flex flex-col md:flex-row items-center justify-between"
                        style={{
                            opacity: beatDOpacity,
                            y: beatDY,
                            color: '#ffffff'
                        }}
                    >
                        {/* CTA Text */}
                        <div className="text-left md:w-1/2 mb-8 md:mb-0">
                            <h2 style={{ fontSize: '5rem', fontWeight: 'bold', marginBottom: '1rem', lineHeight: '1' }}>BUILD YOURS TODAY</h2>
                            <a href="#configurator" className="pointer-events-auto inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold tracking-widest text-sm uppercase transition-colors" style={{ textDecoration: 'none', color: 'white' }}>
                                Start Configuration
                            </a>
                        </div>

                        {/* Component List */}
                        <div className="md:w-1/3 text-right flex flex-col gap-4 pointer-events-auto">
                            {[
                                'Upper Receiver',
                                'Lower Receiver',
                                'Optics',
                                'Stock',
                                'Accessories'
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group cursor-pointer"
                                    onMouseEnter={() => setActiveComponent(item)}
                                    onMouseLeave={() => setActiveComponent(null)}
                                >
                                    <div
                                        className={`text-2xl font-bold tracking-wider transition-colors duration-300`}
                                        style={{
                                            fontSize: '1.5rem',
                                            color: activeComponent === item ? '#ef4444' : 'rgba(255,255,255,0.4)',
                                            transition: 'color 0.3s ease'
                                        }}
                                    >
                                        {item}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>

                {/* Loading State */}
                <AnimatePresence>
                    {isLoading && (
                        <motion.div
                            className="absolute inset-0 z-[100] bg-[#010101] flex flex-col items-center justify-center"
                            exit={{ opacity: 0 }}
                        >
                            <div className="w-64 h-1 bg-white/10 overflow-hidden">
                                <motion.div
                                    className="h-full bg-white/80"
                                    style={{ width: `${loadingProgress}%` }}
                                />
                            </div>
                            <p className="mt-4 text-xs text-white/40 tracking-widest uppercase">
                                Loading Experience {loadingProgress}%
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ScrollyTelling;
