"use client";

import { Product } from "@/data/products";
import { motion } from "framer-motion";

interface ProductDetailsProps {
    product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
    return (
        <section className="relative z-30 bg-white text-black py-16 md:py-24 px-6 md:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">

                {/* Left Side: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-[10px] md:text-sm uppercase tracking-[0.3em] font-semibold text-gray-400 mb-4">
                        Premium Quality
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-6 md:mb-8 leading-none">
                        {product.name}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-light mb-8 md:mb-12 leading-relaxed">
                        Experience the pure essence of {product.name.toLowerCase()}. Crafted with passion and the finest ingredients, our {product.subName.toLowerCase()} is designed for those who value health without compromising on taste.
                    </p>

                    <div className="grid grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
                        {product.stats.map((stat, i) => (
                            <div key={i} className="border-l-2 border-gray-100 pl-4 md:pl-6 py-1 md:py-2">
                                <span className="block text-3xl md:text-4xl font-bold mb-1">{stat.val}</span>
                                <span className="text-[10px] md:text-sm uppercase tracking-widest text-gray-400 font-medium">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side: Purchase Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative group"
                >
                    <div
                        className="absolute inset-0 blur-3xl opacity-10 md:opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-[2rem] md:rounded-[3rem]"
                        style={{ backgroundColor: product.themeColor }}
                    />
                    <div className="relative bg-gray-50 border border-gray-100 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-xl">
                        <div className="flex justify-between items-start mb-8 md:mb-12">
                            <div>
                                <span className="text-[10px] md:text-sm font-semibold uppercase tracking-widest text-gray-400 block mb-2">Price</span>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl md:text-6xl font-bold">{product.buyNowSection.price}</span>
                                    <span className="text-sm md:text-xl text-gray-400 font-medium">/ {product.buyNowSection.unit}</span>
                                </div>
                            </div>
                            <div
                                className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white"
                                style={{ backgroundColor: product.themeColor }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                        </div>

                        <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                            <h3 className="text-base md:text-lg font-semibold">Key Features</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                {product.buyNowSection.processingParams.map((param, i) => (
                                    <div key={i} className="flex items-center gap-2 md:gap-3 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm">
                                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: product.themeColor }} />
                                        <span className="text-xs md:text-sm font-medium text-gray-700">{param}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            className="w-full py-4 md:py-6 rounded-full text-white font-bold text-lg md:text-xl transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
                            style={{ backgroundColor: product.themeColor }}
                        >
                            Add to Cart
                        </button>

                        <p className="text-center mt-4 md:mt-6 text-[10px] md:text-sm text-gray-400 font-medium group-hover:text-gray-600 transition-colors">
                            Free shipping on orders over Rs. 500
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full blur-[80px] md:blur-[120px] opacity-10 pointer-events-none" style={{ backgroundColor: product.themeColor }} />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full blur-[80px] md:blur-[120px] opacity-10 pointer-events-none" style={{ backgroundColor: product.themeColor }} />
        </section>
    );
}
