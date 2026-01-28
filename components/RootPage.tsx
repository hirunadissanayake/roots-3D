"use client";

import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { products, Product } from "@/data/products";
import BottleCanvas from "@/components/BottleCanvas";
import ScrollContent from "@/components/ScrollContent";
import ProductDetails from "@/components/ProductDetails";
import Footer from "@/components/Footer";
import Lenis from "lenis";

export default function RootPage() {
  const [activeProduct, setActiveProduct] = useState<Product>(products[0]);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress specifically for the scrollytelling container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Handle fading out the switcher as we reach the content section
  const switcherOpacity = useTransform(scrollYProgress, [0.85, 0.95], [1, 0]);
  const switcherPointerEvents = useTransform(scrollYProgress, [0.85, 0.95], ["auto" as const, "none" as const]);


  // Init Lenis and Mounting check
  useEffect(() => {
    setMounted(true);
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main className="relative min-h-screen overscroll-none">
      {/* Scroll Parent for Scrollytelling - Must be relative for useScroll target */}
      <div ref={containerRef} className="h-[500vh] relative">
        {mounted && (
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            {/* Background Transition Layer */}
            <div className="absolute inset-0 z-10">
              <motion.div
                key={activeProduct.id + "-bg"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
                style={{ background: activeProduct.gradient }}
              />
            </div>

            {/* Product Canvas Layer */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={activeProduct.id + "-bottle"}
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <BottleCanvas folderPath={activeProduct.folderPath} progress={scrollYProgress} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Scrollytelling Overlay */}
            <ScrollContent product={activeProduct} progress={scrollYProgress} />

            {/* Brand Logo / Header - Absolute within sticky */}
            <nav className="absolute top-0 left-0 w-full px-6 md:px-8 py-4 md:py-6 z-50 flex justify-between items-center">
              <div className="flex items-center">
                <img src="/images/logo.png" alt="Roots" className="h-8 md:h-12 w-auto object-contain hover:scale-105 transition-transform" />
              </div>

              <div className="hidden lg:flex gap-8 items-center bg-black/10 backdrop-blur-md px-8 py-3 rounded-full border border-white/10 shadow-lg">
                {["Juices", "Our Story", "Health Benefits", "Contact"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-white text-xs font-medium tracking-wide uppercase hover:text-white/70 transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>

              <button className="bg-white text-black px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm tracking-wide hover:bg-white/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,254,0.3)]">
                Order Now
              </button>
            </nav>

            {/* Flavor Switcher - Only visible during scrollytelling */}
            <motion.div
              style={{ opacity: switcherOpacity, pointerEvents: switcherPointerEvents }}
              className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4 md:px-6"
            >
              <div className="bg-black/20 backdrop-blur-2xl border border-white/10 p-1.5 md:p-2 rounded-full flex items-center overflow-x-auto gap-2 shadow-2xl no-scrollbar overflow-y-hidden">
                {products.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setActiveProduct(p);
                    }}
                    className={`whitespace-nowrap px-4 md:px-6 py-2 md:py-3 rounded-full text-[10px] md:text-sm font-medium transition-all duration-500 flex items-center justify-center gap-2 md:gap-3 min-w-[130px] md:min-w-[170px]
                                ${activeProduct.id === p.id
                        ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                      }
                            `}
                  >
                    <span
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${activeProduct.id === p.id ? 'ring-2 ring-black/20' : ''}`}
                      style={{ backgroundColor: p.themeColor }}
                    />
                    {p.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>

      {/* Static Content Sections - Following naturally in DOM */}
      <ProductDetails product={activeProduct} />
      <Footer />
    </main>
  );
}

