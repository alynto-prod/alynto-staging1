import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useSpring, motion, AnimatePresence } from 'framer-motion';

const FRAME_COUNT = 192;
const IMAGES_PATH = `${import.meta.env.BASE_URL}rotating-gun/`;
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
            ) * 0.8; // 80% Scale relative to screen

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

    // Animation Helpers - Updated for reliability and user requests
    // Timed with 1% gaps (~2 frames) between beats for a "clean cut" effect

    // Beat A: Precision (Top) 
    // Ends at 0.24. Gap 0.24-0.25.
    const beatAOpacity = useTransform(scrollYProgress, [0, 0.20, 0.24], [1, 1, 0]);
    const beatAY = useTransform(scrollYProgress, [0, 0.24], [0, -50]);

    // Beat B: Modular (Right)
    // Starts at 0.25. Ends at 0.50. Gap 0.50-0.51.
    const beatBOpacity = useTransform(scrollYProgress, [0.25, 0.29, 0.46, 0.50], [0, 1, 1, 0]);
    const beatBX = useTransform(scrollYProgress, [0.25, 0.50], [100, -100]);

    // Beat C: Lightweight (Left)
    // Starts at 0.51. Ends at 0.74. Gap 0.74-0.75.
    const beatCOpacity = useTransform(scrollYProgress, [0.51, 0.55, 0.70, 0.74], [0, 1, 1, 0]);
    const beatCX = useTransform(scrollYProgress, [0.51, 0.74], [-100, 100]);

    // Beat D: Persistent (Bottom + List)
    // Starts at 0.75.
    const beatDOpacity = useTransform(scrollYProgress, [0.75, 0.79], [0, 1]);
    const beatDY = useTransform(scrollYProgress, [0.75, 0.79], [50, 0]);

    const [activeComponent, setActiveComponent] = useState(null);

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-[#010101]">
            <style>{`
                .st-mobile { display: block; }
                .st-desktop { display: none; }
                @media (min-width: 768px) {
                    .st-mobile { display: none !important; }
                    .st-desktop { display: block !important; }
                }
            `}</style>
            <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ top: 0 }}>

                {/* Canvas Layer - Absolute Z-0 */}
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-contain z-0" />

                {/* Scroll Indicator - Z-20 */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-[0.2em] uppercase z-20 pointer-events-none"
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
                >
                    Scroll to Explore
                </motion.div>

                {/* Overlays Container - Z-50 */}
                <div className="absolute top-0 left-0 w-full h-full z-50 pointer-events-none">

                    {/* Beat A: Top Center (Starts Visible) */}
                    <motion.div
                        className="absolute top-[8%] left-1/2 -translate-x-1/2 text-center w-full max-w-7xl px-4"
                        style={{
                            opacity: beatAOpacity,
                            y: beatAY,
                            color: '#ffffff',
                            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                        }}
                    >
                        <h2 style={{ fontSize: 'clamp(3rem, 15vw, 6rem)', lineHeight: '1', fontWeight: 'bold', marginBottom: '1rem' }}>ADAPTABLE</h2>
                        <p style={{ fontSize: 'clamp(1rem, 4vw, 1.5rem)', fontWeight: '300', opacity: 0.8 }}>Equipment that works for any situation</p>
                    </motion.div>

                    {/* Beat B: Modular */}
                    {/* Mobile: Centered, No Slide */}
                    <motion.div
                        className="st-mobile absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 text-center"
                        style={{ opacity: beatBOpacity, color: '#ffffff' }}
                    >
                        <h3 style={{ fontSize: 'clamp(2.5rem, 10vw, 4rem)', fontWeight: 'bold', marginBottom: '0.5rem' }}>MODULAR</h3>
                        <p style={{ fontSize: '1.25rem', opacity: 0.8 }}>Adapt instantly.<br />Complete system integration.</p>
                    </motion.div>

                    {/* Desktop: Right Aligned, Slide Animation -> Fixed Position Fade */}
                    <motion.div
                        className="st-desktop absolute top-1/2 -translate-y-1/2 max-w-md text-right"
                        style={{
                            right: '5%',
                            left: 'auto',
                            opacity: beatBOpacity,
                            color: '#ffffff'
                        }}
                    >
                        <h3 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>MODULAR</h3>
                        <p style={{ fontSize: '1.25rem', opacity: 0.8 }}>Adapt instantly. Complete system integration.</p>
                    </motion.div>


                    {/* Beat C: Lightweight */}
                    {/* Mobile: Centered, No Slide */}
                    <motion.div
                        className="st-mobile absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 text-center"
                        style={{ opacity: beatCOpacity, color: '#ffffff' }}
                    >
                        <h3 style={{ fontSize: 'clamp(2.5rem, 10vw, 4rem)', fontWeight: 'bold', marginBottom: '0.5rem' }}>LIGHTWEIGHT</h3>
                        <p style={{ fontSize: '1.25rem', opacity: 0.8 }}>Aerospace grade alloys.<br />Zero compromise.</p>
                    </motion.div>

                    {/* Desktop: Left Aligned, Slide Animation -> Fixed Position Fade */}
                    <motion.div
                        className="st-desktop absolute top-1/2 -translate-y-1/2 max-w-md text-left"
                        style={{
                            left: '5%',
                            right: 'auto',
                            opacity: beatCOpacity,
                            color: '#ffffff'
                        }}
                    >
                        <h3 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>LIGHTWEIGHT</h3>
                        <p style={{ fontSize: '1.25rem', opacity: 0.8 }}>Aerospace grade alloys. Zero compromise.</p>
                    </motion.div>


                    {/* Beat D: Persistent 3/4 Down (Text) + Centered List (Right) */}
                    {/* Text Group - Strictly Left on Desktop to avoid List, Centered Upper on Mobile */}
                    <motion.div
                        className="absolute top-[50%] md:top-1/2 md:-translate-y-1/2 left-0 w-full md:w-auto md:left-[5%] px-6 md:px-0 text-center md:text-left pointer-events-none"
                        style={{
                            opacity: beatDOpacity,
                            y: beatDY,
                            color: '#ffffff'
                        }}
                    >
                        <div className="md:max-w-md mx-auto md:mx-0 pointer-events-auto">
                            <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 'bold', marginBottom: '1rem', lineHeight: '1' }}>BUILD YOURS TODAY</h2>
                            <a href="#configurator" className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold tracking-widest text-sm uppercase transition-colors" style={{ textDecoration: 'none', color: 'white' }}>
                                Start Configuration
                            </a>
                        </div>
                    </motion.div>

                    {/* List Group */}
                    {/* Mobile: Beneath Text, Inline Wrapped */}
                    <motion.div
                        className="st-mobile absolute top-[70%] left-0 w-full text-center pointer-events-auto"
                        style={{ opacity: beatDOpacity, color: '#ffffff' }}
                    >
                        <div className="flex flex-wrap justify-center px-4 mx-auto" style={{ gap: '1.5rem', maxWidth: '500px' }}>
                            {['Upper Receiver', 'Lower Receiver', 'Optics', 'Stock', 'Accessories'].map((item, index) => (
                                <div key={index} className="text-sm font-bold tracking-wider text-white/80 bg-black/40 rounded-full backdrop-blur-sm border border-white/10" style={{ padding: '0.75rem 2rem' }}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Desktop: Right Aligned, Vertical Center */}
                    <motion.div
                        className="st-desktop absolute top-1/2 -translate-y-1/2 flex flex-col gap-4 text-right pointer-events-auto"
                        style={{
                            right: '5%',
                            left: 'auto',
                            opacity: beatDOpacity,
                            color: '#ffffff'
                        }}
                    >
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
                                    className={`font-bold tracking-wider transition-colors duration-300`}
                                    style={{
                                        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                                        color: activeComponent === item ? '#ef4444' : 'rgba(255,255,255,0.4)',
                                        transition: 'color 0.3s ease'
                                    }}
                                >
                                    {item}
                                </div>
                            </div>
                        ))}
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
