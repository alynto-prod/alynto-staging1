import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useSpring, motion, AnimatePresence } from 'framer-motion';

const FRAME_COUNT = 192;
const IMAGES_PATH = '/rotating-gun/';
const IMAGE_FORMAT = '.gif'; // Using GIFs as provided

const ScrollyTelling = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);

    // Track scroll progress of the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth out the scroll value
    const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Preload Images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray = [];

        const loadImages = async () => {
            // Files are named ffout001.gif to ffout192.gif
            // Need to match exact filenames from directory
            for (let i = 1; i <= FRAME_COUNT; i++) {
                const img = new Image();
                // Naming convention: ffout[NNN].gif
                // Pad to 3 digits: 1 -> 001
                const indexStr = i.toString().padStart(3, '0');
                img.src = `${IMAGES_PATH}ffout${indexStr}${IMAGE_FORMAT}`;

                // We'll trust the browser to load them. 
                // A true async await loop is slow, so we map promises.
                img.onload = () => {
                    loadedCount++;
                    setLoadingProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
                };
                // Store incomplete image object immediately to preserve order
                imgArray[i - 1] = img;
            }

            // Wait for all
            await Promise.all(imgArray.map(img => {
                if (img.complete) return Promise.resolve();
                return new Promise(resolve => {
                    img.onload = resolve;
                    img.onerror = resolve; // Continue on error
                });
            }));

            setImages(imgArray);
            setIsLoading(false);
        };

        loadImages();
    }, []);

    // Draw to Canvas
    useEffect(() => {
        if (!canvasRef.current || images.length === 0) return;

        const render = (val) => {
            // Map 0..1 to 0..(FRAME_COUNT-1)
            const frameIndex = Math.floor(val * (FRAME_COUNT - 1));
            const safeIndex = Math.min(Math.max(frameIndex, 0), FRAME_COUNT - 1);
            const img = images[safeIndex];
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            if (!img || !img.complete || img.naturalWidth === 0) return;

            // Responsive Scaling: Object-fit 'contain' logic
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);

            // Clear with #010101
            ctx.fillStyle = "#010101";
            ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

            const scale = Math.min(
                window.innerWidth / img.naturalWidth,
                window.innerHeight / img.naturalHeight
            );

            // Draw centered
            const drawWidth = img.naturalWidth * scale;
            const drawHeight = img.naturalHeight * scale;
            const x = (window.innerWidth - drawWidth) / 2;
            const y = (window.innerHeight - drawHeight) / 2;

            ctx.drawImage(img, x, y, drawWidth, drawHeight);
        };

        const unsubscribe = springScroll.on("change", render);
        // Initial render
        render(springScroll.get());

        // Handle resize
        const handleResize = () => render(springScroll.get());
        window.addEventListener('resize', handleResize);

        return () => {
            unsubscribe();
            window.removeEventListener('resize', handleResize);
        };
    }, [images, springScroll]);

    // Animation Helpers
    const getBeatOpacity = (start, end) => useTransform(
        scrollYProgress,
        [start, start + 0.1, end - 0.1, end],
        [0, 1, 1, 0]
    );

    const getBeatY = (start, end) => useTransform(
        scrollYProgress,
        [start, start + 0.1, end],
        [20, 0, -20]
    );

    // Beats Config
    const beatA = { start: 0.0, end: 0.2 };
    const beatB = { start: 0.25, end: 0.45 };
    const beatC = { start: 0.50, end: 0.70 };
    const beatD = { start: 0.75, end: 0.95 };

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-[#010101]">
            <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ top: 0 }}>
                <canvas ref={canvasRef} className="block w-full h-full" />

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-[0.2em] uppercase"
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                >
                    Scroll to Explore
                </motion.div>

                {/* Overlays Container */}
                <div className="absolute inset-0 pointer-events-none z-10">

                    {/* Beat A: Hero */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-7xl px-4"
                        style={{ opacity: getBeatOpacity(beatA.start, beatA.end), y: getBeatY(beatA.start, beatA.end) }}
                    >
                        <h2 className="text-7xl md:text-9xl font-bold text-white/90 tracking-tighter mb-4">PRECISION</h2>
                        <p className="text-xl text-white/60 font-light tracking-wide">Equipment that works for any situation</p>
                    </motion.div>

                    {/* Beat B: Feature 1 (Left) */}
                    <motion.div
                        className="absolute top-1/2 left-10 md:left-20 max-w-lg text-left -translate-y-1/2"
                        style={{ opacity: getBeatOpacity(beatB.start, beatB.end), y: getBeatY(beatB.start, beatB.end) }}
                    >
                        <h3 className="text-5xl md:text-7xl font-bold text-white/90 mb-2">MODULAR</h3>
                        <p className="text-lg text-white/60">Adapt instantly. Complete system integration.</p>
                    </motion.div>

                    {/* Beat C: Feature 2 (Right) */}
                    <motion.div
                        className="absolute top-1/2 right-10 md:right-20 max-w-lg text-right -translate-y-1/2"
                        style={{ opacity: getBeatOpacity(beatC.start, beatC.end), y: getBeatY(beatC.start, beatC.end) }}
                    >
                        <h3 className="text-5xl md:text-7xl font-bold text-white/90 mb-2">LIGHTWEIGHT</h3>
                        <p className="text-lg text-white/60">Aerospace grade alloys. Zero compromise.</p>
                    </motion.div>

                    {/* Beat D: CTA (Center) */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                        style={{ opacity: getBeatOpacity(beatD.start, beatD.end), y: getBeatY(beatD.start, beatD.end) }}
                    >
                        <h2 className="text-6xl md:text-8xl font-bold text-white/90 mb-8">BUILD YOURS</h2>
                        <a href="#contact" className="pointer-events-auto inline-block px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all tracking-widest text-sm uppercase">
                            Start Configuration
                        </a>
                    </motion.div>

                </div>

                {/* Loading State */}
                <AnimatePresence>
                    {isLoading && (
                        <motion.div
                            className="absolute inset-0 z-50 bg-[#010101] flex flex-col items-center justify-center"
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
