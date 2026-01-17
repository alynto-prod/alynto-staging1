import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useSpring, motion, AnimatePresence } from 'framer-motion';

const FRAME_COUNT = 192;
const IMAGES_PATH = '/rotating-gun/';
const IMAGE_FORMAT = '.jpg'; // Based on file list

// Preload images function
const preloadImages = () => {
    return new Promise((resolve, reject) => {
        const images = [];
        let loadedCount = 0;

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            // Format filename: frame_000_delay-0.04s.jpg
            // We need to match the exact filename pattern from the directory list
            // Based on previous list_dir: frame_000_delay-0.04s.jpg
            const indexStr = i.toString().padStart(3, '0');
            const src = `${IMAGES_PATH}frame_${indexStr}_delay-0.04s${IMAGE_FORMAT}`;

            img.src = src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) resolve(images);
            };
            img.onerror = (e) => {
                console.error(`Failed to load image at index ${i}`, e);
                // Resolve anyway to avoid blocking execution, maybe valid for some missing frames?
                // But ideally we want all. For now, let's keep going.
                loadedCount++;
                if (loadedCount === FRAME_COUNT) resolve(images);
            };
            images[i] = img;
        }
    });
};

const ScrollyTelling = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [activeComponent, setActiveComponent] = useState(null);


    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    useEffect(() => {
        // Preload simulation for progress bar (imperfect but better than nothing for raw Image loading)
        // Since we can't easily track granular progress of `preloadImages` inside the promise without architectural changes,
        // we'll just trust the browser cache and standard loading. 
        // For a more robust progress bar we'd need to emit events from the preloader.
        // Let's implement a simple version of preloading that updates state.

        let loaded = 0;
        const imgs = [];

        const loadNext = (index) => {
            if (index >= FRAME_COUNT) {
                setImages(imgs);
                setIsLoading(false);
                return;
            }

            const img = new Image();
            const indexStr = index.toString().padStart(3, '0');
            const src = `${IMAGES_PATH}frame_${indexStr}_delay-0.04s${IMAGE_FORMAT}`;

            img.src = src;
            img.onload = () => {
                imgs[index] = img;
                loaded++;
                setLoadingProgress(Math.round((loaded / FRAME_COUNT) * 100));
                // Load parallel for speed, or sequential? Parallel is better usually.
            };
            // Just fire next batch
        };

        // Fire all requests
        for (let i = 0; i < FRAME_COUNT; i++) {
            loadNext(i);
        }

        // Wait for all to complete?
        // The above loop fires all requests. We need to wait for them to finish.
        // Let's rewrite strictly.

        const loadAll = async () => {
            const promises = [];
            for (let i = 0; i < FRAME_COUNT; i++) {
                promises.push(new Promise((resolve) => {
                    const img = new Image();
                    const indexStr = i.toString().padStart(3, '0');
                    const src = `${IMAGES_PATH}frame_${indexStr}_delay-0.04s${IMAGE_FORMAT}`;
                    img.src = src;
                    img.onload = () => {
                        setLoadingProgress(prev => Math.min(prev + (100 / FRAME_COUNT), 100));
                        resolve(img);
                    };
                    img.onerror = () => resolve(null); // specific error handling
                }));
            }

            const loadedImages = await Promise.all(promises);
            setImages(loadedImages);
            setIsLoading(false);
        };

        loadAll();

    }, []);


    useEffect(() => {
        if (!canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Resize observer
        const handleResize = () => {
            // Handle 2x dpr for crispness
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        const render = (val) => {
            const frameIndex = Math.floor(val * (FRAME_COUNT - 1));
            const safeIndex = Math.min(Math.max(frameIndex, 0), FRAME_COUNT - 1);
            const img = images[safeIndex];

            if (img && img.complete) {
                // Clear
                // ctx.clearRect(0, 0, canvas.width, canvas.height); // Not needed if we fill background

                // Fill Background #010101
                ctx.fillStyle = "#010101";
                ctx.fillRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));

                // Enable high quality smoothing
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';

                // Draw Image Contain with Scale Factor
                // Reduce size to 70% of viewport for "smaller" look
                const scaleFactor = 0.7;

                const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
                const canvasHeight = canvas.height / (window.devicePixelRatio || 1);

                // Target dimensions
                const targetWidth = canvasWidth * scaleFactor;
                const targetHeight = canvasHeight * scaleFactor;

                const imgRatio = img.width / img.height;
                const targetRatio = targetWidth / targetHeight;

                let drawWidth, drawHeight, offsetX, offsetY;

                if (imgRatio > targetRatio) {
                    drawWidth = targetWidth;
                    drawHeight = targetWidth / imgRatio;
                } else {
                    drawHeight = targetHeight;
                    drawWidth = targetHeight * imgRatio;
                }

                // Center in the full canvas
                offsetX = (canvasWidth - drawWidth) / 2;
                offsetY = (canvasHeight - drawHeight) / 2;

                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }
        };

        // Subscribe to spring changes
        const unsubscribe = springScroll.on("change", (latest) => {
            render(latest);
        });

        // Initial render
        render(springScroll.get());

        return () => {
            unsubscribe();
            window.removeEventListener('resize', handleResize);
        };
    }, [images, springScroll]);

    // Opacity transforms for beats
    const beatAOpacity = useTransform(scrollYProgress, [0, 0.1, 0.15, 0.25], [0, 1, 1, 0]);
    const beatAY = useTransform(scrollYProgress, [0, 0.1, 0.25], [20, 0, -20]);

    const beatBOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.40, 0.50], [0, 1, 1, 0]);
    const beatBY = useTransform(scrollYProgress, [0.25, 0.35, 0.50], [20, 0, -20]);

    const beatCOpacity = useTransform(scrollYProgress, [0.50, 0.60, 0.65, 0.75], [0, 1, 1, 0]);
    const beatCY = useTransform(scrollYProgress, [0.50, 0.60, 0.75], [20, 0, -20]);

    const beatDOpacity = useTransform(scrollYProgress, [0.85, 0.9, 1.0], [0, 1, 1]); // Fully visible last 10%
    const beatDY = useTransform(scrollYProgress, [0.85, 0.9, 1.0], [20, 0, 0]); // Stable position last 10%

    const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);


    return (
        <div className="bg-[#010101] min-h-screen text-white/90 font-sans selection:bg-red-500/30 relative">
            {/* Top Gradient for Smooth Transition */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1A1A1A] to-[#010101] z-30 pointer-events-none" />

            {/* Loading Screen */}
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#010101]"
                        exit={{ opacity: 0 }}
                    >
                        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-red-600"
                                style={{ width: `${loadingProgress}%` }}
                            />
                        </div>
                        <p className="mt-4 text-xs tracking-widest text-white/40 uppercase">Loading Assets...</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {!isLoading && (
                <div ref={containerRef} className="h-[800vh] relative">

                    {/* Sticky Canvas */}
                    <div className="sticky top-0 h-screen w-full overflow-hidden">
                        <canvas ref={canvasRef} className="block w-full h-full" />

                        {/* Scroll Indicator */}
                        <motion.div
                            style={{ opacity: scrollIndicatorOpacity }}
                            className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none z-20"
                        >
                            <p className="text-xs uppercase tracking-[0.2em] text-white/30 animate-pulse">Scroll to Explore</p>
                        </motion.div>

                        {/* Text Overlays Layer */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full max-w-4xl px-6 pointer-events-none"
                            style={{ opacity: beatAOpacity, y: beatAY }}
                        >
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">PRECISION</h1>
                            <p className="text-xl md:text-2xl text-white/60 font-light tracking-wide">Engineered for the absolute edge.</p>
                        </motion.div>

                        <motion.div
                            className="absolute top-1/2 left-0 -translate-y-1/2 z-10 w-full max-w-7xl px-6 md:px-12 pointer-events-none"
                            style={{ opacity: beatBOpacity, y: beatBY }}
                        >
                            <div className="md:w-1/3">
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-left">Modular Design</h2>
                                <p className="text-lg text-white/60 text-left">Adapt to any mission requirement instantly.</p>
                                <div className="mt-4 border-l-2 border-red-600 pl-4 text-sm text-white/40 text-left">
                                    SYSTEM ALPHA
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute top-1/2 right-0 -translate-y-1/2 z-10 w-full max-w-7xl px-6 md:px-12 flex justify-end pointer-events-none"
                            style={{ opacity: beatCOpacity, y: beatCY }}
                        >
                            <div className="md:w-1/3 text-right">
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Composite Alloy</h2>
                                <p className="text-lg text-white/60">Featherweight durability that defies physics.</p>
                                <div className="mt-4 border-r-2 border-red-600 pr-4 text-sm text-white/40 inline-block">
                                    GRADE V TITANIUM
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute inset-0 z-50 pointer-events-none"
                            style={{ opacity: beatDOpacity, y: beatDY }}
                        >
                            {/* Interactive Component List Layer */}
                            <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-between px-12">

                                {/* Info / Header */}
                                <div className="pointer-events-auto">
                                    <h2 className="text-5xl font-bold tracking-tighter text-white mb-4 text-shadow-lg">PLATFORM SPECS</h2>
                                    <p className="text-white/60 text-sm tracking-widest uppercase max-w-xs leading-relaxed">
                                        Hover over the components to inspect technical details and configuration options.
                                    </p>
                                </div>

                                {/* Component List */}
                                <div className="flex flex-col gap-6 items-end pointer-events-auto z-50">
                                    {[
                                        { id: 'optics', label: '01 // OPTICS', top: '30%', left: '55%' },
                                        { id: 'upper', label: '02 // UPPER RECEIVER', top: '45%', left: '50%' },
                                        { id: 'lower', label: '03 // LOWER RECEIVER', top: '60%', left: '48%' },
                                        { id: 'stocks', label: '04 // STOCKS', top: '50%', left: '85%' },
                                        { id: 'attachments', label: '05 // ATTACHMENTS', top: '55%', left: '15%' },
                                        { id: 'ammo', label: '06 // AMMUNITION', top: '55%', left: '15%' },
                                    ].map((item) => (
                                        <div
                                            key={item.id}
                                            className="group cursor-pointer text-right transition-all"
                                            onMouseEnter={() => setActiveComponent(item)}
                                            onMouseLeave={() => setActiveComponent(null)}
                                        >
                                            <div className={`text-2xl font-bold tracking-wider transition-colors duration-300 ${activeComponent?.id === item.id ? 'text-red-500' : 'text-white/80 hover:text-white'}`}>
                                                {item.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </motion.div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default ScrollyTelling;
