"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative z-30 bg-black text-white py-16 md:py-24 px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20">

                    {/* Brand Section */}
                    <div className="lg:col-span-1 border-b border-white/5 pb-12 md:border-none md:pb-0">
                        <img src="/images/logo.png" alt="Roots" className="h-10 w-auto mb-6 md:mb-8 invert" />
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 md:mb-8 max-w-sm">
                            Discover the pure taste of nature with Roots. Our commitment to quality and freshness ensures you get the best of the earth's bounty in every bottle.
                        </p>
                        <div className="flex gap-4">
                            {[
                                {
                                    name: "Instagram",
                                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                },
                                {
                                    name: "Facebook",
                                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                },
                                {
                                    name: "Twitter",
                                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                                }
                            ].map((social) => (
                                <a key={social.name} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group" aria-label={social.name}>
                                    <div className="group-hover:scale-110 transition-transform">
                                        {social.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {["Juices", "Our Story", "Health Benefits", "Sustainability", "Careers"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>123 Nature Way, Fruitland City</li>
                            <li>hello@roots-drinks.com</li>
                            <li>+1 (555) 000-ROO-TS</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-6">Stay updated with our latest blends and seasonal offerings.</p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-sm focus:outline-none focus:border-white/30 transition-all font-light"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-white text-black px-6 rounded-full text-xs font-bold hover:bg-gray-200 transition-colors uppercase">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} ROOTS BEVERAGES INC. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-tighter">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-tighter">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
