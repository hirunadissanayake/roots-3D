"use client";

import { useTransform, motion, MotionValue } from "framer-motion";
import { Product } from "@/data/products";

interface ScrollContentProps {
    product: Product;
    progress: MotionValue<number>;
}

export default function ScrollContent({ product, progress }: ScrollContentProps) {
    const scrollYProgress = progress;

    // Helper for opacity/y transitions
    // Section 1: 0.0 - 0.15
    const s1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
    const s1Y = useTransform(scrollYProgress, [0, 0.15], [0, -50]);
    const s1Scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);

    // Section 2: 0.17 - 0.32
    const s2Opacity = useTransform(scrollYProgress, [0.17, 0.22, 0.27, 0.32], [0, 1, 1, 0]);
    const s2Y = useTransform(scrollYProgress, [0.17, 0.22, 0.32], [50, 0, -50]);

    // Section 3: 0.34 - 0.49
    const s3Opacity = useTransform(scrollYProgress, [0.34, 0.39, 0.44, 0.49], [0, 1, 1, 0]);
    const s3Y = useTransform(scrollYProgress, [0.34, 0.39, 0.49], [50, 0, -50]);

    // Section 4: 0.51 - 0.66 (Fade in) -> 0.75 - 0.8 (Fade out for Hero Shot)
    const s4Opacity = useTransform(scrollYProgress, [0.51, 0.6, 0.75, 0.8], [0, 1, 1, 0]);
    const s4Y = useTransform(scrollYProgress, [0.51, 0.6, 0.8], [50, 0, -50]);

    return (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none">


            {/* Section 1 */}
            <motion.div
                style={{ opacity: s1Opacity, y: s1Y, scale: s1Scale }}
                className="absolute text-center max-w-4xl px-6"
            >
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4 text-white drop-shadow-sm leading-none">
                    {product.section1.title}
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/90">
                    {product.section1.subtitle}
                </p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-white/60 text-[10px] uppercase tracking-widest animate-pulse">Scroll to Explore</span>
                <div className="w-[1px] h-10 md:h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: s2Opacity, y: s2Y }}
                className="absolute text-center max-w-4xl px-6"
            >
                <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 text-white drop-shadow-sm leading-tight">
                    {product.section2.title}
                </h2>
                <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/90">
                    {product.section2.subtitle}
                </p>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: s3Opacity, y: s3Y }}
                className="absolute text-center max-w-4xl px-6 w-full"
            >
                <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 text-white drop-shadow-sm leading-tight">
                    {product.section3.title}
                </h2>
                <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-8 md:mb-12">
                    {product.section3.subtitle}
                </p>
                <div className="flex gap-6 md:gap-12 justify-center">
                    {product.stats.map((stat, i) => (
                        <div key={i} className="flex flex-col">
                            <span className="text-3xl md:text-5xl font-bold text-white">{stat.val}</span>
                            <span className="text-[10px] md:text-sm uppercase tracking-widest text-white/80">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Section 4 & Content */}
            <motion.div
                style={{ opacity: s4Opacity, y: s4Y }}
                className="absolute text-center max-w-4xl px-6 pointer-events-auto"
            >
                <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 text-white drop-shadow-sm leading-tight">
                    {product.section4.title}
                </h2>
                <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/90">
                    {product.section4.subtitle}
                </p>
            </motion.div>

        </div>
    );
}
